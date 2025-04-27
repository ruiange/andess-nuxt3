import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core'

// 联系表单表
export const contactForms = sqliteTable('contact_forms', {
    id: integer('id').primaryKey({ autoIncrement: true }), // 主键ID，自增
    name: text('name'), // 姓名
    email: text('email').notNull(), // 邮箱（必填）
    subject: text('subject'), // 主题
    message: text('message'), // 消息内容
    createdAt: integer('created_at', { mode: 'timestamp' }).notNull(), // 创建时间（必填）
})

// 用户表
export const users = sqliteTable('users', {
    id: integer('id').primaryKey({ autoIncrement: true }), // 主键ID，自增
    name: text('name').notNull(), // 用户名（必填）
    email: text('email').notNull().unique(), // 邮箱（必填且唯一）
    password: text('password').notNull(), // 密码（必填）
    avatar: text('avatar').notNull(), // 头像（必填）
    createdAt: integer('created_at', { mode: 'timestamp' }).notNull(), // 创建时间（必填）
})