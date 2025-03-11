<template>
  <div class="about-page">
    <h1>关于我们</h1>
    
    <div class="about-content">
      <div class="about-text">
        <p>我们是一家专注于提供高质量 Web 应用的团队。我们的使命是创建直观、高效且美观的数字体验。</p>
        
        <p>我们的团队由经验丰富的开发人员、设计师和产品经理组成，他们共同努力，确保每个项目都能达到最高标准。</p>
        
        <h2>我们的价值观</h2>
        <ul>
          <li><strong>创新</strong> - 我们不断探索新技术和方法</li>
          <li><strong>质量</strong> - 我们注重细节，追求卓越</li>
          <li><strong>协作</strong> - 我们相信团队合作的力量</li>
          <li><strong>诚信</strong> - 我们以诚实和透明的方式开展业务</li>
        </ul>
      </div>
      
      <div class="about-image">
        <div class="image-placeholder">
          <span>团队照片</span>
        </div>
      </div>
    </div>
    
    <div class="contact-section">
      <h2>联系我们</h2>
      <p>如果您有任何问题或想了解更多信息，请随时联系我们。</p>
      <NuxtLink to="/contact" class="contact-button">联系我们</NuxtLink>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'default'
});
</script>

<style scoped>
.about-page {
  max-width: 1200px;
  margin: 0 auto;
}

h1 {
  margin-bottom: 2rem;
  color: #333;
}

.about-content {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  margin-bottom: 3rem;
}

.about-text {
  flex: 1;
  min-width: 300px;
}

.about-text p {
  margin-bottom: 1.5rem;
  font-size: 1.1rem;
}

.about-text h2 {
  margin: 1.5rem 0 1rem;
  color: #007bff;
}

.about-text ul {
  padding-left: 1.5rem;
}

.about-text li {
  margin-bottom: 0.5rem;
}

.about-image {
  flex: 1;
  min-width: 300px;
}

.image-placeholder {
  background-color: #e9ecef;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  color: #6c757d;
  font-size: 1.2rem;
}

.contact-section {
  background-color: #f8f9fa;
  padding: 2rem;
  border-radius: 8px;
  text-align: center;
  margin-top: 2rem;
}

.contact-section h2 {
  color: #333;
  margin-bottom: 1rem;
}

.contact-button {
  display: inline-block;
  background-color: #007bff;
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  text-decoration: none;
  font-weight: 500;
  margin-top: 1rem;
  transition: background-color 0.3s ease;
}

.contact-button:hover {
  background-color: #0056b3;
}
</style> 