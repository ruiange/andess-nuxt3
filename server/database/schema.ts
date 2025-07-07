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
    role: text('role').default('admin'), // 角色（默认admin）
    status: integer('status').default(1), // 状态（1=正常，0=禁用）
    createdAt: integer('created_at', { mode: 'timestamp' }).notNull(), // 创建时间（必填）
})

// 文章表
export const articles = sqliteTable('articles', {
    id: integer('id').primaryKey({ autoIncrement: true }), // 主键ID，自增
    title: text('title').notNull(), // 标题（必填）
    content: text('content').notNull(), // 内容（必填）
    publishedAt: integer('published_at', { mode: 'timestamp' }).notNull(), // 发布日期（必填）
    viewCount: integer('view_count').default(0), // 浏览次数（默认值为0）
    favoriteCount: integer('favorite_count').default(0), // 收藏次数（默认值为0）
    attachments: text('attachments').default('[]'), // 附件列表（JSON格式存储，默认为空数组）
    createdAt: integer('created_at', { mode: 'timestamp' }).notNull(), // 创建时间（必填）
    category: text('category'), // 分类（非必填，默认值为null）
});
