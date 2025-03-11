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
        <div
          v-for="project in filteredProjects"
          :key="project.id"
          class="bg-white rounded-lg overflow-hidden group cursor-pointer shadow-sm hover:shadow-md transition-shadow"
        >
          <div class="h-[240px] overflow-hidden">
            <NuxtLink :to="`/projects/${project.id}`">
              <img
                :src="project.image"
                class="w-full h-full object-cover transition duration-300 group-hover:scale-110"
              />
            </NuxtLink>
          </div>
          <div class="p-6">
            <div class="flex justify-between items-center mb-3">
              <h3 class="font-bold text-lg group-hover:text-blue-600 transition-colors">{{ project.title }}</h3>
              <span class="text-blue-600 text-sm">{{ project.category }}</span>
            </div>
            <p class="text-gray-600 text-sm mb-4 line-clamp-2">
              {{ project.description }}
            </p>
            <div class="flex flex-wrap gap-2 mb-4">
              <span
                v-for="(tag, index) in project.tags"
                :key="index"
                class="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs"
              >{{ tag }}</span>
            </div>
            <div class="flex justify-between items-center">
              <span class="text-sm text-gray-500">{{ project.location }}</span>
              <NuxtLink
                :to="`/projects/${project.id}`"
                class="!rounded-button bg-gray-100 text-gray-600 px-4 py-2 text-sm group-hover:bg-blue-600 group-hover:text-white transition-colors"
              >
                查看详情
              </NuxtLink>
            </div>
          </div>
        </div>
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

