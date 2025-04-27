<template>
  <div class="min-h-[1024px]">
    <!-- 页面标题和基本信息 -->
    <div class="bg-gray-50 py-16">
      <div class="max-w-[1440px] mx-auto px-8">
        <div class="flex gap-12">
          <div class="flex-1">
            <h1 class="text-4xl font-bold mb-6">{{ project.name }}</h1>
            <div class="flex gap-4 mb-6">
              <span class="px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm">{{ project.type }}</span>
              <span class="px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm">{{ project.location }}</span>
            </div>
            <p class="text-gray-600 leading-relaxed mb-8">{{ project.desc }}</p>
            <div class="grid grid-cols-2 gap-6">
              <div v-for="(data, index) in projectData" :key="index" class="bg-white p-6 rounded-lg shadow-sm">
                <div class="text-3xl font-bold text-blue-600 mb-2">{{ data.value }}</div>
                <div class="text-gray-600">{{ data.label }}</div>
              </div>
            </div>
          </div>
          <div class="w-[600px]">
            <div class="rounded-lg overflow-hidden h-[400px]">
              <img :src="projectImages[0]" class="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 项目详情 -->
    <div class="max-w-[1440px] mx-auto px-8 py-16">
      <div class="mb-16">
        <h2 class="text-2xl font-bold mb-8">项目概况</h2>
        <div class="bg-white p-8 rounded-lg shadow-sm">
          <div class="prose max-w-none">
            <p v-for="(paragraph, index) in project.overview" :key="index" class="mb-4 text-gray-600 leading-relaxed">
              {{ paragraph }}
            </p>
          </div>
        </div>
      </div>

      <!-- 施工过程 -->
      <div class="mb-16">
        <h2 class="text-2xl font-bold mb-8">施工过程</h2>
        <div class="space-y-8">
          <div v-for="(step, index) in constructionSteps" :key="index" class="flex gap-8 items-center bg-white p-8 rounded-lg shadow-sm">
            <div class="flex-shrink-0">
              <div class="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-xl">
                {{ index + 1 }}
              </div>
            </div>
            <div>
              <h3 class="text-xl font-bold mb-2">{{ step.title }}</h3>
              <p class="text-gray-600">{{ step.content }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- 项目成果 -->
      <div class="mb-16">
        <h2 class="text-2xl font-bold mb-8">项目成果</h2>
        <div class="grid grid-cols-3 gap-8">
          <div v-for="(result, index) in projectResults" :key="index" class="bg-white p-6 rounded-lg shadow-sm">
            <i :class="result.icon" class="text-3xl text-blue-600 mb-4"></i>
            <h3 class="font-bold text-lg mb-2">{{ result.title }}</h3>
            <p class="text-gray-600 text-sm">{{ result.content }}</p>
          </div>
        </div>
      </div>

      <!-- 相似案例 -->
      <div>
        <h2 class="text-2xl font-bold mb-8">相似案例</h2>
        <div class="grid grid-cols-3 gap-8">
          <ProjectItem
            v-for="project in similarProjects"
            :key="project.id"
            :project="project"
          />
        </div>
      </div>
    </div>

    <!-- 咨询按钮 -->
    <div class="fixed bottom-8 right-8">
      <button
        @click="showConsultModal = true"
        class="!rounded-button bg-blue-600 text-white px-6 h-12 shadow-lg hover:bg-blue-700 transition-colors"
      >
        在线咨询
      </button>
    </div>

    <!-- 咨询弹窗 -->
    <div v-if="showConsultModal" class="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div class="bg-white rounded-lg w-[500px] p-8">
        <div class="flex justify-between items-center mb-6">
          <h3 class="text-xl font-bold">在线咨询</h3>
          <i @click="showConsultModal = false" class="fas fa-times text-gray-400 cursor-pointer"></i>
        </div>
        <div class="space-y-4 mb-6">
          <input
            v-model="consultForm.name"
            type="text"
            placeholder="您的称呼"
            class="w-full h-12 px-4 rounded-lg bg-gray-100 border-none"
          >
          <input
            v-model="consultForm.phone"
            type="text"
            placeholder="联系电话"
            class="w-full h-12 px-4 rounded-lg bg-gray-100 border-none"
          >
          <textarea
            v-model="consultForm.message"
            placeholder="咨询内容"
            rows="4"
            class="w-full p-4 rounded-lg bg-gray-100 border-none"
          ></textarea>
        </div>
        <button
          @click="submitConsult"
          class="!rounded-button bg-blue-600 text-white w-full h-12"
        >
          提交咨询
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {ref} from 'vue';
import {useRoute} from 'nuxt/app';
import ProjectItem from '~/components/ProjectItem.vue';

// 指定使用默认布局
definePageMeta({
  layout: 'default'
});

const route = useRoute();
const projectId = route.params.id;

const showConsultModal = ref(false);

const consultForm = ref({
  name: '',
  phone: '',
  message: ''
});

// 项目列表数据
const projectsList = [
  {
    id: "1",
    name: "上海国际金融中心地下停车场",
    type: "工业地坪",
    desc: "为该项目地下停车场提供 15000 平方米环氧地坪解决方案，满足重载、防滑、美观等多重需求",
    location: "上海市浦东新区",
    image: "https://public.readdy.ai/ai/img_res/01a06382cac35ae672475407850a663f.jpg",
    overview: [
      "本项目是上海国际金融中心的配套工程之一，地下停车场总面积达15000平方米。项目要求地坪具有优异的承重性能、防滑性能和美观性，同时需要考虑后期维护的便利性。",
      "我们采用环氧自流平地坪系统，该系统具有优异的机械性能和耐久性，可以满足停车场高频次车辆进出的使用需求。同时，我们在地坪表面采用特殊的防滑处理工艺，确保在潮湿条件下仍具有良好的防滑性能。",
      "项目施工过程中，我们严格按照施工规范和质量标准进行操作，采用先进的施工设备和工艺，确保地坪的平整度和观感质量。通过科学的项目管理和质量控制，项目如期完工并通过验收。"
    ]
  },
  {
    id: "2",
    name: "北京科技园区",
    type: "工业地坪",
    desc: "为科技园区提供 20000 平方米金刚砂耐磨地坪，满足高强度使用需求",
    location: "北京市海淀区",
    image: "https://public.readdy.ai/ai/img_res/bb5b08fa68ff7e3fb062186b560e0b0c.jpg",
    overview: [
      "本项目位于北京市海淀区科技园区，总施工面积达20000平方米。项目要求地坪具有超强耐磨性能，以满足园区内重型设备和频繁人流的使用需求。",
      "我们选用金刚砂耐磨地坪系统，该系统具有优异的耐磨性能和使用寿命，是工业地坪中的高端选择。施工采用机械撒布工艺，确保金刚砂均匀分布，打造出坚固耐用的地坪表面。",
      "项目实施过程中，我们采用分区施工策略，确保园区正常运营不受影响。通过严格的质量控制和专业的施工团队，项目顺利完工并获得客户好评。"
    ]
  }
];

// 根据ID获取项目数据
const currentProject = projectsList.find(p => p.id === projectId);
const project = ref(currentProject || projectsList[0]);

const projectData = [
  { value: '15,000㎡', label: '项目面积' },
  { value: '45天', label: '施工工期' },
  { value: '60MPa', label: '抗压强度' },
  { value: '10年', label: '质保期限' }
];

const projectImages = [
  'https://public.readdy.ai/ai/img_res/01a06382cac35ae672475407850a663f.jpg',
  'https://public.readdy.ai/ai/img_res/c34ff5b2824ad0d2082269d2aef680c5.jpg',
  'https://public.readdy.ai/ai/img_res/73af2bffcced718c8dc11df5809a4f01.jpg'
];

const constructionSteps = [
  {
    title: "基层处理",
    content: "对混凝土基层进行打磨、除尘、修补，确保表面平整、干净、干燥。"
  },
  {
    title: "底涂施工",
    content: "使用环氧底漆进行封闭处理，提高面涂层的附着力。"
  },
  {
    title: "中涂施工",
    content: "采用环氧中涂料找平，修复表面缺陷。"
  },
  {
    title: "面涂施工",
    content: "使用自流平环氧树脂进行面层施工，确保涂层均匀。"
  }
];

const projectResults = [
  {
    icon: "fas fa-award",
    title: "优异性能",
    content: "地坪具有优异的承重性能和防滑性能，满足停车场使用需求"
  },
  {
    icon: "fas fa-clock",
    title: "工期保障",
    content: "项目按期完工，并通过业主方验收"
  },
  {
    icon: "fas fa-star",
    title: "客户满意",
    content: "获得业主方高度评价，树立了良好的品牌形象"
  }
];

const similarProjects = [
  {
    id: "2",
    name: "北京科技园区",
    type: "工业地坪",
    desc: "为科技园区提供 20000 平方米金刚砂耐磨地坪，满足高强度使用需求",
    location: "北京市海淀区",
    image: "https://public.readdy.ai/ai/img_res/bb5b08fa68ff7e3fb062186b560e0b0c.jpg"
  },
  {
    id: "3",
    name: "南京奥体中心",
    type: "防水工程",
    desc: "完成体育场馆屋面 8000 平方米 SBS 防水卷材施工，确保场馆防水性能达到国际标准",
    location: "江苏省南京市",
    image: "https://public.readdy.ai/ai/img_res/e53aee0721850f371511bc3d3161a254.jpg"
  },
  {
    id: "4",
    name: "杭州湾数据中心",
    type: "保温工程",
    desc: "采用新型岩棉保温板系统，完成 12000 平方米外墙保温施工，有效提升建筑节能效果",
    location: "浙江省宁波市",
    image: "https://public.readdy.ai/ai/img_res/ad6acb0748ae2c3772855d5d2ed176d6.jpg"
  }
];

// 提交咨询
const submitConsult = () => {
  // 这里可以添加表单验证逻辑
  alert('感谢您的咨询，我们会尽快联系您！');
  showConsultModal.value = false;
  consultForm.value = {
    name: '',
    phone: '',
    message: ''
  };
};
</script>

<style scoped>
/* 轮播图样式 */
.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  width: 100%;
  height: 100%;
}

/* 按钮悬停效果 */
button {
  transition: all 0.3s ease;
}

/* 输入框样式 */
input, textarea {
  transition: all 0.3s ease;
}

input:focus, textarea:focus {
  outline: none;
  box-shadow: 0 0 0 2px rgba(37, 99, 235, 0.2);
}
</style>
