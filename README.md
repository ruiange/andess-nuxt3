# 安实创业企业网站
 ![首页截图](./doc/index.png)

## 项目简介
安实创业是一个专业的建材解决方案提供商的企业网站，基于 Nuxt 3 框架开发，采用现代化的设计风格和用户友好的界面，展示公司的产品、解决方案、工程案例和新闻资讯。

## 前置
启动或者部署完成后，先请求初始化接口 /api/admin/script/run

## 主要功能

### 1. 产品展示
- 多类别产品展示（地坪材料、防水材料、保温材料、装饰材料、结构加固）
- 产品分类筛选
- 产品详情页展示
- 产品咨询和资料下载

### 2. 解决方案
- 工业地坪解决方案
- 建筑防水解决方案
- 外墙保温解决方案
- 建筑加固解决方案
- 方案特点和优势展示

### 3. 工程案例
- 案例展示和筛选
- 详细的项目介绍
- 案例分类浏览
- 项目效果展示

### 4. 新闻中心
- 公司新闻
- 行业资讯
- 技术动态
- 媒体报道

## 技术栈
- 框架：Nuxt 3
- UI框架：Tailwind CSS
- 图标：Font Awesome
- 轮播组件：Swiper

## 项目特点
1. 响应式设计：适配各种设备屏幕
2. 现代化UI：采用简洁明了的设计风格
3. 用户友好：直观的导航和交互
4. 性能优化：采用组件化开发，提高代码复用性
5. SEO友好：使用Nuxt 3框架的SSR特性

## 目录结构
```
├── app.vue                 # 应用入口文件
├── nuxt.config.ts         # Nuxt配置文件
├── package.json           # 项目依赖配置
├── tsconfig.json          # TypeScript配置
├── components/            # 组件目录
│   ├── ProductItem.vue    # 产品展示组件
│   ├── ProjectItem.vue    # 工程案例展示组件
│   └── NewsItem.vue       # 新闻展示组件
├── layouts/               # 布局文件
│   └── default.vue        # 默认布局组件
├── pages/                 # 页面文件
│   ├── index.vue         # 首页
│   ├── about.vue         # 关于我们
│   ├── contact.vue       # 联系我们
│   ├── dashboard.vue     # 控制面板
│   ├── products/         # 产品相关页面
│   │   ├── index.vue     # 产品列表页
│   │   └── [id].vue      # 产品详情页
│   ├── solutions/        # 解决方案相关页面
│   ├── projects/         # 工程案例相关页面
│   │   ├── index.vue     # 案例列表页
│   │   └── [id].vue      # 案例详情页
│   └── news/             # 新闻相关页面
│       ├── index.vue     # 新闻列表页
│       └── [id].vue      # 新闻详情页
├── public/               # 静态资源目录
├── server/               # 服务端文件
└── .nuxt/                # Nuxt构建目录
```

## 主要组件
- `ProductItem`: 产品展示组件
- `ProjectItem`: 工程案例展示组件
- `NewsItem`: 新闻展示组件
- `Layout`: 全局布局组件

