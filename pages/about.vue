<!-- The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work. -->

<template>
    <div class="min-h-[1024px]">
      <!-- Banner -->
      <div class="relative h-[400px] bg-cover bg-center" :style="{ backgroundImage: `url(${bannerImage})` }">
        <div class="absolute inset-0 bg-black/50">
          <div class="max-w-[1440px] mx-auto px-8 h-full flex items-center">
            <h1 class="text-5xl font-bold text-white">关于我们</h1>
          </div>
        </div>
      </div>
    
      <!-- 公司简介 -->
      <div class="max-w-[1440px] mx-auto px-8 py-20">
        <div class="flex gap-12 items-center">
          <div class="flex-1">
            <h2 class="text-3xl font-bold mb-8">25 年专业建材服务经验</h2>
            <p class="text-gray-600 leading-relaxed mb-8">建材之家成立于 2000 年，是中国领先的建筑材料供应商。我们专注于为建筑工程提供高品质的建材产品和专业的技术服务。经过 25 年的发展，公司已形成完整的产业链，包括研发、生产、销售和技术服务。</p>
            <div class="grid grid-cols-3 gap-8">
              <div v-for="stat in companyStats" :key="stat.value" class="text-center">
                <div class="text-4xl font-bold text-blue-600 mb-2">{{ stat.value }}</div>
                <div class="text-gray-600">{{ stat.label }}</div>
              </div>
            </div>
          </div>
          <div class="w-[500px] rounded-lg overflow-hidden">
            <img :src="companyImage" class="w-full h-[400px] object-cover">
          </div>
        </div>
      </div>
    
      <!-- 发展历程 -->
      <div class="bg-gray-50 py-20">
        <div class="max-w-[1440px] mx-auto px-8">
          <h2 class="text-3xl font-bold text-center mb-12">发展历程</h2>
          <div class="relative">
            <div class="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 -translate-x-1/2"></div>
            <div class="space-y-12">
              <div v-for="(milestone, index) in milestones" :key="milestone.year" 
                   class="flex items-center gap-8" 
                   :class="index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'">
                <div class="flex-1" :class="index % 2 === 0 ? 'text-right' : 'text-left'">
                  <div class="text-2xl font-bold text-blue-600 mb-2">{{ milestone.year }}</div>
                  <div class="text-gray-600">{{ milestone.content }}</div>
                </div>
                <div class="w-4 h-4 bg-blue-600 rounded-full relative z-10"></div>
                <div class="flex-1"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    
      <!-- 企业文化 -->
      <div class="max-w-[1440px] mx-auto px-8 py-20">
        <h2 class="text-3xl font-bold text-center mb-12">企业文化</h2>
        <div class="grid grid-cols-3 gap-8">
          <div v-for="culture in companyCulture" :key="culture.title" 
               class="bg-white p-8 rounded-lg shadow-sm hover:shadow-lg transition duration-300">
            <i :class="culture.icon" class="text-4xl text-blue-600 mb-6"></i>
            <h3 class="text-xl font-bold mb-4">{{ culture.title }}</h3>
            <p class="text-gray-600">{{ culture.content }}</p>
          </div>
        </div>
      </div>
    
      <!-- 管理团队 -->
      <div class="bg-gray-50 py-20">
        <div class="max-w-[1440px] mx-auto px-8">
          <h2 class="text-3xl font-bold text-center mb-12">管理团队</h2>
          <div class="grid grid-cols-4 gap-8">
            <div v-for="member in teamMembers" :key="member.name" 
                 class="bg-white rounded-lg overflow-hidden group cursor-pointer">
              <div class="aspect-square overflow-hidden">
                <img :src="member.image" class="w-full h-full object-cover transition duration-300 group-hover:scale-110">
              </div>
              <div class="p-6">
                <h3 class="font-bold text-lg mb-1">{{ member.name }}</h3>
                <div class="text-blue-600 text-sm mb-4">{{ member.position }}</div>
                <p class="text-gray-600 text-sm">{{ member.desc }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    
      <!-- 荣誉资质 -->
      <div class="max-w-[1440px] mx-auto px-8 py-20">
        <h2 class="text-3xl font-bold text-center mb-12">荣誉资质</h2>
        <div class="grid grid-cols-4 gap-8">
          <div v-for="cert in certificates" :key="cert.name" 
               class="bg-white p-6 rounded-lg shadow-sm hover:shadow-lg transition duration-300 cursor-pointer">
            <div class="aspect-square rounded-lg overflow-hidden mb-4">
              <img :src="cert.image" class="w-full h-full object-cover">
            </div>
            <h3 class="font-bold mb-2">{{ cert.name }}</h3>
            <p class="text-gray-600 text-sm">{{ cert.desc }}</p>
          </div>
        </div>
      </div>
    
      <!-- 联系我们 -->
      <div class="bg-gray-50 py-20">
        <div class="max-w-[1440px] mx-auto px-8">
          <h2 class="text-3xl font-bold text-center mb-12">联系我们</h2>
          <div class="flex gap-12">
            <div class="flex-1 bg-white rounded-lg p-8">
              <div class="space-y-6">
                <div>
                  <h3 class="font-bold mb-4">联系方式</h3>
                  <div class="space-y-3">
                    <div class="flex items-center gap-3 text-gray-600">
                      <i class="fas fa-phone"></i>
                      <span>400-888-8888</span>
                    </div>
                    <div class="flex items-center gap-3 text-gray-600">
                      <i class="fas fa-envelope"></i>
                      <span>contact@jiancai.com</span>
                    </div>
                    <div class="flex items-center gap-3 text-gray-600">
                      <i class="fas fa-map-marker-alt"></i>
                      <span>上海市浦东新区张江高科技园区</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 class="font-bold mb-4">社交媒体</h3>
                  <div class="flex gap-4">
                    <i class="fab fa-weixin text-2xl text-gray-600 cursor-pointer"></i>
                    <i class="fab fa-weibo text-2xl text-gray-600 cursor-pointer"></i>
                    <i class="fab fa-qq text-2xl text-gray-600 cursor-pointer"></i>
                  </div>
                </div>
              </div>
            </div>
            <div class="w-[600px] bg-white rounded-lg overflow-hidden">
              <img :src="mapImage" class="w-full h-[400px] object-cover">
            </div>
          </div>
        </div>
      </div>
    </div>
</template>
    
<script lang="ts" setup>

// 指定使用默认布局
definePageMeta({
  layout: 'default'
});
    
const bannerImage = 'https://public.readdy.ai/ai/img_res/3749f1e91c4a201b63bb775267eaed72.jpg';
const companyImage = 'https://public.readdy.ai/ai/img_res/d5c3953399481f995f18a6c9a16a87e4.jpg';
const mapImage = 'https://public.readdy.ai/ai/img_res/0e96d05b6215f0a9bc00d97e284308ce.jpg';
    
const companyStats = [
  { value: '25+', label: '年行业经验' },
  { value: '10000+', label: '服务项目' },
  { value: '98%', label: '客户满意度' }
];
    
const milestones = [
  { year: '2000', content: '公司成立，开始提供基础建材产品' },
  { year: '2005', content: '获得 ISO9001 质量管理体系认证' },
  { year: '2010', content: '成立研发中心，开始自主研发产品' },
  { year: '2015', content: '荣获"中国建材行业领军企业"称号' },
  { year: '2020', content: '完成数字化转型，推出智能建材解决方案' },
  { year: '2025', content: '服务项目突破 10000 个，成为行业标杆' }
];
    
const companyCulture = [
  {
    icon: 'fas fa-eye',
    title: '企业愿景',
    content: '致力于成为全球领先的建材解决方案提供商，引领行业发展，创造美好人居环境。'
  },
  {
    icon: 'fas fa-bullseye',
    title: '企业使命',
    content: '以创新科技服务建筑，用优质产品改善生活，为客户创造更大价值。'
  },
  {
    icon: 'fas fa-heart',
    title: '核心价值观',
    content: '诚信、创新、专业、共赢，始终以客户需求为导向，追求卓越品质。'
  }
];
    
const teamMembers = [
  {
    name: '张志远',
    position: '董事长',
    desc: '拥有 30 年建材行业经验，曾主导多个重大项目',
    image: 'https://public.readdy.ai/ai/img_res/0b3cc792428a35c1b96db497152afd84.jpg'
  },
  {
    name: '李明珠',
    position: '技术总监',
    desc: '清华大学博士，20 年研发经验，多项发明专利',
    image: 'https://public.readdy.ai/ai/img_res/c057ff4ee4071bb06dffec620136d74c.jpg'
  },
  {
    name: '王建国',
    position: '营销总监',
    desc: '15 年市场营销经验，擅长品牌战略规划',
    image: 'https://public.readdy.ai/ai/img_res/fdac4a4ce1a1f18cbbddc4f17f3ac7f7.jpg'
  },
  {
    name: '陈雨婷',
    position: '研发主管',
    desc: '10 年材料学研究经验，主导多项创新产品研发',
    image: 'https://public.readdy.ai/ai/img_res/40287a7cbded6d46d178f44a7912511b.jpg'
  }
];
    
const certificates = [
  {
    name: 'ISO9001 认证',
    desc: '质量管理体系认证',
    image: 'https://public.readdy.ai/ai/img_res/81becf4b6f2b615b14f79ac8749e787d.jpg'
  },
  {
    name: 'ISO14001 认证',
    desc: '环境管理体系认证',
    image: 'https://public.readdy.ai/ai/img_res/fb9973e70c3c26d987f48ef918e3bf90.jpg'
  },
  {
    name: '国家高新技术企业',
    desc: '科技创新能力认证',
    image: 'https://public.readdy.ai/ai/img_res/8b58f678d40c1e08741e2bf5163763e4.jpg'
  },
  {
    name: '建材行业示范企业',
    desc: '行业领军地位认证',
    image: 'https://public.readdy.ai/ai/img_res/310ca516dee0c271e0aefb760795ff10.jpg'
  }
];
</script>
    
<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
    
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
    
    