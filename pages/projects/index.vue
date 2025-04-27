<template>
  <div class="min-h-[1024px]">
    <!-- 页面标题 -->
    <div class="bg-gray-50 pt-32 pb-16">
      <div class="max-w-[1440px] mx-auto px-8">
        <h1 class="text-4xl font-bold mb-4 text-center">工程案例</h1>
        <p class="text-gray-600 text-center max-w-3xl mx-auto">
          我们为各行业客户提供专业的地坪解决方案，以下是我们近期完成的部分工程案例
        </p>
      </div>
    </div>

    <!-- 筛选器 -->
    <div class="max-w-[1440px] mx-auto px-8 py-8">
      <div class="flex justify-between items-center mb-8">
        <div class="flex gap-4">
          <button
            v-for="category in categories"
            :key="category"
            @click="activeCategory = category"
            class="px-4 py-2 rounded-full text-sm transition-colors"
            :class="
              activeCategory === category
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            "
          >
            {{ category }}
          </button>
        </div>
        <div class="relative">
          <input
            v-model="searchQuery"
            type="text"
            placeholder="搜索案例"
            class="w-64 h-10 pl-10 pr-4 rounded-lg bg-gray-100 border-none text-sm"
          />
          <i
            class="fas fa-search absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          ></i>
        </div>
      </div>

      <!-- 案例列表 -->
      <div class="grid grid-cols-3 gap-8">
        <ProjectItem
          v-for="project in filteredProjects"
          :key="project.id"
          :project="project"
          :to="`/projects/${project.id}`"
        />
      </div>

      <!-- 分页 -->
      <div class="flex justify-center mt-12">
        <div class="flex gap-2">
          <button
            v-for="page in totalPages"
            :key="page"
            @click="currentPage = page"
            class="w-10 h-10 rounded-full flex items-center justify-center text-sm transition-colors"
            :class="
              currentPage === page
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            "
          >
            {{ page }}
          </button>
        </div>
      </div>
    </div>

    <!-- 咨询按钮 -->
    <div class="fixed right-8 bottom-8 flex flex-col gap-4">
      <button
        @click="showConsultModal = true"
        class="!rounded-button bg-blue-600 text-white w-12 h-12 flex items-center justify-center shadow-lg hover:bg-blue-700 transition-colors"
      >
        <i class="fas fa-comments text-xl"></i>
      </button>
    </div>

    <!-- 咨询弹窗 -->
    <div
      v-if="showConsultModal"
      class="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
      @click="showConsultModal = false"
    >
      <div class="bg-white rounded-lg w-[500px] p-8" @click.stop>
        <div class="flex justify-between items-center mb-6">
          <h3 class="text-xl font-bold">在线咨询</h3>
          <i
            @click="showConsultModal = false"
            class="fas fa-times text-gray-400 cursor-pointer hover:text-gray-600"
          ></i>
        </div>
        <div class="space-y-4 mb-6">
          <input
            v-model="consultForm.name"
            type="text"
            placeholder="您的称呼"
            class="w-full h-12 px-4 rounded-lg bg-gray-100 border-none focus:ring-2 focus:ring-blue-500 outline-none"
          />
          <input
            v-model="consultForm.phone"
            type="text"
            placeholder="联系电话"
            class="w-full h-12 px-4 rounded-lg bg-gray-100 border-none focus:ring-2 focus:ring-blue-500 outline-none"
          />
          <textarea
            v-model="consultForm.message"
            placeholder="咨询内容"
            rows="4"
            class="w-full p-4 rounded-lg bg-gray-100 border-none focus:ring-2 focus:ring-blue-500 outline-none resize-none"
          ></textarea>
        </div>
        <button
          @click="submitConsult"
          class="!rounded-button bg-blue-600 text-white w-full h-12 hover:bg-blue-700 transition-colors"
        >
          提交咨询
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {computed, ref} from 'vue';
import ProjectItem from '~/components/ProjectItem.vue';

// 指定使用默认布局
definePageMeta({
  layout: 'default'
});

// 筛选状态
const activeCategory = ref('全部');
const searchQuery = ref('');
const currentPage = ref(1);
const pageSize = 9;

// 咨询表单
const showConsultModal = ref(false);
const consultForm = ref({
  name: "",
  phone: "",
  message: "",
});

// 分类列表
const categories = ['全部', '工业地坪', '商业地坪', '防水工程', '保温工程'];

// 项目数据
const projects = [
  {
    id: "1",
    title: "上海国际金融中心",
    type: "工业地坪",
    desc: "为该项目地下停车场提供 15000 平方米环氧地坪解决方案，满足重载、防滑、美观等多重需求",
    location: "上海市浦东新区",
    image: "https://public.readdy.ai/ai/img_res/01a06382cac35ae672475407850a663f.jpg",
  },
  {
    id: "2",
    title: "北京科技园区",
    type: "工业地坪",
    desc: "为科技园区提供 20000 平方米金刚砂耐磨地坪，满足高强度使用需求",
    location: "北京市海淀区",
    image: "https://public.readdy.ai/ai/img_res/bb5b08fa68ff7e3fb062186b560e0b0c.jpg",
  },
  {
    id: "3",
    title: "南京奥体中心",
    type: "防水工程",
    desc: "完成体育场馆屋面 8000 平方米 SBS 防水卷材施工，确保场馆防水性能达到国际标准",
    location: "江苏省南京市",
    image: "https://public.readdy.ai/ai/img_res/e53aee0721850f371511bc3d3161a254.jpg",
  },
  {
    id: "4",
    title: "杭州湾数据中心",
    type: "保温工程",
    desc: "采用新型岩棉保温板系统，完成 12000 平方米外墙保温施工，有效提升建筑节能效果",
    location: "浙江省宁波市",
    image: "https://public.readdy.ai/ai/img_res/ad6acb0748ae2c3772855d5d2ed176d6.jpg",
  }
];

// 筛选项目
const filteredProjects = computed(() => {
  let result = projects;
  
  // 按分类筛选
  if (activeCategory.value !== '全部') {
    result = result.filter(project => project.type === activeCategory.value);
  }
  
  // 按搜索关键词筛选
  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase();
    result = result.filter(project => 
      project.title.toLowerCase().includes(query) || 
      project.desc.toLowerCase().includes(query) ||
      project.location.toLowerCase().includes(query)
    );
  }
  
  return result;
});

// 计算总页数
const totalPages = computed(() => {
  return Math.ceil(filteredProjects.value.length / pageSize);
});

// 提交咨询
const submitConsult = () => {
  // TODO: 实现表单提交逻辑
  showConsultModal.value = false;
  consultForm.value = {
    name: "",
    phone: "",
    message: "",
  };
};
</script>

<style scoped>
/* 图片悬停效果 */
.group:hover img {
  transform: scale(1.05);
}

/* 输入框样式 */
input, textarea {
  transition: all 0.3s ease;
}

/* 按钮悬停效果 */
button, a {
  transition: all 0.3s ease;
}
</style> 