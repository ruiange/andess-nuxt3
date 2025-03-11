<template>
  <div class="min-h-[1024px]">
    <!-- 导航栏 -->
    <nav class="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
      <div
        class="max-w-[1440px] mx-auto px-8 h-20 flex items-center justify-between"
      >
        <div class="flex items-center gap-16">
          <NuxtLink to="/" class="text-2xl font-bold">建材之家</NuxtLink>
          <div class="flex gap-8">
            <NuxtLink 
              v-for="item in navItems" 
              :key="item.name" 
              :to="item.path" 
              class="text-gray-600 hover:text-blue-600 cursor-pointer"
              active-class="text-blue-600 font-medium"
            >
              {{ item.name }}
            </NuxtLink>
          </div>
        </div>
        <div class="flex items-center gap-4">
          <div class="relative">
            <input
              type="text"
              placeholder="搜索产品或解决方案"
              class="w-64 h-10 pl-10 pr-4 rounded-lg bg-gray-100 border-none text-sm"
            />
            <i
              class="fas fa-search absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            ></i>
          </div>
          <NuxtLink to="/contact" class="!rounded-button bg-blue-600 text-white px-6 h-10 cursor-pointer whitespace-nowrap flex items-center justify-center">联系我们</NuxtLink>
        </div>
      </div>
    </nav>

    <!-- 面包屑导航 -->
    <div class="pt-20 bg-gray-50">
      <div class="max-w-[1440px] mx-auto px-8 py-6">
        <div class="flex items-center gap-2 text-gray-600">
          <NuxtLink to="/" class="hover:text-blue-600">首页</NuxtLink>
          <i class="fas fa-chevron-right text-xs"></i>
          <NuxtLink to="/projects" class="hover:text-blue-600">工程案例</NuxtLink>
          <i class="fas fa-chevron-right text-xs"></i>
          <span>{{ project.title }}</span>
        </div>
      </div>
    </div>

    <!-- 项目概述 -->
    <div class="max-w-[1440px] mx-auto px-8 py-12">
      <div class="flex gap-12">
        <div class="flex-1">
          <h1 class="text-4xl font-bold mb-6">{{ project.title }}</h1>
          <div class="flex gap-4 mb-6">
            <span
              v-for="(tag, index) in project.tags"
              :key="index"
              class="px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm"
            >{{ tag }}</span>
          </div>
          <p class="text-gray-600 leading-relaxed mb-8">
            {{ project.description }}
          </p>
          <div class="grid grid-cols-2 gap-6">
            <div
              v-for="(data, index) in project.data"
              :key="index"
              class="bg-gray-50 p-6 rounded-lg"
            >
              <div class="text-3xl font-bold text-blue-600 mb-2">
                {{ data.value }}
              </div>
              <div class="text-gray-600">{{ data.label }}</div>
            </div>
          </div>
        </div>
        <div class="w-[600px]">
          <div class="rounded-lg overflow-hidden h-[400px] relative">
            <img 
              v-for="(image, index) in project.images" 
              :key="index"
              :src="image" 
              class="w-full h-full object-cover absolute inset-0 transition-opacity duration-500"
              :class="{ 'opacity-0': currentImageIndex !== index, 'opacity-100': currentImageIndex === index }"
            />
            <!-- 导航按钮 -->
            <div class="absolute inset-x-0 bottom-4 flex justify-center gap-2">
              <button 
                v-for="(_, index) in project.images" 
                :key="index"
                @click="currentImageIndex = index"
                class="w-3 h-3 rounded-full bg-white/50 transition-all"
                :class="{ 'w-6 bg-white': currentImageIndex === index }"
              ></button>
            </div>
            <!-- 左右箭头 -->
            <button 
              @click="prevImage" 
              class="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/30 text-white flex items-center justify-center hover:bg-black/50"
            >
              <i class="fas fa-chevron-left"></i>
            </button>
            <button 
              @click="nextImage" 
              class="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/30 text-white flex items-center justify-center hover:bg-black/50"
            >
              <i class="fas fa-chevron-right"></i>
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- 技术方案 -->
    <div class="bg-gray-50 py-16">
      <div class="max-w-[1440px] mx-auto px-8">
        <h2 class="text-3xl font-bold mb-12 text-center">技术方案</h2>
        <div class="grid grid-cols-3 gap-8">
          <div
            v-for="(solution, index) in project.technicalSolutions"
            :key="index"
            class="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow"
          >
            <i :class="solution.icon" class="text-3xl text-blue-600 mb-4"></i>
            <h3 class="text-xl font-bold mb-4">{{ solution.title }}</h3>
            <p class="text-gray-600 text-sm leading-relaxed">
              {{ solution.desc }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- 施工过程 -->
    <div class="max-w-[1440px] mx-auto px-8 py-16">
      <h2 class="text-3xl font-bold mb-12 text-center">施工过程</h2>
      <div class="space-y-16">
        <div
          v-for="(process, index) in project.constructionProcess"
          :key="index"
          class="flex gap-8 items-center"
          :class="{ 'flex-row-reverse': index % 2 !== 0 }"
        >
          <div class="w-[400px] h-[300px] rounded-lg overflow-hidden shadow-md">
            <img :src="process.image" class="w-full h-full object-cover" />
          </div>
          <div class="flex-1">
            <div class="flex items-center gap-4 mb-4">
              <div
                class="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold"
              >
                {{ index + 1 }}
              </div>
              <h3 class="text-xl font-bold">{{ process.title }}</h3>
            </div>
            <p class="text-gray-600 leading-relaxed mb-4">{{ process.desc }}</p>
            <ul class="space-y-2">
              <li
                v-for="(point, pIndex) in process.points"
                :key="pIndex"
                class="flex items-start gap-2"
              >
                <i class="fas fa-check-circle text-blue-600 mt-1"></i>
                <span class="text-gray-600">{{ point }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!-- 相似案例 -->
    <div class="bg-gray-50 py-16">
      <div class="max-w-[1440px] mx-auto px-8">
        <h2 class="text-3xl font-bold mb-12 text-center">相似案例</h2>
        <div class="grid grid-cols-3 gap-8">
          <div
            v-for="(case_, index) in similarCases"
            :key="index"
            class="bg-white rounded-lg overflow-hidden group cursor-pointer shadow-sm hover:shadow-md transition-shadow"
          >
            <div class="h-[240px] overflow-hidden">
              <img
                :src="case_.image"
                class="w-full h-full object-cover transition duration-300 group-hover:scale-110"
              />
            </div>
            <div class="p-6">
              <h3 class="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors">{{ case_.title }}</h3>
              <p class="text-gray-600 text-sm mb-4">{{ case_.desc }}</p>
              <div class="flex justify-between items-center">
                <span class="text-sm text-gray-500">{{ case_.area }}</span>
                <NuxtLink 
                  :to="`/projects/${case_.id}`" 
                  class="!rounded-button bg-gray-100 text-gray-600 px-4 py-2 text-sm group-hover:bg-blue-600 group-hover:text-white transition-colors"
                >
                  查看详情
                </NuxtLink>
              </div>
            </div>
          </div>
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

<script setup>
import { ref, onMounted, watch } from 'vue';
import { useRoute } from 'nuxt/app';

// 指定使用默认布局
definePageMeta({
  layout: 'default'
});

// 获取路由参数
const route = useRoute();
const projectId = route.params.id;

// 导航菜单
const navItems = [
  { name: '首页', path: '/' },
  { name: '产品中心', path: '/products' },
  { name: '解决方案', path: '/solutions' },
  { name: '工程案例', path: '/projects' },
  { name: '新闻中心', path: '/news' },
  { name: '关于我们', path: '/about' }
];

// 咨询表单
const showConsultModal = ref(false);
const consultForm = ref({
  name: "",
  phone: "",
  message: "",
});

// 图片轮播
const currentImageIndex = ref(0);
const autoplayInterval = ref(null);

const nextImage = () => {
  if (project.images && project.images.length > 0) {
    currentImageIndex.value = (currentImageIndex.value + 1) % project.images.length;
  }
};

const prevImage = () => {
  if (project.images && project.images.length > 0) {
    currentImageIndex.value = (currentImageIndex.value - 1 + project.images.length) % project.images.length;
  }
};

// 启动自动轮播
const startAutoplay = () => {
  stopAutoplay();
  autoplayInterval.value = setInterval(() => {
    nextImage();
  }, 5000);
};

// 停止自动轮播
const stopAutoplay = () => {
  if (autoplayInterval.value) {
    clearInterval(autoplayInterval.value);
    autoplayInterval.value = null;
  }
};

// 提交咨询
const submitConsult = () => {
  // 这里可以添加表单验证逻辑
  alert(`感谢您的咨询，我们会尽快联系您！`);
  showConsultModal.value = false;
  consultForm.value = {
    name: "",
    phone: "",
    message: "",
  };
};

// 项目数据
const projectsData = {
  "1": {
    id: "1",
    title: "某汽车制造厂工业地坪项目",
    tags: ["面积：15,000 ㎡", "工期：45 天", "2024 年完工"],
    description: "本项目位于江苏省苏州市工业园区，是一家大型汽车制造企业的核心生产车间。针对客户对地坪高承重、防滑、耐磨等严格要求，我们采用环氧自流平工艺，打造出符合现代化工业生产需求的高品质地坪系统。",
    data: [
      { value: "15,000㎡", label: "项目面积" },
      { value: "45天", label: "施工工期" },
      { value: "60MPa", label: "抗压强度" },
      { value: "10年", label: "质保期限" },
    ],
    images: [
      "https://public.readdy.ai/ai/img_res/01a06382cac35ae672475407850a663f.jpg",
      "https://public.readdy.ai/ai/img_res/c34ff5b2824ad0d2082269d2aef680c5.jpg",
      "https://public.readdy.ai/ai/img_res/73af2bffcced718c8dc11df5809a4f01.jpg",
    ],
    technicalSolutions: [
      {
        icon: "fas fa-layer-group",
        title: "多层复合结构",
        desc: "采用环氧树脂底漆、中涂、面漆三层结构，确保地坪具有优异的机械性能和耐久性。",
      },
      {
        icon: "fas fa-shield-alt",
        title: "高强度配方",
        desc: "特殊改性环氧树脂配方，抗压强度≥60MPa，满足重载车间使用要求。",
      },
      {
        icon: "fas fa-tint",
        title: "防滑处理",
        desc: "表面采用特殊防滑处理工艺，确保湿滑条件下的安全性。",
      },
    ],
    constructionProcess: [
      {
        title: "基层处理",
        desc: "采用进口打磨设备对混凝土基层进行全面处理，确保基层平整度和粘结强度。",
        points: ["表面打磨除尘", "裂缝修补加固", "基层强度检测"],
        image: "https://public.readdy.ai/ai/img_res/a214e270fdc14c487147e5eb326bdeaa.jpg",
      },
      {
        title: "底漆施工",
        desc: "使用高渗透性环氧底漆，确保与基层牢固结合。",
        points: ["底漆均匀涂布", "封闭基层孔隙", "提高附着力"],
        image: "https://public.readdy.ai/ai/img_res/7dbaa8f027788fe5859a790b9c8efb53.jpg",
      },
      {
        title: "面层施工",
        desc: "采用自流平工艺施工面层，确保表面平整光滑。",
        points: ["自流平找平", "气泡处理", "固化养护"],
        image: "https://public.readdy.ai/ai/img_res/c24bb852d99ad3fc1432b1d599f14043.jpg",
      },
    ],
  },
  "2": {
    id: "2",
    title: "某物流仓储中心地坪项目",
    tags: ["面积：20,000 ㎡", "工期：60 天", "2023 年完工"],
    description: "本项目位于浙江省杭州市，是一家大型电商企业的核心仓储中心。针对高频次叉车运行、重型货架等使用场景，我们采用环氧砂浆地坪系统，提供了优异的耐磨性和抗冲击性能。",
    data: [
      { value: "20,000㎡", label: "项目面积" },
      { value: "60天", label: "施工工期" },
      { value: "80MPa", label: "抗压强度" },
      { value: "12年", label: "质保期限" },
    ],
    images: [
      "https://public.readdy.ai/ai/img_res/f7bdd8c07adfa4acae381b38badfff46.jpg",
      "https://public.readdy.ai/ai/img_res/c34ff5b2824ad0d2082269d2aef680c5.jpg",
      "https://public.readdy.ai/ai/img_res/73af2bffcced718c8dc11df5809a4f01.jpg",
    ],
    technicalSolutions: [
      {
        icon: "fas fa-truck",
        title: "重载设计",
        desc: "专为叉车频繁作业设计，承重能力强，抗冲击性好。",
      },
      {
        icon: "fas fa-tools",
        title: "耐磨配方",
        desc: "添加特殊耐磨骨料，提高表面耐磨性能，延长使用寿命。",
      },
      {
        icon: "fas fa-ruler",
        title: "平整度控制",
        desc: "严格控制地面平整度，满足自动化物流设备运行要求。",
      },
    ],
    constructionProcess: [
      {
        title: "基层处理",
        desc: "采用进口打磨设备对混凝土基层进行全面处理，确保基层平整度和粘结强度。",
        points: ["表面打磨除尘", "裂缝修补加固", "基层强度检测"],
        image: "https://public.readdy.ai/ai/img_res/a214e270fdc14c487147e5eb326bdeaa.jpg",
      },
      {
        title: "底漆施工",
        desc: "使用高渗透性环氧底漆，确保与基层牢固结合。",
        points: ["底漆均匀涂布", "封闭基层孔隙", "提高附着力"],
        image: "https://public.readdy.ai/ai/img_res/7dbaa8f027788fe5859a790b9c8efb53.jpg",
      },
      {
        title: "砂浆层施工",
        desc: "采用环氧砂浆工艺，提供优异的耐磨性和抗冲击性能。",
        points: ["砂浆均匀涂布", "压实处理", "固化养护"],
        image: "https://public.readdy.ai/ai/img_res/c24bb852d99ad3fc1432b1d599f14043.jpg",
      },
    ],
  },
  "3": {
    id: "3",
    title: "某食品加工车间地坪项目",
    tags: ["面积：12,000 ㎡", "工期：40 天", "2023 年完工"],
    description: "本项目位于山东省青岛市，是一家知名食品企业的生产车间。针对食品行业对卫生、防腐蚀的严格要求，我们采用食品级环氧地坪系统，确保地面符合食品安全生产标准。",
    data: [
      { value: "12,000㎡", label: "项目面积" },
      { value: "40天", label: "施工工期" },
      { value: "50MPa", label: "抗压强度" },
      { value: "8年", label: "质保期限" },
    ],
    images: [
      "https://public.readdy.ai/ai/img_res/79b2493085f78796a7727d0db5f2cecd.jpg",
      "https://public.readdy.ai/ai/img_res/c34ff5b2824ad0d2082269d2aef680c5.jpg",
      "https://public.readdy.ai/ai/img_res/73af2bffcced718c8dc11df5809a4f01.jpg",
    ],
    technicalSolutions: [
      {
        icon: "fas fa-utensils",
        title: "食品级材料",
        desc: "采用符合FDA标准的食品级环氧材料，确保食品安全。",
      },
      {
        icon: "fas fa-bacteria",
        title: "抗菌处理",
        desc: "表面添加特殊抗菌剂，有效抑制细菌滋生。",
      },
      {
        icon: "fas fa-tint-slash",
        title: "防水设计",
        desc: "特殊防水设计，便于清洗消毒，保持车间卫生。",
      },
    ],
    constructionProcess: [
      {
        title: "基层处理",
        desc: "采用进口打磨设备对混凝土基层进行全面处理，确保基层平整度和粘结强度。",
        points: ["表面打磨除尘", "裂缝修补加固", "基层强度检测"],
        image: "https://public.readdy.ai/ai/img_res/a214e270fdc14c487147e5eb326bdeaa.jpg",
      },
      {
        title: "底漆施工",
        desc: "使用高渗透性环氧底漆，确保与基层牢固结合。",
        points: ["底漆均匀涂布", "封闭基层孔隙", "提高附着力"],
        image: "https://public.readdy.ai/ai/img_res/7dbaa8f027788fe5859a790b9c8efb53.jpg",
      },
      {
        title: "面层施工",
        desc: "采用食品级环氧自流平工艺，确保表面平整光滑，易于清洁。",
        points: ["自流平找平", "气泡处理", "固化养护"],
        image: "https://public.readdy.ai/ai/img_res/c24bb852d99ad3fc1432b1d599f14043.jpg",
      },
    ],
  }
};

// 获取当前项目数据
const project = projectsData[projectId] || projectsData["1"];

// 相似案例（排除当前项目）
const similarCases = [
  {
    id: "1",
    title: "某汽车制造厂工业地坪项目",
    desc: "采用环氧自流平地坪，满足汽车制造业高标准要求",
    area: "15,000㎡",
    image: "https://public.readdy.ai/ai/img_res/01a06382cac35ae672475407850a663f.jpg",
  },
  {
    id: "2",
    title: "某物流仓储中心",
    desc: "采用环氧砂浆地坪，满足重载叉车频繁作业需求",
    area: "20,000㎡",
    image: "https://public.readdy.ai/ai/img_res/f7bdd8c07adfa4acae381b38badfff46.jpg",
  },
  {
    id: "3",
    title: "某食品加工车间",
    desc: "采用食品级环氧地坪，满足卫生防腐要求",
    area: "12,000㎡",
    image: "https://public.readdy.ai/ai/img_res/79b2493085f78796a7727d0db5f2cecd.jpg",
  },
].filter(item => item.id !== projectId);

// 生命周期钩子
onMounted(() => {
  startAutoplay();
});

// 监听路由变化，更新数据
watch(() => route.params.id, (newId) => {
  if (newId && projectsData[newId]) {
    currentImageIndex.value = 0;
    startAutoplay();
  }
});

// 组件销毁时清除定时器
onUnmounted(() => {
  stopAutoplay();
});
</script>

<style scoped>
/* 图片轮播过渡效果 */
img {
  transition: opacity 0.5s ease-in-out;
}

/* 输入框样式 */
input, textarea {
  transition: all 0.3s ease;
}

/* 按钮悬停效果 */
button, a {
  transition: all 0.3s ease;
}

/* 卡片悬停效果 */
.group {
  transition: all 0.3s ease;
}
</style> 