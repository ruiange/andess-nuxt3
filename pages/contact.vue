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
          
          <button type="submit" class="submit-button">发送消息</button>
        </form>
      </div>
      
      <div class="contact-info">
        <h2>联系信息</h2>
        
        <div class="info-item">
          <strong>地址：</strong>
          <p>中国上海市浦东新区张江高科技园区</p>
        </div>
        
        <div class="info-item">
          <strong>电话：</strong>
          <p>+86 123 4567 8910</p>
        </div>
        
        <div class="info-item">
          <strong>电子邮件：</strong>
          <p>info@example.com</p>
        </div>
        
        <div class="info-item">
          <strong>工作时间：</strong>
          <p>周一至周五: 9:00 - 18:00</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref} from 'vue';

definePageMeta({
  layout: 'default'
});

const form = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
});

const submitForm = () => {
  alert('表单已提交！在实际应用中，这里会发送数据到服务器。');
  // 在实际应用中，这里会处理表单提交逻辑
  form.value = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };
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