import { readBody } from 'h3'

export default eventHandler(async (event) => {
  const { token } = await readBody(event)
  if (!token) return { valid: false }
  const userInfo = await hubKV().get(`admin-token-${token}`)
  if (typeof userInfo === 'string') {
    return { valid: true, user: JSON.parse(userInfo) }
  } else if (userInfo) {
    return { valid: true, user: userInfo }
  } else {
    return { valid: false }
  }
}) 