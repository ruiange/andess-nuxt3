// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: false
  },
  modules: ['@nuxtjs/tailwindcss','@nuxthub/core'],
  nitro: {
    experimental: {
      openAPI: true
    }
  },
  compatibilityDate: '2025-04-25',

  // Nuxt 4 兼容性配置
  // https://nuxt.com/docs/getting-started/upgrade#testing-nuxt-4
  future: { compatibilityVersion: 4 },

  // NuxtHub 配置选项
  // https://hub.nuxt.com/docs/getting-started/installation#options
  hub: {
    // 启用数据库
    //https://hub.nuxt.com/docs/features/database
    database: true,
    // 启用 blob
    //https://hub.nuxt.com/docs/features/blob
    blob: true,
    // 启用 KV
    //https://hub.nuxt.com/docs/features/kv
    kv: true,
  },

  css: ['@fortawesome/fontawesome-free/css/all.css'],
  tailwindcss: {
    exposeConfig: true,
    viewer: true,
    // and more...
  }
})