import { readBody, setCookie } from 'h3'
import { users } from '~/server/database/schema'
import { useDrizzle, eq } from '~/server/utils/drizzle'
import bcrypt from 'bcryptjs'
import { v4 as uuidv4 } from 'uuid'

export default eventHandler(async (event) => {
  const { email, password } = await readBody(event)
  if (!email || !password) {
    return { code: 400, message: '邮箱和密码不能为空' }
  }

  // 查询用户
  const db = useDrizzle()

  const user = await db.select().from(users).where(eq(users.email, email)).get()
  if (!user) {
    return { code: 401, message: '用户不存在' }
  }
  if (user.status === 0) {
    return { code: 403, message: '用户已被禁用' }
  }
  // 校验密码
  const valid = await bcrypt.compare(password, user.password)
  if (!valid) {
    return { code: 401, message: '密码错误' }
  }
  // 生成token并写入KV
  const token = uuidv4()
  const tokenKey = `admin-token-${token}`
  await hubKV().set(tokenKey, JSON.stringify({
    id: user.id,
    email: user.email,
    name: user.name,
    avatar: user.avatar,
    role: user.role,
    createdAt: user.createdAt
  }), { expirationTtl: 60 * 60 * 2 }) // 2小时有效
  // 设置cookie
  setCookie(event, 'admin_token', token, { httpOnly: false, path: '/', maxAge: 60 * 60 * 2 })
  return {
    code: 200,
    message: '登录成功',
    token,
    user: { id: user.id, name: user.name, email: user.email, avatar: user.avatar, role: user.role }
  }
}) 