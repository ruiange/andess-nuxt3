<template>
  <div class="min-h-[1024px]">
    <!-- 导航栏 -->
    <nav class="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
      <div
        class="max-w-[1440px] mx-auto px-8 h-20 flex items-center justify-between"
      >
        <div class="flex items-center gap-16">
          <NuxtLink to="/" class="text-2xl font-bold">安实创业</NuxtLink>
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

    <!-- 主要内容区域 -->
    <div class="pt-32 pb-20 max-w-[1440px] mx-auto px-8">
      <!-- 面包屑导航 -->
      <div class="flex items-center gap-2 text-sm text-gray-500 mb-8">
        <NuxtLink to="/" class="hover:text-blue-600">首页</NuxtLink>
        <i class="fas fa-chevron-right text-xs"></i>
        <NuxtLink to="/news" class="hover:text-blue-600">新闻中心</NuxtLink>
        <i class="fas fa-chevron-right text-xs"></i>
        <span>新闻详情</span>
      </div>

      <!-- 文章主体 -->
      <article class="bg-white rounded-xl p-12 shadow-sm mb-12">
        <h1 class="text-3xl font-bold mb-6">
          {{ news.title }}
        </h1>
        <div
          class="flex items-center gap-6 text-sm text-gray-500 mb-8 pb-8 border-b"
        >
          <span><i class="far fa-calendar-alt mr-2"></i>{{ news.date }}</span>
          <span><i class="far fa-eye mr-2"></i>{{ viewCount }} 次浏览</span>
          <div class="flex items-center gap-2">
            <button
              @click="handleLike"
              class="flex items-center gap-1 hover:text-blue-600 cursor-pointer"
            >
              <i
                :class="isLiked ? 'fas fa-heart text-red-500' : 'far fa-heart'"
              ></i>
              <span>{{ likeCount }}</span>
            </button>
            <button
              @click="handleCollect"
              class="flex items-center gap-1 hover:text-blue-600 cursor-pointer"
            >
              <i
                :class="isCollected ? 'fas fa-star text-yellow-500' : 'far fa-star'"
              ></i>
              <span>收藏</span>
            </button>
            <button
              @click="isShareModalOpen = true"
              class="flex items-center gap-1 hover:text-blue-600 cursor-pointer"
            >
              <i class="fas fa-share-alt"></i>
              <span>分享</span>
            </button>
          </div>
        </div>

        <div class="prose max-w-none">
          <img
            :src="news.image"
            :alt="news.title"
            class="w-full rounded-lg mb-8"
          />

          <p class="text-lg leading-relaxed mb-6">{{ news.summary }}</p>
          
          <div v-if="news.id === '2'">
            <h2 class="text-xl font-bold mb-4">重大技术突破</h2>
            <p class="mb-6">
              安实创业研发团队历时两年，在环保地坪材料领域取得重大突破。新一代环保型环氧地坪材料采用创新配方，在保持优异物理性能的同时，显著降低了环境影响。主要技术突破包括：
            </p>
            <ul class="list-disc pl-6 mb-6">
              <li>VOC 释放量较传统产品降低 85%</li>
              <li>原材料 90% 可来自可再生资源</li>
              <li>生产过程碳排放降低 60%</li>
              <li>产品使用寿命提升 30%</li>
            </ul>

            <h2 class="text-xl font-bold mb-4">环保性能数据</h2>
            <div class="mb-8 h-[400px]" ref="chartContainer"></div>

            <h2 class="text-xl font-bold mb-4">应用场景</h2>
            <p class="mb-6">新型环保地坪材料适用范围广泛，可应用于：</p>
            <div class="grid grid-cols-3 gap-6 mb-8">
              <div
                v-for="scene in applicationScenes"
                :key="scene.title"
                class="rounded-lg overflow-hidden"
              >
                <img
                  :src="scene.image"
                  :alt="scene.title"
                  class="w-full aspect-video object-cover"
                />
                <div class="bg-gray-50 p-4">
                  <h3 class="font-bold mb-2">{{ scene.title }}</h3>
                  <p class="text-sm text-gray-600">{{ scene.description }}</p>
                </div>
              </div>
            </div>

            <h2 class="text-xl font-bold mb-4">行业影响</h2>
            <p class="mb-6">该技术突破将对建材行业产生深远影响：</p>
            <ul class="list-disc pl-6 mb-6">
              <li>引领行业环保标准提升</li>
              <li>推动建材行业低碳转型</li>
              <li>促进绿色建筑发展</li>
              <li>助力国家碳中和目标实现</li>
            </ul>
          </div>
          
          <div v-else>
            <p v-for="(paragraph, index) in news.content" :key="index" class="mb-4">
              {{ paragraph }}
            </p>
          </div>
        </div>
      </article>

      <!-- 相关新闻 -->
      <div>
        <h2 class="text-2xl font-bold mb-8">相关新闻</h2>
        <div class="grid grid-cols-3 gap-8">
          <div
            v-for="item in relatedNews"
            :key="item.id"
            class="bg-white rounded-lg overflow-hidden shadow-sm group cursor-pointer"
          >
            <div class="aspect-video overflow-hidden">
              <NuxtLink :to="`/news/${item.id}`">
                <img
                  :src="item.image"
                  :alt="item.title"
                  class="w-full h-full object-cover transition duration-300 group-hover:scale-110"
                />
              </NuxtLink>
            </div>
            <div class="p-6">
              <div class="flex items-center gap-4 text-sm text-gray-500 mb-3">
                <span><i class="far fa-calendar-alt mr-2"></i>{{ item.date }}</span>
                <span><i class="far fa-eye mr-2"></i>{{ item.views }}</span>
              </div>
              <h3 class="font-bold text-lg mb-3 group-hover:text-blue-600">
                <NuxtLink :to="`/news/${item.id}`">{{ item.title }}</NuxtLink>
              </h3>
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
      </div>
    </div>

    <!-- 分享弹窗 -->
    <div
      v-if="isShareModalOpen"
      class="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
      @click="isShareModalOpen = false"
    >
      <div class="bg-white rounded-xl p-8 w-96" @click.stop>
        <h3 class="text-xl font-bold mb-6">分享到</h3>
        <div class="grid grid-cols-4 gap-4">
          <button
            v-for="platform in sharePlatforms"
            :key="platform.name"
            class="flex flex-col items-center gap-2 p-4 rounded-lg hover:bg-gray-50 cursor-pointer"
            @click="handleShare(platform.name)"
          >
            <i
              :class="platform.icon"
              class="text-2xl"
              :style="{ color: platform.color }"
            ></i>
            <span class="text-sm">{{ platform.name }}</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {onMounted, ref} from 'vue';
