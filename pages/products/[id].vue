<template>
    <div class="min-h-[1024px]">
      <div class="max-w-[1440px] mx-auto px-8">
        <!-- 面包屑导航 -->
        <div class="py-4 text-sm text-gray-600">
          <a href="#" class="hover:text-blue-600">首页</a>
          <span class="mx-2">/</span>
          <a
            href="https://readdy.ai/home/c04c07c2-4169-470d-81e0-8f0a0ecbf8f5/96c80791-cb09-4d0d-b87c-62572ebe7a32"
            data-readdy="true"
            class="hover:text-blue-600"
            >产品中心</a
          >
          <span class="mx-2">/</span>
          <span>环氧自流平地坪</span>
        </div>
  
        <!-- 产品展示区 -->
        <div class="flex gap-8 mb-12">
          <div class="w-[600px]">
            <div class="swiper-container" ref="swiperRef">
              <Swiper
                :modules="swiperOptions.modules"
                :pagination="swiperOptions.pagination"
                :autoplay="swiperOptions.autoplay"
                @slideChange="onSlideChange"
                class="w-full h-[600px]"
              >
                <SwiperSlide
                  v-for="(image, index) in productImages"
                  :key="index"
                >
                  <img
                    :src="image"
                    class="w-full h-full object-cover rounded-lg cursor-pointer"
                    @click="showLightbox(index)"
                  />
                </SwiperSlide>
              </Swiper>
            </div>
            <div class="flex gap-4 mt-4">
              <div
                v-for="(image, index) in productImages"
                :key="index"
                class="w-24 h-24 rounded-lg overflow-hidden cursor-pointer"
                :class="{'border-2 border-blue-600': currentImageIndex === index}"
                @click="currentImageIndex = index"
              >
                <img :src="image" class="w-full h-full object-cover" />
              </div>
            </div>
          </div>
  
          <div class="flex-1">
            <h1 class="text-3xl font-bold mb-4">环氧自流平地坪</h1>
            <div class="text-gray-600 mb-6">
              <p>产品型号：EP-2025</p>
              <p>适用范围：工业厂房、仓储物流、展厅等</p>
            </div>
            <div class="bg-gray-50 p-6 rounded-lg mb-8">
              <h3 class="font-bold mb-4">产品特点</h3>
              <div class="grid grid-cols-2 gap-4">
                <div
                  v-for="(feature, index) in productFeatures"
                  :key="index"
                  class="flex items-center gap-3"
                >
                  <i :class="feature.icon" class="text-blue-600"></i>
                  <span>{{ feature.text }}</span>
                </div>
              </div>
            </div>
            <div class="flex gap-4">
              <button
                class="!rounded-button bg-[var(--td-brand-color)] text-white px-8 h-12 cursor-pointer whitespace-nowrap"
                @click="showContactForm = true"
              >
                立即咨询
              </button>
              <button
                class="!rounded-button border border-gray-300 px-8 h-12 cursor-pointer whitespace-nowrap flex items-center gap-2"
                @click="showDownloadForm = true"
              >
                <i class="fas fa-download"></i>
                下载资料
              </button>
            </div>
          </div>
        </div>
  
        <!-- 产品参数 -->
        <div class="mb-12">
          <div class="flex gap-4 border-b mb-6">
            <button
              v-for="tab in tabs"
              :key="tab"
              class="px-6 py-3 font-bold cursor-pointer whitespace-nowrap"
              :class="currentTab === tab ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600'"
              @click="currentTab = tab"
            >
              {{ tab }}
            </button>
          </div>
  
          <div v-show="currentTab === '技术参数'" class="bg-white rounded-lg">
            <table class="w-full">
              <tbody>
                <tr
                  v-for="(param, index) in technicalParams"
                  :key="index"
                  :class="index % 2 === 0 ? 'bg-gray-50' : ''"
                >
                  <td class="py-4 px-6 w-1/3 font-bold">{{ param.name }}</td>
                  <td class="py-4 px-6">{{ param.value }}</td>
                </tr>
              </tbody>
            </table>
          </div>
  
          <div v-show="currentTab === '施工说明'" class="space-y-6">
            <div
              v-for="(step, index) in constructionSteps"
              :key="index"
              class="bg-gray-50 p-6 rounded-lg"
            >
              <h4 class="font-bold mb-2">{{ step.title }}</h4>
              <p class="text-gray-600">{{ step.content }}</p>
            </div>
          </div>
  
          <div v-show="currentTab === '应用案例'" class="grid grid-cols-3 gap-8">
            <div
              v-for="(case_, index) in cases"
              :key="index"
              class="bg-white rounded-lg overflow-hidden"
            >
              <img :src="case_.image" class="w-full h-48 object-cover" />
              <div class="p-6">
                <h4 class="font-bold mb-2">{{ case_.title }}</h4>
                <p class="text-gray-600 text-sm mb-4">{{ case_.description }}</p>
                <div class="flex justify-between items-center text-sm">
                  <span class="text-gray-500">{{ case_.area }}</span>
                  <span class="text-blue-600">{{ case_.date }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
  
        <!-- 相关产品 -->
        <div class="mb-20">
          <h2 class="text-2xl font-bold mb-8">相关产品推荐</h2>
          <div class="grid grid-cols-4 gap-8">
            <div
              v-for="product in relatedProducts"
              :key="product.name"
              class="group cursor-pointer"
            >
              <div class="aspect-square rounded-lg overflow-hidden mb-4">
                <img
                  :src="product.image"
                  class="w-full h-full object-cover transition duration-300 group-hover:scale-110"
                />
              </div>
              <h4 class="font-bold mb-2">{{ product.name }}</h4>
              <p class="text-gray-600 text-sm">{{ product.desc }}</p>
            </div>
          </div>
        </div>
      </div>
  
      <!-- 咨询表单弹窗 -->
      <div
        v-if="showContactForm"
        class="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
      >
        <div class="bg-white rounded-lg p-8 w-[480px]">
          <div class="flex justify-between items-center mb-6">
            <h3 class="text-xl font-bold">产品咨询</h3>
            <i
              class="fas fa-times cursor-pointer"
              @click="showContactForm = false"
            ></i>
          </div>
          <div class="space-y-4">
            <div>
              <label class="block text-sm font-bold mb-2">姓名</label>
              <input
                type="text"
                v-model="contactForm.name"
                class="w-full h-10 px-4 rounded-lg border border-gray-300"
              />
            </div>
            <div>
              <label class="block text-sm font-bold mb-2">电话</label>
              <input
                type="tel"
                v-model="contactForm.phone"
                class="w-full h-10 px-4 rounded-lg border border-gray-300"
              />
            </div>
            <div>
              <label class="block text-sm font-bold mb-2">留言</label>
              <textarea
                v-model="contactForm.message"
                rows="4"
                class="w-full p-4 rounded-lg border border-gray-300"
              ></textarea>
            </div>
          </div>
          <button
            class="!rounded-button bg-[var(--td-brand-color)] text-white w-full h-12 mt-6 cursor-pointer whitespace-nowrap"
            @click="submitContact"
          >
            提交
          </button>
        </div>
      </div>
  
      <!-- 下载资料弹窗 -->
      <div
        v-if="showDownloadForm"
        class="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
      >
        <div class="bg-white rounded-lg p-8 w-[480px]">
          <div class="flex justify-between items-center mb-6">
            <h3 class="text-xl font-bold">下载资料</h3>
            <i
              class="fas fa-times cursor-pointer"
              @click="showDownloadForm = false"
            ></i>
          </div>
          <div class="space-y-4">
            <div
              v-for="doc in documents"
              :key="doc.name"
              class="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
            >
              <div class="flex items-center gap-3">
                <i class="fas fa-file-pdf text-red-500"></i>
                <span>{{ doc.name }}</span>
              </div>
              <button
                class="!rounded-button bg-[var(--td-brand-color)] text-white px-4 h-8 text-sm cursor-pointer whitespace-nowrap"
                @click="downloadDoc(doc)"
              >
                下载
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script lang="ts" setup>
  import {ref} from "vue";
  import {Swiper, SwiperSlide} from "swiper/vue";
  import {Autoplay, Pagination} from "swiper/modules";

  // 添加 Swiper 样式导入
  import 'swiper/css';
  import 'swiper/css/pagination';
  import 'swiper/css/autoplay';

  const currentImageIndex = ref(0);
  const showContactForm = ref(false);
  const showDownloadForm = ref(false);
  const currentTab = ref("技术参数");
  const tabs = ["技术参数", "施工说明", "应用案例"];
  
  const swiperModules = [Pagination, Autoplay];
  
  const swiperOptions = {
    modules: [Pagination, Autoplay],
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    }
  };
  
  const contactForm = ref({
    name: "",
    phone: "",
    message: "",
  });
  
  const productImages = [
    "https://public.readdy.ai/ai/img_res/7f9c89d9a7b43e8d1234567890abcdef.jpg",
    "https://public.readdy.ai/ai/img_res/7f9c89d9a7b43e8d1234567890abcdef.jpg",
    "https://public.readdy.ai/ai/img_res/7f9c89d9a7b43e8d1234567890abcdef.jpg",
    "https://public.readdy.ai/ai/img_res/7f9c89d9a7b43e8d1234567890abcdef.jpg",
  ];
  
  const productFeatures = [
    { icon: "fas fa-shield-alt", text: "耐磨性能优异" },
    { icon: "fas fa-tint-slash", text: "防水防腐蚀" },
    { icon: "fas fa-walking", text: "防滑性能出色" },
    { icon: "fas fa-paint-brush", text: "美观耐用" },
    { icon: "fas fa-recycle", text: "环保无害" },
    { icon: "fas fa-tools", text: "施工便捷" },
  ];
  
  const technicalParams = [
    { name: "产品标准", value: "GB/T 22374-2018" },
    { name: "抗压强度", value: "≥60MPa" },
    { name: "附着力", value: "≥2.0MPa" },
    { name: "耐磨性", value: "≤0.1g/1000r" },
    { name: "施工温度", value: "5-35℃" },
    { name: "养护时间", value: "7天" },
  ];
  
  const constructionSteps = [
    {
      title: "基层处理",
      content: "对混凝土基层进行打磨、除尘、修补，确保表面平整、干净、干燥。",
    },
    {
      title: "底涂施工",
      content: "使用环氧底漆进行封闭处理，提高面涂层的附着力。",
    },
    { title: "中涂施工", content: "采用环氧中涂料找平，修复表面缺陷。" },
    {
      title: "面涂施工",
      content: "使用自流平环氧树脂进行面层施工，确保涂层均匀。",
    },
  ];
  
  const cases = [
    {
      title: "某电子厂车间地坪项目",
      description: "采用环氧自流平地坪系统，满足防静电要求",
      area: "5000㎡",
      date: "2025-02",
      image:
        "https://public.readdy.ai/ai/img_res/7f9c89d9a7b43e8d1234567890abcdef.jpg",
    },
    {
      title: "某物流中心仓库地坪",
      description: "重载环氧地坪系统，满足叉车作业需求",
      area: "8000㎡",
      date: "2025-01",
      image:
        "https://public.readdy.ai/ai/img_res/7f9c89d9a7b43e8d1234567890abcdef.jpg",
    },
    {
      title: "某展厅装饰地坪",
      description: "环氧彩砂地坪系统，展现艺术效果",
      area: "2000㎡",
      date: "2024-12",
      image:
        "https://public.readdy.ai/ai/img_res/7f9c89d9a7b43e8d1234567890abcdef.jpg",
    },
  ];
  
  const relatedProducts = [
    {
      name: "环氧彩砂地坪",
      desc: "适用于展厅、商场等场所，具有独特的装饰效果",
      image:
        "https://public.readdy.ai/ai/img_res/7f9c89d9a7b43e8d1234567890abcdef.jpg",
    },
    {
      name: "环氧防静电地坪",
      desc: "适用于电子车间、实验室等场所，具有防静电功能",
      image:
        "https://public.readdy.ai/ai/img_res/7f9c89d9a7b43e8d1234567890abcdef.jpg",
    },
    {
      name: "环氧砂浆地坪",
      desc: "适用于重载车间、维修车间等场所，承重能力强",
      image:
        "https://public.readdy.ai/ai/img_res/7f9c89d9a7b43e8d1234567890abcdef.jpg",
    },
    {
      name: "环氧防腐地坪",
      desc: "适用于化工厂、电镀车间等场所，防腐性能优异",
      image:
        "https://public.readdy.ai/ai/img_res/7f9c89d9a7b43e8d1234567890abcdef.jpg",
    },
  ];
  
  const documents = [
    { name: "产品技术说明书.pdf", size: "2.5MB" },
    { name: "施工工艺指南.pdf", size: "3.8MB" },
    { name: "质量检测报告.pdf", size: "1.2MB" },
    { name: "产品认证证书.pdf", size: "0.8MB" },
  ];
  
  const submitContact = () => {
    console.log("提交咨询表单", contactForm.value);
    showContactForm.value = false;
  };
  
  const downloadDoc = (doc: { name: string }) => {
    console.log("下载文档", doc.name);
  };
  
  const showLightbox = (index: number) => {
    currentImageIndex.value = index;
  };
  
  // 监听 Swiper 切换
  const onSlideChange = (swiper: any) => {
    currentImageIndex.value = swiper.activeIndex;
  };
  </script>
  
  <style>
  /* 确保 Swiper 分页器样式正确显示 */
  .swiper-pagination {
    position: absolute;
    bottom: 20px !important;
  }
  
  .swiper-pagination-bullet {
    background: white;
    opacity: 0.6;
  }
  
  .swiper-pagination-bullet-active {
    opacity: 1;
  }
  </style>
  