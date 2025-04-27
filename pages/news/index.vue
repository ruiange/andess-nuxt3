<template>
  <div class="min-h-[1024px]">
    <!-- 页面标题 -->
    <div class="bg-gray-50 py-16">
      <div class="max-w-[1440px] mx-auto px-8">
        <h1 class="text-4xl font-bold text-center">新闻中心</h1>
        <p class="text-gray-600 text-center mt-4">了解我们的最新动态和行业资讯</p>
      </div>
    </div>
    
    <!-- 新闻分类 -->
    <div class="max-w-[1440px] mx-auto px-8 py-16">
      <div class="flex gap-4 mb-12 justify-center">
        <button
          v-for="cat in categories"
          :key="cat"
          @click="currentCategory = cat"
          class="!rounded-button px-6 h-10 cursor-pointer whitespace-nowrap"
          :class="currentCategory === cat ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-600'"
        >
          {{ cat }}
        </button>
      </div>
      
      <!-- 新闻列表 -->
      <div class="grid grid-cols-3 gap-8">
        <div v-for="item in filteredNews" :key="item.id" class="bg-white rounded-lg overflow-hidden shadow-sm group cursor-pointer">
          <div class="aspect-video overflow-hidden">
            <NuxtLink :to="`/news/${item.id}`">
              <img :src="item.image" class="w-full h-full object-cover transition duration-300 group-hover:scale-110"  alt=""/>
            </NuxtLink>
          </div>
          <div class="p-6">
            <div class="flex items-center gap-4 text-sm text-gray-500 mb-3">
              <span><i class="far fa-calendar-alt mr-2"></i>{{ item.date }}</span>
              <span><i class="far fa-eye mr-2"></i>{{ item.views }}</span>
            </div>
            <h4 class="font-bold text-lg mb-3 group-hover:text-blue-600">
              <NuxtLink :to="`/news/${item.id}`">{{ item.title }}</NuxtLink>
            </h4>
            <p class="text-gray-600 text-sm mb-4 line-clamp-2">
              {{ item.summary }}
            </p>
            <NuxtLink :to="`/news/${item.id}`" class="text-blue-600 text-sm flex items-center">
              阅读更多
              <i class="fas fa-arrow-right ml-2"></i>
            </NuxtLink>
          </div>
        </div>
      </div>
      
      <!-- 分页 -->
      <div class="flex justify-center mt-12">
        <div class="flex gap-2">
          <button class="w-10 h-10 flex items-center justify-center rounded border border-gray-200 text-gray-600">
            <i class="fas fa-chevron-left"></i>
          </button>
          <button 
            v-for="page in 5" 
            :key="page"
            class="w-10 h-10 flex items-center justify-center rounded border"
            :class="page === 1 ? 'bg-blue-600 text-white border-blue-600' : 'border-gray-200 text-gray-600'"
          >
            {{ page }}
          </button>
          <button class="w-10 h-10 flex items-center justify-center rounded border border-gray-200 text-gray-600">
            <i class="fas fa-chevron-right"></i>
          </button>
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

import {computed, ref} from "vue";

const currentCategory = ref("全部");
const categories = ["全部", "公司新闻", "行业资讯", "技术动态", "媒体报道"];

