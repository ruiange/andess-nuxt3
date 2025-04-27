<template>
  <t-layout>
    <t-aside>
      <t-menu
        default-value="dashboard"
        style="height: 100%"
      >
        <template #logo>
          <div class="menu-logo">管理后台</div>
        </template>
        <t-menu-item value="dashboard">
          <template #icon>
            <t-icon name="dashboard" />
          </template>
          控制面板
        </t-menu-item>
        <t-menu-item value="profile">
          <template #icon>
            <t-icon name="user" />
          </template>
          个人资料
        </t-menu-item>
        <t-menu-item value="settings">
          <template #icon>
            <t-icon name="setting" />
          </template>
          系统设置
        </t-menu-item>
      </t-menu>
    </t-aside>
    <t-layout>
      <t-header class="custom-header">
        <h1>自定义布局</h1>
        <nav>
          <NuxtLink to="/">返回首页</NuxtLink>
        </nav>
      </t-header>
      
      <t-content class="main-area">
        <main class="main-area">
          <slot />
        </main>
      </t-content>
      <t-footer class="custom-footer">
        <p>系统页脚 &copy; 2024</p>
      </t-footer>
    </t-layout>
  </t-layout>
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