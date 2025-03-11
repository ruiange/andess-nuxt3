<template>
  <div class="custom-layout">
    <header class="custom-header">
      <h1>自定义布局</h1>
      <nav>
        <NuxtLink to="/">返回首页</NuxtLink>
      </nav>
    </header>
    
    <div class="custom-content">
      <aside class="sidebar">
        <h3>侧边栏菜单</h3>
        <ul>
          <li><NuxtLink to="/dashboard">控制面板</NuxtLink></li>
          <li><NuxtLink to="/profile">个人资料</NuxtLink></li>
          <li><NuxtLink to="/settings">设置</NuxtLink></li>
        </ul>
      </aside>
      
      <main class="main-area">
        <slot />
      </main>
    </div>
    
    <footer class="custom-footer">
      <p>自定义布局页脚 &copy; 2023</p>
    </footer>
  </div>
</template>

<style scoped>
.custom-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #f0f2f5;
}

.custom-header {
  background-color: #001529;
  color: white;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.custom-header a {
  color: white;
  text-decoration: none;
}

.custom-header a:hover {
  text-decoration: underline;
}

.custom-content {
  display: flex;
  flex: 1;
}

.sidebar {
  width: 250px;
  background-color: white;
  padding: 1.5rem;
  box-shadow: 2px 0 8px rgba(0, 0, 0, 0.1);
}

.sidebar ul {
  list-style: none;
  padding: 0;
  margin: 1rem 0;
}

.sidebar li {
  margin-bottom: 0.75rem;
}

.sidebar a {
  color: #333;
  text-decoration: none;
  display: block;
  padding: 0.5rem;
  border-radius: 4px;
}

.sidebar a:hover {
  background-color: #f0f2f5;
}

.main-area {
  flex: 1;
  padding: 2rem;
}

.custom-footer {
  background-color: #001529;
  color: white;
  text-align: center;
  padding: 1rem;
}
</style> 