<template>
  <div class="layout-container">
    <!-- 导航栏 -->
    <nav class="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
      <div class="max-w-[1440px] mx-auto px-8 h-20 flex items-center justify-between">
        <div class="flex items-center gap-16">
          <NuxtLink to="/" class="text-2xl font-bold">建材之家</NuxtLink>
          <div class="flex gap-8">
            <NuxtLink 
              v-for="item in navItems" 
              :key="item.name" 
              :to="item.path" 
              class="text-gray-600 hover:text-[#ce8b00] cursor-pointer"
              :exact-active-class="'!text-[#ce8b00] !font-medium'"
            >
              {{ item.name }}
            </NuxtLink>
          </div>
        </div>
        <div class="flex items-center gap-4">
          <div class="relative">
            <input type="text" placeholder="搜索产品或解决方案" class="w-64 h-10 pl-10 pr-4 rounded-lg bg-gray-100 border-none text-sm">
            <i class="fas fa-search absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"></i>
          </div>
          <NuxtLink to="/contact" class="!rounded-button bg-[#ce8b00] text-white px-6 h-10 cursor-pointer whitespace-nowrap flex items-center justify-center">联系我们</NuxtLink>
        </div>
      </div>
    </nav>
    
    <!-- 主内容区域 -->
    <div class="pt-20">
      <slot />
    </div>
    
    <!-- 页脚 -->
    <footer class="bg-gray-900 text-white py-16">
      <div class="max-w-[1440px] mx-auto px-8">
        <div class="grid grid-cols-4 gap-8 mb-12">
          <div>
            <h4 class="text-xl font-bold mb-6">关于我们</h4>
            <p class="text-gray-400">建材之家成立于 2000 年，是中国领先的建筑材料供应商，专注于为客户提供高品质的建材产品和专业的技术服务。</p>
          </div>
          <div>
            <h4 class="text-xl font-bold mb-6">联系方式</h4>
            <div class="space-y-4 text-gray-400">
              <p>电话：400-888-8888</p>
              <p>邮箱：contact@jiancai.com</p>
              <p>地址：上海市浦东新区张江高科技园区</p>
            </div>
          </div>
          <div>
            <h4 class="text-xl font-bold mb-6">快速导航</h4>
            <div class="space-y-4">
              <NuxtLink 
                v-for="item in navItems" 
                :key="item.name" 
                :to="item.path" 
                class="block text-gray-400 hover:text-white cursor-pointer"
                :exact-active-class="'!text-white !font-medium'"
              >
                {{ item.name }}
              </NuxtLink>
            </div>
          </div>
          <div>
            <h4 class="text-xl font-bold mb-6">关注我们</h4>
            <div class="flex gap-4">
              <i class="fab fa-weixin text-2xl cursor-pointer"></i>
              <i class="fab fa-weibo text-2xl cursor-pointer"></i>
              <i class="fab fa-qq text-2xl cursor-pointer"></i>
            </div>
          </div>
        </div>
        <div class="text-center text-gray-400 pt-8 border-t border-gray-800">
          <p>© 2025 建材之家. 保留所有权利</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
const navItems = [
  { name: '首页', path: '/' },
  { name: '产品中心', path: '/products' },
  { name: '解决方案', path: '/solutions' },
  { name: '工程案例', path: '/projects' },
  { name: '新闻中心', path: '/news' },
  { name: '关于我们', path: '/about' }
];
</script>

<style scoped>
.layout-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
</style>