// 模拟新闻数据（实际应用中应该从API获取）
const allNews = [
  {
    id: "1",
    title: "建材之家荣获2025年度建材行业创新企业奖",
    summary: "在近日举行的2025年度建材行业峰会上，建材之家凭借在环保建材领域的突出创新成果，荣获'年度建材行业创新企业奖'。这是对公司在可持续发展道路上持续努力的肯定。",
    date: "2025-03-08",
    views: "2,358",
    category: "公司新闻",
    image: "https://public.readdy.ai/ai/img_res/d3cd44578f77a34f667116b3c5fc0513.jpg"
  },
  {
    id: "2",
    title: "新型环保地坪材料技术突破，助力碳中和",
    summary: "我司研发团队历时两年，成功开发出新一代环保型环氧地坪材料，VOC释放量较传统产品降低85%，同时保持优异的物理性能，获得国家发明专利。",
    date: "2025-03-05",
    views: "1,876",
    category: "技术动态",
    image: "https://public.readdy.ai/ai/img_res/b7f0fd25fe00a92ecbb1dce6165ea17d.jpg"
  },
  {
    id: "3",
    title: "建材之家完成杭州亚运场馆系列项目交付",
    summary: "历时8个月，建材之家圆满完成杭州亚运会主场馆及配套设施的防水、地坪等工程项目。项目采用多项创新技术，获得业主方高度评价。",
    date: "2025-03-01",
    views: "3,142",
    category: "公司新闻",
    image: "https://public.readdy.ai/ai/img_res/61910e850340dffa728d50321be5632e.jpg"
  },
  {
    id: "4",
    title: "建材之家与清华大学建立产学研合作关系",
    summary: "近日，建材之家与清华大学材料学院签署战略合作协议，双方将在新型建材研发、人才培养等方面展开深入合作，共同推动建材行业技术创新。",
    date: "2025-02-25",
    views: "2,567",
    category: "公司新闻",
    image: "https://public.readdy.ai/ai/img_res/d3cd44578f77a34f667116b3c5fc0513.jpg"
  },
  {
    id: "5",
    title: "2025年建材行业发展趋势分析：绿色、智能、高性能成主流",
    summary: "随着国家战略的深入推进，建材行业正加速向绿色、低碳、智能化方向转型。本文分析了2025年建材行业的主要发展趋势和市场机遇。",
    date: "2025-02-20",
    views: "4,215",
    category: "行业资讯",
    image: "https://public.readdy.ai/ai/img_res/b7f0fd25fe00a92ecbb1dce6165ea17d.jpg"
  },
  {
    id: "6",
    title: "《建筑时报》专访建材之家董事长：创新是企业发展的不竭动力",
    summary: "近日，《建筑时报》对建材之家董事长张志远进行了专访，张董事长分享了公司的创新理念、发展战略以及对行业未来的展望。",
    date: "2025-02-15",
    views: "3,567",
    category: "媒体报道",
    image: "https://public.readdy.ai/ai/img_res/d3cd44578f77a34f667116b3c5fc0513.jpg"
  },
  {
    id: "7",
    title: "新国标GB/T 39760-2025《建筑用防水涂料》正式实施",
    summary: "2025年2月1日，新修订的国家标准GB/T 39760-2025《建筑用防水涂料》正式实施，对防水涂料的环保性能、耐久性等提出了更高要求。",
    date: "2025-02-10",
    views: "2,890",
    category: "行业资讯",
    image: "https://public.readdy.ai/ai/img_res/3bde06f6373ffb6dae597dff678a06e1.jpg"
  },
  {
    id: "8",
    title: "建材之家推出新一代智能防水系统，实现远程监测与预警",
    summary: "建材之家近日推出新一代智能防水系统，通过嵌入式传感器和云平台，实现对建筑防水层的实时监测和预警，大幅提升防水工程的可靠性和使用寿命。",
    date: "2025-02-05",
    views: "3,124",
    category: "技术动态",
    image: "https://public.readdy.ai/ai/img_res/3bde06f6373ffb6dae597dff678a06e1.jpg"
  },
  {
    id: "9",
    title: "建材之家成功入选国家级绿色工厂名单",
    summary: "近日，工信部公布2025年国家级绿色工厂名单，建材之家凭借在节能减排、清洁生产等方面的突出表现，成功入选，成为建材行业的绿色发展标杆。",
    date: "2025-01-28",
    views: "2,765",
    category: "公司新闻",
    image: "https://public.readdy.ai/ai/img_res/d3cd44578f77a34f667116b3c5fc0513.jpg"
  }
];

const filteredNews = computed(() => {
  if (currentCategory.value === "全部") {
    return allNews;
  }
  return allNews.filter(news => news.category === currentCategory.value);
});
</script>

<style scoped>
/* 页面特定样式可以在这里添加 */
</style> 