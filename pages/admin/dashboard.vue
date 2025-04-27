<template>
  <div class="dashboard">
    <h1>仪表盘</h1>
    
    <t-row :gutter="[16, 16]">
      <t-col :xs="12" :sm="6" :lg="3">
        <t-card theme="primary" hover-shadow>
          <template #title>用户统计</template>
          <template #subtitle>活跃用户</template>
          <template #actions>
            <t-icon name="user" />
          </template>
          <div class="stat-number">1,234</div>
        </t-card>
      </t-col>
      
      <t-col :xs="12" :sm="6" :lg="3">
        <t-card theme="success" hover-shadow>
          <template #title>收入</template>
          <template #subtitle>本月收入</template>
          <template #actions>
            <t-icon name="money" />
          </template>
          <div class="stat-number">¥9,876</div>
        </t-card>
      </t-col>
      
      <t-col :xs="12" :sm="6" :lg="3">
        <t-card theme="warning" hover-shadow>
          <template #title>订单</template>
          <template #subtitle>待处理订单</template>
          <template #actions>
            <t-icon name="cart" />
          </template>
          <div class="stat-number">567</div>
        </t-card>
      </t-col>
      
      <t-col :xs="12" :sm="6" :lg="3">
        <t-card theme="danger" hover-shadow>
          <template #title>评论</template>
          <template #subtitle>新评论</template>
          <template #actions>
            <t-icon name="chat" />
          </template>
          <div class="stat-number">42</div>
        </t-card>
      </t-col>
    </t-row>
    
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
  layout: 'admin'
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

.stat-number {
  font-size: 24px;
  font-weight: bold;
  color: var(--td-brand-color);
  margin-top: 8px;
}
</style>