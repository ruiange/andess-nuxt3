<template>
  <div class="min-h-[1024px]">
    <!-- 页面标题 -->
    <div class="bg-gray-50 py-16">
      <div class="max-w-[1440px] mx-auto px-8">
        <h1 class="text-4xl font-bold text-center">工程案例</h1>
        <p class="text-gray-600 text-center mt-4">展示我们的优质工程项目</p>
      </div>
    </div>
    
    <!-- 案例分类 -->
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
      
      <!-- 案例列表 -->
      <div class="grid grid-cols-3 gap-8">
        <div v-for="project in filteredProjects" :key="project.name" class="group cursor-pointer">
          <div class="aspect-video rounded-lg overflow-hidden mb-4">
            <NuxtLink :to="`/projects/${project.id}`">
              <img
                :src="project.image"
                class="w-full h-full object-cover transition duration-300 group-hover:scale-110"
              />
            </NuxtLink>
          </div>
          <div class="bg-white p-6 rounded-lg shadow-sm">
            <div class="flex justify-between items-center mb-3">
              <h4 class="font-bold text-lg">{{ project.name }}</h4>
              <span class="text-blue-600 text-sm">{{ project.type }}</span>
            </div>
            <p class="text-gray-600 text-sm mb-4">{{ project.desc }}</p>
            <div class="flex justify-between items-center">
              <span class="text-gray-500 text-sm">{{ project.location }}</span>
              <NuxtLink 
                :to="`/projects/${project.id}`" 
                class="!rounded-button bg-gray-100 text-gray-600 px-4 h-8 text-sm cursor-pointer whitespace-nowrap group-hover:bg-blue-600 group-hover:text-white inline-flex items-center justify-center"
              >查看详情</NuxtLink>
            </div>
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

import { ref, computed } from "vue";
import ProjectItem from '~/components/ProjectItem.vue';

const currentCategory = ref("全部");
const categories = ["全部", "工业地坪", "防水工程", "保温工程", "结构加固"];

const allProjects = [
  {
    id: "1",
    name: "上海国际金融中心",
    type: "工业地坪",
    desc: "为该项目地下停车场提供 15000 平方米环氧地坪解决方案，满足重载、防滑、美观等多重需求",
    location: "上海市浦东新区",
    image: "https://public.readdy.ai/ai/img_res/bb5b08fa68ff7e3fb062186b560e0b0c.jpg",
  },
  {
    id: "2",
    name: "北京科技园区",
    type: "工业地坪",
    desc: "为科技园区提供 20000 平方米金刚砂耐磨地坪，满足高强度使用需求",
    location: "北京市海淀区",
    image: "https://public.readdy.ai/ai/img_res/bb5b08fa68ff7e3fb062186b560e0b0c.jpg",
  },
  {
    id: "3",
    name: "南京奥体中心",
    type: "防水工程",
    desc: "完成体育场馆屋面 8000 平方米 SBS 防水卷材施工，确保场馆防水性能达到国际标准",
    location: "江苏省南京市",
    image: "https://public.readdy.ai/ai/img_res/e53aee0721850f371511bc3d3161a254.jpg",
  },
  {
    name: "广州地铁站",
    type: "防水工程",
    desc: "为地铁站提供地下防水解决方案，采用高性能防水材料，确保地铁站防水性能长期可靠",
    location: "广东省广州市",
    image: "https://public.readdy.ai/ai/img_res/e53aee0721850f371511bc3d3161a254.jpg",
  },
  {
    name: "杭州湾数据中心",
    type: "保温工程",
    desc: "采用新型岩棉保温板系统，完成 12000 平方米外墙保温施工，有效提升建筑节能效果",
    location: "浙江省宁波市",
    image: "https://public.readdy.ai/ai/img_res/ad6acb0748ae2c3772855d5d2ed176d6.jpg",
  },
  {
    name: "深圳高新科技园",
    type: "保温工程",
    desc: "为科技园区提供外墙保温解决方案，采用挤塑聚苯板，提升建筑保温隔热性能",
    location: "广东省深圳市",
    image: "https://public.readdy.ai/ai/img_res/ad6acb0748ae2c3772855d5d2ed176d6.jpg",
  },
  {
    name: "武汉长江大桥",
    type: "结构加固",
    desc: "为大桥提供结构加固解决方案，采用碳纤维加固技术，提升桥梁承载能力",
    location: "湖北省武汉市",
    image: "https://public.readdy.ai/ai/img_res/879e1962344565ed2ca90ceb42d1a460.jpg",
  },
  {
    name: "成都老旧小区改造",
    type: "结构加固",
    desc: "为老旧小区提供结构加固解决方案，采用植筋加固技术，提升建筑安全性",
    location: "四川省成都市",
    image: "https://public.readdy.ai/ai/img_res/879e1962344565ed2ca90ceb42d1a460.jpg",
  }
];

const filteredProjects = computed(() => {
  if (currentCategory.value === "全部") {
    return allProjects;
  }
  return allProjects.filter(project => project.type === currentCategory.value);
});
</script>

<style scoped>
/* 页面特定样式可以在这里添加 */
</style> 