import {useRoute} from 'nuxt/app';

// 指定使用默认布局
definePageMeta({
  layout: 'default'
});

// 获取路由参数
const route = useRoute();
const newsId = route.params.id;

// 导航菜单
const navItems = [
  { name: '首页', path: '/' },
  { name: '产品中心', path: '/products' },
  { name: '解决方案', path: '/solutions' },
  { name: '工程案例', path: '/projects' },
  { name: '新闻中心', path: '/news' },
  { name: '关于我们', path: '/about' }
];

// 交互状态
const viewCount = ref(2463);
const likeCount = ref(168);
const isLiked = ref(false);
const isCollected = ref(false);
const isShareModalOpen = ref(false);
const chartContainer = ref(null);

// 应用场景数据
const applicationScenes = [
  {
    title: "医疗机构",
    description: "无菌、易清洁、耐消毒",
    image: "https://public.readdy.ai/ai/img_res/608c0e34f6245a20d3b0c8f3aededd5a.jpg",
  },
  {
    title: "食品工厂",
    description: "防滑、防腐、易清洗",
    image: "https://public.readdy.ai/ai/img_res/68d8f71a859cf12bfbd40e95159b053b.jpg",
  },
  {
    title: "实验室",
    description: "耐化学品、防静电",
    image: "https://public.readdy.ai/ai/img_res/81ffc0fe23e446f573880101c08b5bda.jpg",
  },
];

// 分享平台
const sharePlatforms = [
  { name: "微信", icon: "fab fa-weixin", color: "#07C160" },
  { name: "微博", icon: "fab fa-weibo", color: "#E6162D" },
  { name: "QQ", icon: "fab fa-qq", color: "#12B7F5" },
  { name: "链接", icon: "fas fa-link", color: "#666666" },
];

