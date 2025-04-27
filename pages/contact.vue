

<template>
  <div class="contact-page">
    <h1>联系我们</h1>
    <p class="intro">我们很乐意听取您的意见和建议。请通过以下方式与我们联系。</p>
    
    <div class="contact-container">
      <div class="contact-form">
        <h2>发送消息</h2>
        <form @submit.prevent="submitForm">
          <div class="form-group">
            <label for="name">姓名</label>
            <input type="text" id="name" v-model="form.name" required>
          </div>
          
          <div class="form-group">
            <label for="email">电子邮件</label>
            <input type="email" id="email" v-model="form.email" required>
          </div>
          
          <div class="form-group">
            <label for="subject">主题</label>
            <input type="text" id="subject" v-model="form.subject" required>
          </div>
          
          <div class="form-group">
            <label for="message">消息</label>
            <textarea id="message" v-model="form.message" rows="5" required></textarea>
          </div>
          
          <button type="submit" class="submit-button" :disabled="loading">
            {{ loading ? '发送中...' : '发送消息' }}
          </button>
        </form>
      </div>
      
      <div class="contact-info">
        <h2>联系信息</h2>
        
        <div class="info-item">
          <strong>地址：</strong>
          <p>{{ contactInfo?.data?.address  }}</p>
        </div>
        
        <div class="info-item">
          <strong>电话：</strong>
          <p>{{ contactInfo?.data?.phone  }}</p>
        </div>
        
        <div class="info-item">
          <strong>电子邮件：</strong>
          <p>{{ contactInfo?.data?.email  }}</p>
        </div>
        

      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useMessage } from '@/composables/useMessage';

const { data: contactInfo } = await useFetch('/api/contact/info')

useHead({
  title: '联系我们'
});
definePageMeta({
  layout: 'default'
});

const message = useMessage();
const loading = ref(false);
const form = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
});

const validateForm = () => {
  if (!form.value.name.trim()) {
    message.error('请输入姓名');
    return false;
  }
  if (!form.value.email.trim()) {
    message.error('请输入电子邮件');
    return false;
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.value.email)) {
    message.error('请输入有效的电子邮件地址');
    return false;
  }
  if (!form.value.subject.trim()) {
    message.error('请输入主题');
    return false;
  }
  if (!form.value.message.trim()) {
    message.error('请输入消息内容');
    return false;
  }
  return true;
};

const submitForm = async () => {
  if (!validateForm()) return;
  
  loading.value = true;
  try {
    const { data, error } = await useFetch('/api/form/contact', {
      method: 'POST',
      body: form.value
    });

    if (error.value) {
      throw new Error(error.value.data?.message || '提交失败，请稍后重试');
    }

    if (data.value?.code === 2000) {
      message.success('提交成功！我们会尽快与您联系。');
      form.value = {
        name: '',
        email: '',
        subject: '',
        message: ''
      };
    } else {
      throw new Error(data.value?.message || '提交失败，请稍后重试');
    }
  } catch (err) {
    message.error(err.message);
  } finally {
    loading.value = false;
  }
};
</script>

<style scoped>
.contact-page {
  max-width: 1200px;
  margin: 0 auto;
}

h1 {
  margin-bottom: 1rem;
  color: #333;
}

.intro {
  font-size: 1.1rem;
  margin-bottom: 2rem;
  color: #666;
}

.contact-container {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
}

.contact-form {
  flex: 2;
  min-width: 300px;
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.contact-form h2 {
  margin-bottom: 1.5rem;
  color: #007bff;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-family: inherit;
  font-size: 1rem;
}

.form-group textarea {
  resize: vertical;
}

.submit-button {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.submit-button:hover {
  background-color: #0056b3;
}

.contact-info {
  flex: 1;
  min-width: 300px;
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.contact-info h2 {
  margin-bottom: 1.5rem;
  color: #007bff;
}

.info-item {
  margin-bottom: 1.5rem;
}

.info-item strong {
  display: block;
  margin-bottom: 0.5rem;
  color: #333;
}

.info-item p {
  margin: 0;
  color: #666;
}
</style>