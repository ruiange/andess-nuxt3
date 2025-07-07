<template>
  <div class="admin-dashboard">
    <t-row :gutter="[24, 24]">
      <t-col :xs="12" :sm="6" :lg="3">
        <NuxtLink to="#" class="dashboard-link">
          <t-card hover-shadow :style="cardStyle">
            <template #title>
              <t-icon name="usergroup" :style="iconStyle" /> 用户管理
            </template>
            <div class="dashboard-desc">管理平台用户，分配权限</div>
          </t-card>
        </NuxtLink>
      </t-col>
      <t-col :xs="12" :sm="6" :lg="3">
        <NuxtLink to="/admin/news" class="dashboard-link">
          <t-card hover-shadow :style="cardStyle">
            <template #title>
              <t-icon name="news" :style="iconStyle" /> 新闻模块
            </template>
            <div class="dashboard-desc">发布、编辑和管理新闻内容</div>
          </t-card>
        </NuxtLink>
      </t-col>
      <t-col :xs="12" :sm="6" :lg="3">
        <NuxtLink to="#" class="dashboard-link">
          <t-card hover-shadow :style="cardStyle">
            <template #title>
              <t-icon name="dashboard" :style="iconStyle" /> 控制面板
            </template>
            <div class="dashboard-desc">查看系统统计与运行状态</div>
          </t-card>
        </NuxtLink>
      </t-col>
      <t-col :xs="12" :sm="6" :lg="3">
        <NuxtLink to="#" class="dashboard-link">
          <t-card hover-shadow :style="cardStyle">
            <template #title>
              <t-icon name="setting" :style="iconStyle" /> 设置中心
            </template>
            <div class="dashboard-desc">系统参数与安全设置</div>
          </t-card>
        </NuxtLink>
      </t-col>
    </t-row>
  </div>
</template>

<script setup lang="ts">
// 使用自定义布局
import { computed } from 'vue'
import { useRouter } from '#app'
import { onMounted } from 'vue'

definePageMeta({ layout: 'admin' })

const router = useRouter()

const checkLogin = async () => {
  const token = useCookie('admin_token').value
  if (!token) {
    router.replace('/admin/login')
    return
  }
  // 服务端校验token是否有效
  const { data } = await useFetch('/api/admin/check', { method: 'POST', body: { token }, credentials: 'include' })
  if (!data.value || !(data.value as any).valid) {
    router.replace('/admin/login')
  }
}

onMounted(() => {
  checkLogin()
})

// 主题色样式
const cardStyle = computed(() => ({
  border: '1px solid #ce8b00',
  borderRadius: '10px',
  transition: 'box-shadow 0.2s',
}))
const iconStyle = {
  color: '#ce8b00',
  fontSize: '1.5rem',
  marginRight: '8px',
}
</script>

<style scoped>
.admin-dashboard {
  padding: 2rem 1rem;
}
.dashboard-link {
  text-decoration: none;
  display: block;
}
.t-card {
  min-height: 120px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;
  transition: box-shadow 0.2s;
}
.t-card:hover {
  box-shadow: 0 4px 16px rgba(206, 139, 0, 0.15);
}
.dashboard-desc {
  color: #666;
  margin-top: 0.5rem;
  font-size: 1rem;
}
</style>