// 模拟新闻数据（实际应用中应该从API获取）
const newsData = {
  "1": {
    id: "1",
    title: "安实创业荣获2025年度建材行业创新企业奖",
    summary: "在近日举行的2025年度建材行业峰会上，安实创业凭借在环保建材领域的突出创新成果，荣获'年度建材行业创新企业奖'。这是对公司在可持续发展道路上持续努力的肯定。",
    date: "2025-03-08",
    views: "2,358",
    category: "公司新闻",
    image: "https://public.readdy.ai/ai/img_res/d3cd44578f77a34f667116b3c5fc0513.jpg",
    tags: ["公司荣誉", "行业奖项", "创新成果"],
    content: [
      "在近日举行的2025年度建材行业峰会上，安实创业凭借在环保建材领域的突出创新成果，荣获'年度建材行业创新企业奖'。这是对公司在可持续发展道路上持续努力的肯定。",
      "本次峰会由中国建材协会主办，汇集了全国各地的建材行业领军企业和专家学者。安实创业作为行业内知名企业，展示了多项环保建材创新产品，包括零VOC环氧地坪系统、高性能隔热保温材料等，引起了与会者的广泛关注。",
      "公司董事长张志远在获奖致辞中表示：'安实创业一直秉持创新驱动发展的理念，将环保与性能完美结合，为客户提供更加优质、环保的建材产品。未来，我们将继续加大研发投入，推动行业技术进步，为建设美丽中国贡献力量。'",
      "据悉，安实创业研发的零VOC环氧地坪系统采用全新配方，在保持优异物理性能的同时，VOC释放量较传统产品降低85%，已成功应用于多个医院、学校等对空气质量要求较高的场所。",
      "此外，公司自主研发的新型隔热保温材料，导热系数低至0.023W/(m·K)，比传统材料提升30%的保温效果，有效降低建筑能耗，助力'双碳'目标实现。",
      "中国建材协会秘书长李明在颁奖词中指出：'安实创业在环保建材领域的创新成果，不仅提升了产品性能，更为行业绿色发展树立了标杆。希望更多企业能够向安实创业学习，将创新与环保相结合，推动建材行业高质量发展。'",
      "据了解，安实创业近年来持续加大研发投入，研发经费占销售收入的比例已达5%，远高于行业平均水平。公司拥有一支由博士、硕士组成的专业研发团队，并与多所高校建立了产学研合作关系。",
      "获此殊荣，安实创业将继续秉持'创新、环保、品质'的发展理念，不断推出更多满足市场需求的优质建材产品，为客户创造更大价值。"
    ]
  },
  "2": {
    id: "2",
    title: "新型环保地坪材料技术突破，助力碳中和",
    summary: "我司研发团队历时两年，成功开发出新一代环保型环氧地坪材料，VOC释放量较传统产品降低85%，同时保持优异的物理性能，获得国家发明专利。",
    date: "2025-03-05",
    views: "1,876",
    category: "技术动态",
    image: "https://public.readdy.ai/ai/img_res/e4baabac097276df8201313e417ea8b6.jpg",
    tags: ["技术创新", "环保材料", "碳中和"],
    content: []
  },
  "3": {
    id: "3",
    title: "安实创业完成杭州亚运场馆系列项目交付",
    summary: "历时8个月，安实创业圆满完成杭州亚运会主场馆及配套设施的防水、地坪等工程项目。项目采用多项创新技术，获得业主方高度评价。",
    date: "2025-03-01",
    views: "3,142",
    category: "公司新闻",
    image: "https://public.readdy.ai/ai/img_res/61910e850340dffa728d50321be5632e.jpg",
    tags: ["工程案例", "亚运会", "重点项目"],
    content: [
      "历时8个月，安实创业圆满完成杭州亚运会主场馆及配套设施的防水、地坪等工程项目。项目采用多项创新技术，获得业主方高度评价。",
      "本次亚运会场馆项目是安实创业承接的重点工程之一，涉及主体育场、游泳馆、体育馆等多个场馆的防水、地坪、保温等多个系统的施工。项目总面积超过10万平方米，是公司近年来承接的最大规模体育场馆项目。",
      "项目采用了公司多项创新技术和产品，包括新一代环保型环氧地坪系统、高弹性防水涂料系统等，这些产品不仅具有优异的物理性能，还具有环保、节能等特点，符合绿色奥运的理念。",
      "项目经理王强介绍，本次项目面临工期紧、技术要求高、质量标准严等多重挑战。为确保项目顺利完成，公司组建了由技术专家、项目管理人员和施工骨干组成的精英团队，采用科学的项目管理方法，制定了详细的施工计划和质量控制措施。",
      "在施工过程中，团队克服了多项技术难题，如大跨度屋面防水、复杂结构防水节点处理、特殊功能地坪施工等，通过技术创新和精细化施工，确保了工程质量和进度。",
      "项目完工后，经过严格的质量检测和验收，各项指标均达到或超过设计要求和国家标准。业主方对项目质量和服务给予了高度评价，认为安实创业的产品和服务达到了国际一流水平。",
      "公司总经理李明表示，亚运会场馆项目的成功实施，不仅展示了公司的技术实力和项目管理能力，也为公司积累了宝贵的大型体育场馆项目经验，为今后承接更多重大项目奠定了基础。"
    ]
  }
};

