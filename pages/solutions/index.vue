<template>
  <div class="min-h-[1024px]">
    <!-- 页面标题 -->
    <div class="bg-gray-50 py-16">
      <div class="max-w-[1440px] mx-auto px-8">
        <h1 class="text-4xl font-bold text-center">解决方案</h1>
        <p class="text-gray-600 text-center mt-4">为各行业提供专业的建材解决方案</p>
      </div>
    </div>
    
    <!-- 解决方案内容 -->
    <div class="max-w-[1440px] mx-auto px-8 py-16">
      <div class="flex gap-8">
        <!-- 左侧导航 -->
        <div class="w-64 bg-white rounded-lg p-6 shadow-sm">
          <div
            v-for="solution in solutions"
            :key="solution"
            @click="currentSolution = solution"
            class="py-3 px-4 rounded cursor-pointer mb-2"
            :class="currentSolution === solution ? 'bg-blue-600 text-white' : 'text-gray-600'"
          >
            {{ solution }}
          </div>
        </div>
        
        <!-- 右侧内容 -->
        <div class="flex-1 bg-white rounded-lg p-8 shadow-sm">
          <div class="flex gap-8">
            <div class="flex-1">
              <h4 class="text-2xl font-bold mb-4">{{ currentSolution }}</h4>
              <p class="text-gray-600 mb-6">
                {{ getSolutionDescription(currentSolution) }}
              </p>
              <ul class="space-y-4">
                <li v-for="(feature, index) in getSolutionFeatures(currentSolution)" :key="index" class="flex items-center gap-3">
                  <i class="fas fa-check-circle text-blue-600"></i>
                  <span>{{ feature }}</span>
                </li>
              </ul>
              
              <div class="mt-8">
                <h5 class="text-xl font-bold mb-4">适用场景</h5>
                <div class="grid grid-cols-2 gap-4">
                  <div v-for="(scenario, index) in getSolutionScenarios(currentSolution)" :key="index" class="flex items-center gap-2">
                    <i class="fas fa-building text-blue-600"></i>
                    <span>{{ scenario }}</span>
                  </div>
                </div>
              </div>
              
              <button class="!rounded-button bg-blue-600 text-white px-6 h-10 cursor-pointer whitespace-nowrap mt-8">
                获取方案详情
              </button>
            </div>
            <div class="w-80 rounded-lg overflow-hidden">
              <img :src="getSolutionImage(currentSolution)" class="w-full h-full object-cover" />
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

import { ref } from "vue";

const solutions = [
  "工业地坪解决方案",
  "建筑防水解决方案",
  "外墙保温解决方案",
  "建筑加固解决方案",
];
const currentSolution = ref("工业地坪解决方案");

const solutionData = {
  "工业地坪解决方案": {
    description: "针对不同行业的地坪需求，我们提供专业的解决方案，包括环氧地坪、密封固化地坪、彩色艺术地坪等多种选择。我们的方案具有耐磨、防腐、防滑等特性，满足各类工业场所的使用需求。",
    features: ["超强耐磨性能", "优异防腐蚀性能", "卓越防滑性能", "美观持久", "施工周期短"],
    scenarios: ["工厂车间", "物流仓库", "停车场", "食品加工厂", "电子厂房", "医药车间"],
    image: "https://public.readdy.ai/ai/img_res/865f70f25b08a4cec082e49003d0c017.jpg"
  },
  "建筑防水解决方案": {
    description: "我们提供全面的建筑防水解决方案，包括屋面防水、地下室防水、卫生间防水等。采用高品质防水材料和专业施工工艺，确保建筑物防水性能长期可靠。",
    features: ["高弹性", "耐候性强", "施工简便", "使用寿命长", "环保无污染"],
    scenarios: ["屋面防水", "地下室防水", "卫生间防水", "游泳池防水", "桥梁防水", "隧道防水"],
    image: "https://public.readdy.ai/ai/img_res/3bde06f6373ffb6dae597dff678a06e1.jpg"
  },
  "外墙保温解决方案": {
    description: "我们的外墙保温解决方案采用优质保温材料和先进施工工艺，有效提升建筑物的保温隔热性能，降低能耗，提高居住舒适度。",
    features: ["优异保温性能", "防火安全", "抗裂耐久", "施工便捷", "节能环保"],
    scenarios: ["住宅建筑", "商业建筑", "公共建筑", "工业建筑", "学校", "医院"],
    image: "https://public.readdy.ai/ai/img_res/4ac233c00009ba8b9cc57b8405f48acb.jpg"
  },
  "建筑加固解决方案": {
    description: "针对建筑结构加固需求，我们提供专业的加固解决方案，包括碳纤维加固、钢板加固、植筋加固等多种方式，确保建筑结构安全可靠。",
    features: ["加固效果显著", "施工周期短", "不增加结构自重", "不改变建筑外观", "经济实用"],
    scenarios: ["老旧建筑加固", "桥梁加固", "工业厂房加固", "地下结构加固", "抗震加固", "事故损伤修复"],
    image: "https://public.readdy.ai/ai/img_res/879e1962344565ed2ca90ceb42d1a460.jpg"
  }
};

const getSolutionDescription = (solution) => {
  return solutionData[solution]?.description || "";
};

const getSolutionFeatures = (solution) => {
  return solutionData[solution]?.features || [];
};

const getSolutionScenarios = (solution) => {
  return solutionData[solution]?.scenarios || [];
};

const getSolutionImage = (solution) => {
  return solutionData[solution]?.image || "";
};
</script>

<style scoped>
/* 页面特定样式可以在这里添加 */
</style> 