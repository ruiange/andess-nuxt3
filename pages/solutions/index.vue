<template>
  <div class="min-h-[1024px]">
    <!-- 方案分类导航 -->
    <div class="bg-gray-50">
      <div class="max-w-[1440px] mx-auto px-8">
        <div class="py-6">
          <div class="flex items-center gap-2 text-gray-600">
            <a href="/" class="hover:text-blue-600">首页</a>
            <i class="fas fa-chevron-right text-xs"></i>
            <span>解决方案</span>
          </div>
        </div>
        <div class="flex gap-4 border-b">
          <button 
            v-for="solution in solutions" 
            :key="solution" 
            @click="currentSolution = solution" 
            class="!rounded-button px-8 py-4 cursor-pointer whitespace-nowrap"
            :class="currentSolution === solution ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600'"
          >
            {{ solution }}
          </button>
        </div>
      </div>
    </div>

    <!-- 方案概述 -->
    <div class="max-w-[1440px] mx-auto px-8 py-16">
      <div class="flex gap-12">
        <div class="flex-1">
          <h1 class="text-4xl font-bold mb-6">{{ currentSolution }}</h1>
          <p class="text-gray-600 mb-8">{{ getSolutionDescription(currentSolution) }}</p>
          <div class="grid grid-cols-2 gap-6 mb-8">
            <div v-for="(feature, index) in getSolutionFeatures(currentSolution)" :key="index" class="flex items-start gap-4 p-6 bg-gray-50 rounded-lg">
              <i class="fas fa-check-circle text-2xl text-blue-600"></i>
              <div>
                <h3 class="font-bold mb-2">{{ feature }}</h3>
              </div>
            </div>
          </div>
          <div class="flex gap-4">
            <button @click="showConsultModal = true" class="!rounded-button bg-blue-600 text-white px-8 h-12 cursor-pointer whitespace-nowrap">在线咨询</button>
            <button @click="showCustomModal = true" class="!rounded-button border-2 border-blue-600 text-blue-600 px-8 h-12 cursor-pointer whitespace-nowrap">方案定制</button>
          </div>
        </div>
        <div class="w-[500px]">
          <img :src="getSolutionImage(currentSolution)" class="w-full h-[400px] object-cover rounded-lg">
        </div>
      </div>
    </div>

    <!-- 技术参数 -->
    <div class="bg-gray-50 py-16">
      <div class="max-w-[1440px] mx-auto px-8">
        <h2 class="text-3xl font-bold mb-12 text-center">技术参数</h2>
        <div class="bg-white rounded-lg p-8">
          <table class="w-full">
            <tbody>
              <tr v-for="(param, index) in techParams" :key="index" :class="index % 2 === 0 ? 'bg-gray-50' : ''">
                <td class="py-4 px-6 font-bold w-1/4">{{ param.name }}</td>
                <td class="py-4 px-6 text-gray-600">{{ param.value }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <!-- 施工流程 -->
    <div class="max-w-[1440px] mx-auto px-8 py-16">
      <h2 class="text-3xl font-bold mb-12 text-center">施工流程</h2>
      <div class="grid grid-cols-4 gap-8">
        <div v-for="(step, index) in constructionSteps" :key="index" class="text-center">
          <div class="relative mb-6">
            <div class="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center mx-auto">
              <i :class="step.icon" class="text-3xl text-blue-600"></i>
            </div>
            <div v-if="index < constructionSteps.length - 1" class="absolute top-10 left-[60%] w-full h-[2px] bg-blue-200"></div>
          </div>
          <h3 class="font-bold mb-2">{{ step.title }}</h3>
          <p class="text-gray-600 text-sm">{{ step.desc }}</p>
        </div>
      </div>
    </div>

    <!-- 应用案例 -->
    <div class="bg-gray-50 py-16">
      <div class="max-w-[1440px] mx-auto px-8">
        <h2 class="text-3xl font-bold mb-12 text-center">应用案例</h2>
        <div class="grid grid-cols-3 gap-8">
          <ProjectItem
            v-for="(case_, index) in cases"
            :key="index"
            :project="case_"
            :to="`/solutions/${index + 1}`"
          />
        </div>
      </div>
    </div>

    <!-- 咨询弹窗 -->
    <div v-if="showConsultModal" class="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div class="bg-white rounded-lg w-[500px] p-8">
        <div class="flex justify-between items-center mb-6">
          <h3 class="text-xl font-bold">在线咨询</h3>
          <i @click="showConsultModal = false" class="fas fa-times text-gray-400 cursor-pointer"></i>
        </div>
        <div class="space-y-4 mb-6">
          <input v-model="consultForm.name" type="text" placeholder="您的称呼" class="w-full h-12 px-4 rounded-lg bg-gray-100 border-none">
          <input v-model="consultForm.phone" type="text" placeholder="联系电话" class="w-full h-12 px-4 rounded-lg bg-gray-100 border-none">
          <textarea v-model="consultForm.message" placeholder="咨询内容" rows="4" class="w-full p-4 rounded-lg bg-gray-100 border-none"></textarea>
        </div>
        <button @click="submitConsult" class="!rounded-button bg-blue-600 text-white w-full h-12 cursor-pointer whitespace-nowrap">提交咨询</button>
      </div>
    </div>

    <!-- 定制弹窗 -->
    <div v-if="showCustomModal" class="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div class="bg-white rounded-lg w-[500px] p-8">
        <div class="flex justify-between items-center mb-6">
          <h3 class="text-xl font-bold">方案定制</h3>
          <i @click="showCustomModal = false" class="fas fa-times text-gray-400 cursor-pointer"></i>
        </div>
        <div class="space-y-4 mb-6">
          <input v-model="customForm.name" type="text" placeholder="您的称呼" class="w-full h-12 px-4 rounded-lg bg-gray-100 border-none">
          <input v-model="customForm.phone" type="text" placeholder="联系电话" class="w-full h-12 px-4 rounded-lg bg-gray-100 border-none">
          <input v-model="customForm.area" type="text" placeholder="项目面积" class="w-full h-12 px-4 rounded-lg bg-gray-100 border-none">
          <textarea v-model="customForm.requirements" placeholder="具体需求" rows="4" class="w-full p-4 rounded-lg bg-gray-100 border-none"></textarea>
        </div>
        <button @click="submitCustom" class="!rounded-button bg-blue-600 text-white w-full h-12 cursor-pointer whitespace-nowrap">提交需求</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
// 指定使用默认布局
definePageMeta({
  layout: 'default'
});

import {ref} from "vue";

type SolutionType = "工业地坪解决方案" | "建筑防水解决方案" | "外墙保温解决方案" | "建筑加固解决方案";

const solutions: SolutionType[] = [
  "工业地坪解决方案",
  "建筑防水解决方案",
  "外墙保温解决方案",
  "建筑加固解决方案",
];

const currentSolution = ref<SolutionType>("工业地坪解决方案");

interface SolutionData {
  description: string;
  features: string[];
  scenarios: string[];
  image: string;
}

const solutionData: Record<SolutionType, SolutionData> = {
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

const techParams = [
  { name: '抗压强度', value: '≥60MPa' },
  { name: '附着力', value: '≥2.0MPa' },
  { name: '耐磨性', value: '≤0.1g/1000r' },
  { name: '抗冲击', value: '1.5kg.m' },
  { name: '耐化学性', value: '耐酸、耐碱、耐油' },
  { name: '施工厚度', value: '2-5mm' }
];

const constructionSteps = [
  {
    icon: 'fas fa-broom',
    title: '基层处理',
    desc: '打磨、除尘、修补'
  },
  {
    icon: 'fas fa-paint-roller',
    title: '底漆施工',
    desc: '封闭处理、提高附着力'
  },
  {
    icon: 'fas fa-layer-group',
    title: '中涂施工',
    desc: '找平、提供强度'
  },
  {
    icon: 'fas fa-check-circle',
    title: '面漆施工',
    desc: '美观、耐磨、防护'
  }
];

const cases = [
  {
    title: '某汽车制造厂',
    desc: '总面积 15000 平方米，采用环氧自流平地坪，满足重载、防滑要求',
    area: '15000㎡',
    image: 'https://public.readdy.ai/ai/img_res/123456789abcdef0123456789abcdef0.jpg'
  },
  {
    title: '某物流仓储中心',
    desc: '总面积 20000 平方米，采用环氧砂浆地坪，满足防滑、耐磨要求',
    area: '20000㎡',
    image: 'https://public.readdy.ai/ai/img_res/234567890abcdef1234567890abcdef1.jpg'
  },
  {
    title: '某电子厂净化车间',
    desc: '总面积 8000 平方米，采用环氧防静电地坪，满足防静电要求',
    area: '8000㎡',
    image: 'https://public.readdy.ai/ai/img_res/345678901bcdef2345678901bcdef23.jpg'
  }
];

const showConsultModal = ref(false);
const showCustomModal = ref(false);

const consultForm = ref({
  name: '',
  phone: '',
  message: ''
});

const customForm = ref({
  name: '',
  phone: '',
  area: '',
  requirements: ''
});

const getSolutionDescription = (solution: SolutionType): string => {
  return solutionData[solution].description;
};

const getSolutionFeatures = (solution: SolutionType): string[] => {
  return solutionData[solution].features;
};

const getSolutionImage = (solution: SolutionType): string => {
  return solutionData[solution].image;
};

const submitConsult = () => {
  // TODO: Implement form submission
  showConsultModal.value = false;
  consultForm.value = {
    name: '',
    phone: '',
    message: ''
  };
};

const submitCustom = () => {
  // TODO: Implement form submission
  showCustomModal.value = false;
  customForm.value = {
    name: '',
    phone: '',
    area: '',
    requirements: ''
  };
};
</script>

<style scoped>
/* 页面特定样式可以在这里添加 */
</style> 