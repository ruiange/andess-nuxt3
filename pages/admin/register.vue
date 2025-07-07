<template>
  <div class="admin-login-bg">
    <div class="admin-login-center">
      <div class="login-logo-area">
        <img src="/favicon.ico" alt="logo" class="login-logo" />
        <div class="login-title">安实创业后台注册</div>
        <div class="login-welcome">欢迎注册企业管理平台账号</div>
      </div>
      <t-card class="login-card">
        <template #title>
          <t-icon name="user-add" style="color:#ce8b00;font-size:2rem;" /> 账号注册
        </template>
        <t-form :data="form" @submit="onSubmit" :rules="rules" label-width="0">
          <t-form-item name="name" label="用户名">
            <t-input v-model="form.name" placeholder="请输入用户名" size="large" />
          </t-form-item>
          <t-form-item name="email" label="邮箱">
            <t-input v-model="form.email" placeholder="请输入邮箱" size="large" />
          </t-form-item>
          <t-form-item name="password" label="密码">
            <t-input v-model="form.password" type="password" placeholder="请输入密码" size="large" />
          </t-form-item>
          <t-form-item name="confirm" label="确认密码">
            <t-input v-model="form.confirm" type="password" placeholder="请再次输入密码" size="large" />
          </t-form-item>
          <t-form-item name="avatar" label="头像（可选）">
            <t-input v-model="form.avatar" placeholder="头像图片URL（可选）" size="large" />
          </t-form-item>
          <t-form-item>
            <t-button theme="primary" type="submit" block :loading="loading" class="login-btn">注册</t-button>
          </t-form-item>
        </t-form>
        <div class="text-center mt-4">
          已有账号？<NuxtLink to="/admin/login" style="color:#ce8b00;">去登录</NuxtLink>
        </div>
      </t-card>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

definePageMeta({ layout: 'no' })

const router = useRouter()
const form = ref({ name: '', email: '', password: '', confirm: '', avatar: '' })
const loading = ref(false)

const rules = {
  name: [
    { required: true, message: '请输入用户名', trigger: 'blur' as const }
  ],
  email: [
    { required: true, message: '请输入邮箱', trigger: 'blur' as const },
    { pattern: /^[^@\s]+@[^@\s]+\.[^@\s]+$/, message: '邮箱格式不正确', trigger: 'blur' as const }
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' as const },
    { min: 6, message: '密码至少6位', trigger: 'blur' as const }
  ],
  confirm: [
    { required: true, message: '请确认密码', trigger: 'blur' as const },
    {
      validator: (val: string) => val === form.value.password,
      message: '两次输入的密码不一致',
      trigger: 'blur' as const
    }
  ]
}

const onSubmit = async () => {
  loading.value = true
  try {
    const { data, error } = await useFetch('/api/admin/register', {
      method: 'POST',
      body: form.value
    })
    if (error.value) throw error.value
    if (data.value && (data.value as any).code === 200) {
      if (typeof window !== 'undefined' && (window as any).$message) {
        (window as any).$message.success('注册成功，请登录')
      } else {
        alert('注册成功，请登录')
      }
      router.push('/admin/login')
    } else {
      if (typeof window !== 'undefined' && (window as any).$message) {
        (window as any).$message.error((data.value as any)?.message || '注册失败')
      } else {
        alert((data.value as any)?.message || '注册失败')
      }
    }
  } catch (e: any) {
    if (typeof window !== 'undefined' && (window as any).$message) {
      (window as any).$message.error(e.message || '注册失败')
    } else {
      alert(e.message || '注册失败')
    }
  } finally {
    loading.value = false
  }
}
</script>

<style scoped lang="less">
@import '@/assets/css/login.less';
</style> 