// 获取当前新闻数据
const news = newsData[newsId] || newsData["1"];

// 相关新闻（排除当前新闻）
const relatedNews = [
  {
    id: "1",
    title: "安实创业与清华大学达成产学研合作",
    summary: "双方将在环保建材领域展开深度合作，共同推进行业技术创新",
    date: "2025-03-10",
    views: "1,245",
    image: "https://public.readdy.ai/ai/img_res/d419d828d43aa7af4ffbd7f5ade22367.jpg",
  },
  {
    id: "2",
    title: "我司环保地坪产品获得国际认证",
    summary: "通过 ISO 14001 环境管理体系认证，产品性能获得国际认可",
    date: "2025-03-08",
    views: "1,567",
    image: "https://public.readdy.ai/ai/img_res/281fe28c3c6f07f8ac6929aa23dd8801.jpg",
  },
  {
    id: "3",
    title: "2025 年建材行业环保发展趋势分析",
    summary: "专家解读最新行业政策，分析环保建材发展机遇与挑战",
    date: "2025-03-06",
    views: "2,089",
    image: "https://public.readdy.ai/ai/img_res/ca1b5f4c65f8b12707ed3d637d2866ea.jpg",
  },
];

// 交互方法
const handleLike = () => {
  if (!isLiked.value) {
    likeCount.value++;
    isLiked.value = true;
  } else {
    likeCount.value--;
    isLiked.value = false;
  }
};

const handleCollect = () => {
  isCollected.value = !isCollected.value;
};

const handleShare = (platform) => {
  console.log(`分享到 ${platform}`);
  isShareModalOpen.value = false;
};

// 图表初始化
onMounted(() => {
  if (chartContainer.value && newsId === '2') {
    import('echarts').then((echarts) => {
      const chart = echarts.init(chartContainer.value);
      const option = {
        animation: false,
        title: {
          text: "环保性能对比",
          left: "center",
        },
        tooltip: {
          trigger: "axis",
        },
        legend: {
          data: ["传统产品", "新型环保产品"],
          bottom: 0,
        },
        radar: {
          indicator: [
            { name: "VOC释放量", max: 100 },
            { name: "碳排放", max: 100 },
            { name: "可再生原料占比", max: 100 },
            { name: "使用寿命", max: 100 },
            { name: "性能指标", max: 100 },
          ],
        },
        series: [
          {
            type: "radar",
            data: [
              {
                value: [90, 85, 20, 70, 80],
                name: "传统产品",
                itemStyle: {
                  color: "#FF6B6B",
                },
              },
              {
                value: [15, 25, 90, 95, 85],
                name: "新型环保产品",
                itemStyle: {
                  color: "#4ECB71",
                },
              },
            ],
          },
        ],
      };
      chart.setOption(option);
      
      // 响应窗口大小变化
      window.addEventListener('resize', () => {
        chart.resize();
      });
    });
  }
});
</script>

<style scoped>
.prose {
  max-width: none;
}
.prose img {
  margin: 0;
}
.prose h2 {
  margin-top: 2rem;
  margin-bottom: 1rem;
}
.prose p {
  margin-bottom: 1.5rem;
}
.prose ul {
  margin-bottom: 1.5rem;
}
</style> 