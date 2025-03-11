<template>
  <div class="layout-container">
    <header class="header">
      <nav>
        <NuxtLink to="/">首页</NuxtLink>
        <NuxtLink to="/about">关于</NuxtLink>
        <NuxtLink to="/contact">联系我们</NuxtLink>
      </nav>
    </header>
    
    <main class="main-content">
      <slot />
    </main>
    
    <footer class="footer">
      <p>&copy; 2023 我的 Nuxt 应用</p>
    </footer>
  </div>
</template>

<style scoped>
.layout-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.header {
  background-color: #f8f9fa;
  padding: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.header nav {
  display: flex;
  gap: 1.5rem;
}

.header a {
  color: #333;
  text-decoration: none;
  font-weight: 500;
}

.header a:hover {
  color: #007bff;
}

.main-content {
  flex: 1;
  padding: 2rem;
}

.footer {
  background-color: #f8f9fa;
  padding: 1rem;
  text-align: center;
  color: #6c757d;
}
</style> 