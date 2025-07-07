<template>
  <div class="admin-login-bg">
    <div class="admin-login-center">
      <div class="login-logo-area">
        <img src="/favicon.ico" alt="logo" class="login-logo" />
        <div class="login-title">安实创业后台管理</div>
        <div class="login-welcome">欢迎登录企业管理平台</div>
      </div>
      <t-card class="login-card">
        <template #title>
          <t-icon name="user" style="color:#ce8b00;font-size:2rem;" /> 后台登录
        </template>
        <t-form :data="form" @submit="onSubmit" :rules="rules" label-width="0">
          <t-form-item name="email" label="邮箱">
            <t-input v-model="form.email" placeholder="请输入邮箱" size="large" />
          </t-form-item>
          <t-form-item name="password" label="密码">
            <t-input v-model="form.password" type="password" placeholder="请输入密码" size="large" />
          </t-form-item>
          <t-form-item>
            <t-button theme="primary" type="submit" block :loading="loading" class="login-btn">登录</t-button>
          </t-form-item>
        </t-form>
      </t-card>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

definePageMeta({ layout: 'no' })

const router = useRouter()
const form = ref({ email: '', password: '' })
const loading = ref(false)

const rules = {
  email: [
    { required: true, message: '请输入邮箱', trigger: 'blur' as const },
    { pattern: /^[^@\s]+@[^@\s]+\.[^@\s]+$/, message: '邮箱格式不正确', trigger: 'blur' as const }
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' as const }
  ]
}

const onSubmit = async () => {
  loading.value = true
  try {
    const { data, error } = await useFetch('/api/admin/login', {
      method: 'POST',
      body: form.value
    })
    if (error.value) throw error.value
    if (data.value && (data.value as any).token) {
      router.push('/admin/dashboard')
    } else {
      if (typeof window !== 'undefined' && (window as any).$message) {
        (window as any).$message.error((data.value as any)?.message || '登录失败')
      } else {
        alert((data.value as any)?.message || '登录失败')
      }
    }
  } catch (e: any) {
    if (typeof window !== 'undefined' && (window as any).$message) {
      (window as any).$message.error(e.message || '登录失败')
    } else {
      alert(e.message || '登录失败')
    }
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
.admin-login-bg {
  min-height: 100vh;
  width: 100vw;
  background: linear-gradient(135deg, #fffbe6 0%, #fff 100%);
  display: flex;
  align-items: center;
  justify-content: center;
}
.admin-login-center {
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
}
.login-logo-area {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 8px;
}
.login-logo {
  width: 56px;
  height: 56px;
  border-radius: 12px;
  margin-bottom: 8px;
  box-shadow: 0 2px 8px rgba(206,139,0,0.08);
}
.login-title {
  font-size: 1.5rem;
  font-weight: bold;
  color: #ce8b00;
  margin-bottom: 4px;
}
.login-welcome {
  color: #888;
  font-size: 1rem;
  margin-bottom: 8px;
}
.login-card {
  width: 100%;
  border: 1px solid #ce8b00;
  border-radius: 16px;
  box-shadow: 0 6px 32px rgba(206,139,0,0.10);
  padding: 32px 24px 24px 24px;
  background: #fff;
}
.login-btn {
  background: #ce8b00;
  border: none;
  font-size: 1.1rem;
  font-weight: bold;
  height: 48px;
  border-radius: 8px;
  margin-top: 8px;
  box-shadow: 0 2px 8px rgba(206,139,0,0.08);
}
.login-btn:hover {
  background: #b87a00;
}
</style> 