<script setup>
import { ref, computed } from 'vue';

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
    title: "某汽车制造厂工业地坪项目",
    category: "工业地坪",
    tags: ["面积：15,000 ㎡", "工期：45 天", "2024 年完工"],
    description: "本项目位于江苏省苏州市工业园区，是一家大型汽车制造企业的核心生产车间。针对客户对地坪高承重、防滑、耐磨等严格要求，我们采用环氧自流平工艺，打造出符合现代化工业生产需求的高品质地坪系统。",
    location: "江苏省苏州市",
    image: "https://public.readdy.ai/ai/img_res/01a06382cac35ae672475407850a663f.jpg",
  },
  {
    id: "2",
    title: "某物流仓储中心地坪项目",
    category: "工业地坪",
    tags: ["面积：20,000 ㎡", "工期：60 天", "2023 年完工"],
    description: "本项目位于浙江省杭州市，是一家大型电商企业的核心仓储中心。针对高频次叉车运行、重型货架等使用场景，我们采用环氧砂浆地坪系统，提供了优异的耐磨性和抗冲击性能。",
    location: "浙江省杭州市",
    image: "https://public.readdy.ai/ai/img_res/f7bdd8c07adfa4acae381b38badfff46.jpg",
  },
  {
    id: "3",
    title: "某食品加工车间地坪项目",
    category: "工业地坪",
    tags: ["面积：12,000 ㎡", "工期：40 天", "2023 年完工"],
    description: "本项目位于山东省青岛市，是一家知名食品企业的生产车间。针对食品行业对卫生、防腐蚀的严格要求，我们采用食品级环氧地坪系统，确保地面符合食品安全生产标准。",
    location: "山东省青岛市",
    image: "https://public.readdy.ai/ai/img_res/79b2493085f78796a7727d0db5f2cecd.jpg",
  },
  {
    id: "4",
    title: "某高端商场地坪项目",
    category: "商业地坪",
    tags: ["面积：8,000 ㎡", "工期：30 天", "2023 年完工"],
    description: "本项目位于广州市天河区，是一家高端购物中心。我们为其提供了环氧彩砂地坪系统，兼具美观性和实用性，满足商业空间的高标准要求。",
    location: "广东省广州市",
    image: "https://public.readdy.ai/ai/img_res/8acf26e0e531add1a0b8bab8e68e68c2.jpg",
  },
  {
    id: "5",
    title: "某医院手术室地坪项目",
    category: "工业地坪",
    tags: ["面积：3,000 ㎡", "工期：20 天", "2023 年完工"],
    description: "本项目位于北京市朝阳区，是一家三甲医院的手术室区域。我们采用医用级环氧地坪系统，满足医疗环境对防菌、防静电、易清洁的严格要求。",
    location: "北京市朝阳区",
    image: "https://public.readdy.ai/ai/img_res/608c0e34f6245a20d3b0c8f3aededd5a.jpg",
  },
  {
    id: "6",
    title: "某体育场馆防水工程",
    category: "防水工程",
    tags: ["面积：25,000 ㎡", "工期：70 天", "2022 年完工"],
    description: "本项目位于重庆市，是一座大型体育场馆。我们为其提供了屋面和看台区域的防水解决方案，采用高弹性聚氨酯防水涂料，确保场馆在各种气候条件下的防水性能。",
    location: "重庆市",
    image: "https://public.readdy.ai/ai/img_res/61910e850340dffa728d50321be5632e.jpg",
  },
  {
    id: "7",
    title: "某住宅小区外墙保温工程",
    category: "保温工程",
    tags: ["面积：30,000 ㎡", "工期：90 天", "2022 年完工"],
    description: "本项目位于哈尔滨市，是一个大型住宅小区。我们为其提供了外墙保温系统，采用石墨聚苯板+耐碱玻纤网格布+弹性涂料的复合结构，有效提升建筑物的保温隔热性能。",
    location: "黑龙江省哈尔滨市",
    image: "https://public.readdy.ai/ai/img_res/ca1b5f4c65f8b12707ed3d637d2866ea.jpg",
  },
  {
    id: "8",
    title: "某电子厂防静电地坪项目",
    category: "工业地坪",
    tags: ["面积：5,000 ㎡", "工期：25 天", "2022 年完工"],
    description: "本项目位于深圳市，是一家电子产品制造企业。我们为其提供了防静电环氧地坪系统，有效控制静电释放，保护敏感电子元器件，满足电子行业的特殊需求。",
    location: "广东省深圳市",
    image: "https://public.readdy.ai/ai/img_res/8acf26e0e531add1a0b8bab8e68e68c2.jpg",
  },
  {
    id: "9",
    title: "某学校操场塑胶跑道项目",
    category: "商业地坪",
    tags: ["面积：4,000 ㎡", "工期：30 天", "2022 年完工"],
    description: "本项目位于南京市，是一所中学的操场改造工程。我们为其提供了全塑型塑胶跑道系统，具有优异的弹性、耐磨性和抗紫外线性能，为学生提供安全舒适的运动场地。",
    location: "江苏省南京市",
    image: "https://public.readdy.ai/ai/img_res/d419d828d43aa7af4ffbd7f5ade22367.jpg",
  },
  {
    id: "10",
    title: "某化工厂防腐地坪项目",
    category: "工业地坪",
    tags: ["面积：6,000 ㎡", "工期：35 天", "2021 年完工"],
    description: "本项目位于天津市，是一家化工企业的生产车间。我们为其提供了环氧防腐地坪系统，具有优异的耐酸碱性能，能够抵抗各种化学品的侵蚀，延长地坪使用寿命。",
    location: "天津市",
    image: "https://public.readdy.ai/ai/img_res/281fe28c3c6f07f8ac6929aa23dd8801.jpg",
  },
  {
    id: "11",
    title: "某办公楼屋面防水工程",
    category: "防水工程",
    tags: ["面积：2,000 ㎡", "工期：20 天", "2021 年完工"],
    description: "本项目位于上海市，是一栋高层办公楼的屋面防水改造工程。我们采用了TPO防水卷材系统，具有优异的耐候性和抗老化性能，彻底解决了原有屋面渗漏问题。",
    location: "上海市",
    image: "https://public.readdy.ai/ai/img_res/d3cd44578f77a34f667116b3c5fc0513.jpg",
  },
  {
    id: "12",
    title: "某地下车库防水地坪项目",
    category: "防水工程",
    tags: ["面积：10,000 ㎡", "工期：40 天", "2021 年完工"],
    description: "本项目位于成都市，是一个大型商业综合体的地下车库。我们为其提供了聚氨酯防水地坪系统，解决了地下车库渗水、起砂等问题，同时提升了车库的整体美观度。",
    location: "四川省成都市",
    image: "https://public.readdy.ai/ai/img_res/e4baabac097276df8201313e417ea8b6.jpg",
  },
];

// 筛选项目
const filteredProjects = computed(() => {
  let result = projects;
  
  // 按分类筛选
  if (activeCategory !== '全部') {
    result = result.filter(project => project.category === activeCategory.value);
  }
  
  // 按搜索关键词筛选
  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase();
    result = result.filter(project => 
      project.title.toLowerCase().includes(query) || 
      project.description.toLowerCase().includes(query) ||
      project.location.toLowerCase().includes(query)
    );
  }
  
  // 分页
  const startIndex = (currentPage.value - 1) * pageSize;
  return result.slice(startIndex, startIndex + pageSize);
});

// 计算总页数
const totalPages = computed(() => {
  let result = projects;
  
  // 按分类筛选
  if (activeCategory !== '全部') {
    result = result.filter(project => project.category === activeCategory.value);
  }
  
  // 按搜索关键词筛选
  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase();
    result = result.filter(project => 
      project.title.toLowerCase().includes(query) || 
      project.description.toLowerCase().includes(query) ||
      project.location.toLowerCase().includes(query)
    );
  }
  
  return Math.ceil(result.length / pageSize);
});

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