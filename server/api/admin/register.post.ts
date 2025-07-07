import { readBody } from 'h3'
import { users } from '~/server/database/schema'
import { useDrizzle, eq } from '~/server/utils/drizzle'
import bcrypt from 'bcryptjs'

export default eventHandler(async (event) => {
  const { name, email, password, avatar } = await readBody(event)
  if (!name || !email || !password) {
    return { code: 400, message: '用户名、邮箱和密码不能为空' }
  }
  const db = useDrizzle()
  // 检查邮箱唯一
  const exist = await db.select().from(users).where(eq(users.email, email)).get()
  if (exist) {
    return { code: 409, message: '该邮箱已注册' }
  }
  // 密码加密
  const hash = await bcrypt.hash(password, 10)
  // 默认头像
  const avatarUrl = avatar || '/favicon.ico'
  // 写入数据库
  const result = await db.insert(users).values({
    name,
    email,
    password: hash,
    avatar: avatarUrl,
    role: 'admin',
    status: 1,
    createdAt: new Date()
  }).returning().get()
  if (result) {
    return { code: 200, message: '注册成功' }
  } else {
    return { code: 500, message: '注册失败，请重试' }
  }
}) 