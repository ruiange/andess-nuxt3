<template>
  <div class="dashboard">
    <h1>仪表盘</h1>
    <p>这个页面使用自定义布局，具有侧边栏导航。</p>
    
    <div class="dashboard-grid">
      <div class="dashboard-card">
        <h3>用户统计</h3>
        <div class="stat">1,234</div>
        <p>活跃用户</p>
      </div>
      
      <div class="dashboard-card">
        <h3>收入</h3>
        <div class="stat">¥9,876</div>
        <p>本月收入</p>
      </div>
      
      <div class="dashboard-card">
        <h3>订单</h3>
        <div class="stat">567</div>
        <p>待处理订单</p>
      </div>
      
      <div class="dashboard-card">
        <h3>评论</h3>
        <div class="stat">42</div>
        <p>新评论</p>
      </div>
    </div>
    
    <div class="recent-activity">
      <h2>最近活动</h2>
      <ul>
        <li>用户 A 完成了订单 #12345</li>
        <li>用户 B 发表了新评论</li>
        <li>用户 C 更新了个人资料</li>
        <li>用户 D 添加了新产品到购物车</li>
      </ul>
    </div>
  </div>
</template>

<script setup>
// 使用自定义布局
definePageMeta({
  layout: 'custom'
});
</script>

<style scoped>
.dashboard {
  padding: 1rem;
}

h1 {
  margin-bottom: 1rem;
  color: #333;
}

.dashboard-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
}

.dashboard-card {
  background-color: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.dashboard-card h3 {
  color: #666;
  font-size: 1rem;
  margin-bottom: 0.5rem;
}

.stat {
  font-size: 2rem;
  font-weight: bold;
  color: #001529;
  margin: 0.5rem 0;
}

.recent-activity {
  background-color: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-top: 2rem;
}

.recent-activity h2 {
  color: #333;
  margin-bottom: 1rem;
  font-size: 1.25rem;
}

.recent-activity ul {
  list-style: none;
  padding: 0;
}

.recent-activity li {
  padding: 0.75rem 0;
  border-bottom: 1px solid #eee;
}

.recent-activity li:last-child {
  border-bottom: none;
}
</style> 