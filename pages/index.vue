<template>
	<div class="min-h-[1024px]">
		<!-- Hero区域 -->
		<div class="relative h-[600px] bg-cover bg-center" :style="{ backgroundImage: `url(${heroBackground})` }">
			<div class="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-transparent">
				<div class="max-w-[1440px] mx-auto px-8 h-full flex items-center">
					<div class="max-w-2xl text-white">
						<h2 class="text-5xl font-bold mb-6">专业建材解决方案提供商</h2>
						<p class="text-xl mb-8">25 年专业经验，服务超过 10000 个工程项目</p>
						<div class="flex gap-4">
							<button class="!rounded-button bg-blue-600 px-8 h-12 cursor-pointer whitespace-nowrap">了解更多</button>
							<button class="!rounded-button border-2 border-white px-8 h-12 cursor-pointer whitespace-nowrap">工程案例</button>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- 产品分类 -->
		<div class="max-w-[1440px] mx-auto px-8 py-20">
			<h3 class="text-3xl font-bold text-center mb-12">产品中心</h3>
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
			<div class="grid grid-cols-4 gap-8">
				<ProductItem 
					v-for="product in products" 
					:key="product.name" 
					:product="product"
					detailLink="https://readdy.ai/home/c04c07c2-4169-470d-81e0-8f0a0ecbf8f5/45be900f-1ebb-4fa3-a5ad-5077417e2431"
					:isReaddy="true"
				/>
			</div>
		</div>
		<!-- 解决方案 -->
		<div class="bg-gray-50 py-20">
			<div class="max-w-[1440px] mx-auto px-8">
				<h3 class="text-3xl font-bold text-center mb-12">解决方案</h3>
				<div class="flex gap-8">
					<div class="w-64 bg-white rounded-lg p-6">
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
					<div class="flex-1 bg-white rounded-lg p-8">
						<div class="flex gap-8">
							<div class="flex-1">
								<h4 class="text-2xl font-bold mb-4">工业地坪解决方案</h4>
								<p class="text-gray-600 mb-6">
									针对不同行业的地坪需求，我们提供专业的解决方案，包括环氧地坪、密封固化地坪、彩色艺术地坪等多种选择。我们的方案具有：
								</p>
								<ul class="space-y-4">
									<li class="flex items-center gap-3">
										<i class="fas fa-check-circle text-blue-600"></i>
										<span>超强耐磨性能</span>
									</li>
									<li class="flex items-center gap-3">
										<i class="fas fa-check-circle text-blue-600"></i>
										<span>优异防腐蚀性能</span>
									</li>
									<li class="flex items-center gap-3">
										<i class="fas fa-check-circle text-blue-600"></i>
										<span>卓越防滑性能</span>
									</li>
								</ul>
							</div>
							<div class="w-80 rounded-lg overflow-hidden">
								<img :src="solutionImage" class="w-full h-full object-cover" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- 工程案例 -->
		<div class="max-w-[1440px] mx-auto px-8 py-20">
			<h3 class="text-3xl font-bold text-center mb-12">工程案例</h3>
			<div class="grid grid-cols-3 gap-8">
				<ProjectItem 
					v-for="project in projects" 
					:key="project.name" 
					:project="project"
					detailLink="https://readdy.ai/home/c04c07c2-4169-470d-81e0-8f0a0ecbf8f5/45be900f-1ebb-4fa3-a5ad-5077417e2431"
					:isReaddy="true"
				/>
			</div>
		</div>
		<!-- 新闻中心 -->
		<div class="bg-gray-50 py-20">
			<div class="max-w-[1440px] mx-auto px-8">
				<h3 class="text-3xl font-bold text-center mb-12">新闻中心</h3>
				<div class="grid grid-cols-3 gap-8">
					<NewsItem 
						v-for="news in newsItems" 
						:key="news.title" 
						:news="news"
						:newsLink="`/news/${news.id}`"
						:readMoreLink="`/news/${news.id}`"
						:isReaddy="true"
					/>
				</div>
				<div class="text-center mt-10">
					<NuxtLink to="/news" class="!rounded-button bg-blue-600 text-white px-8 h-12 cursor-pointer whitespace-nowrap inline-flex items-center justify-center">
						查看更多新闻
					</NuxtLink>
				</div>
			</div>
		</div>
		<!-- 公司优势 -->
		<div class="max-w-[1440px] mx-auto px-8 py-20">
			<h3 class="text-3xl font-bold text-center mb-12">为什么选择我们</h3>
			<div class="grid grid-cols-4 gap-8">
				<div
						v-for="advantage in advantages"
						:key="advantage.title"
						class="text-center"
				>
					<i :class="advantage.icon" class="text-4xl text-blue-600 mb-4"></i>
					<h4 class="font-bold mb-2">{{ advantage.title }}</h4>
					<p class="text-gray-600 text-sm">{{ advantage.desc }}</p>
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
import NewsItem from '~/components/NewsItem.vue';
import ProductItem from '~/components/ProductItem.vue';
import ProjectItem from '~/components/ProjectItem.vue';

const categories = ["地坪材料", "防水材料", "保温材料", "装饰材料", "结构加固"];
const solutions = [
	"工业地坪解决方案",
	"建筑防水解决方案",
	"外墙保温解决方案",
	"建筑加固解决方案",
];
const currentCategory = ref("地坪材料");
const currentSolution = ref("工业地坪解决方案");
const heroBackground =
		"https://public.readdy.ai/ai/img_res/4af33f48ef7a51c81f14145c7923a08c.jpg";
const solutionImage =
		"https://public.readdy.ai/ai/img_res/865f70f25b08a4cec082e49003d0c017.jpg";
const products = [
	{
		name: "环氧自流平地坪",
		desc: "适用于工业厂房、仓库等场所，具有优异的耐磨性和防腐性",
		image:
				"https://public.readdy.ai/ai/img_res/583ab540e292cc052999ec05bd04f4f9.jpg",
	},
	{
		name: "SBS 改性沥青防水卷材",
		desc: "高性能防水材料，适用于屋面、地下室等防水工程",
		image:
				"https://public.readdy.ai/ai/img_res/3bde06f6373ffb6dae597dff678a06e1.jpg",
	},
	{
		name: "岩棉保温板",
		desc: "优质保温隔热材料，防火性能卓越，适用于外墙保温系统",
		image:
				"https://public.readdy.ai/ai/img_res/4ac233c00009ba8b9cc57b8405f48acb.jpg",
	},
	{
		name: "碳纤维布",
		desc: "用于混凝土结构加固补强，强度高、重量轻",
		image:
				"https://public.readdy.ai/ai/img_res/879e1962344565ed2ca90ceb42d1a460.jpg",
	},
];
const projects = [
	{
		name: "上海国际金融中心",
		type: "工业地坪",
		desc: "为该项目地下停车场提供 15000 平方米环氧地坪解决方案，满足重载、防滑、美观等多重需求",
		location: "上海市浦东新区",
		image:
				"https://public.readdy.ai/ai/img_res/bb5b08fa68ff7e3fb062186b560e0b0c.jpg",
	},
	{
		name: "南京奥体中心",
		type: "防水工程",
		desc: "完成体育场馆屋面 8000 平方米 SBS 防水卷材施工，确保场馆防水性能达到国际标准",
		location: "江苏省南京市",
		image:
				"https://public.readdy.ai/ai/img_res/e53aee0721850f371511bc3d3161a254.jpg",
	},
	{
		name: "杭州湾数据中心",
		type: "保温工程",
		desc: "采用新型岩棉保温板系统，完成 12000 平方米外墙保温施工，有效提升建筑节能效果",
		location: "浙江省宁波市",
		image:
				"https://public.readdy.ai/ai/img_res/ad6acb0748ae2c3772855d5d2ed176d6.jpg",
	},
];
const newsItems = [
	{
		id: "1",
		title: "建材之家荣获2025年度建材行业创新企业奖",
		summary:
				'在近日举行的2025年度建材行业峰会上，建材之家凭借在环保建材领域的突出创新成果，荣获\'年度建材行业创新企业奖\'。这是对公司在可持续发展道路上持续努力的肯定。',
		date: "2025-03-08",
		views: "2,358",
		image:
				"https://public.readdy.ai/ai/img_res/d3cd44578f77a34f667116b3c5fc0513.jpg",
	},
	{
		id: "2",
		title: "新型环保地坪材料技术突破，助力碳中和",
		summary:
				"我司研发团队历时两年，成功开发出新一代环保型环氧地坪材料，VOC释放量较传统产品降低85%，同时保持优异的物理性能，获得国家发明专利。",
		date: "2025-03-05",
		views: "1,876",
		image:
				"https://public.readdy.ai/ai/img_res/b7f0fd25fe00a92ecbb1dce6165ea17d.jpg",
	},
	{
		id: "3",
		title: "建材之家完成杭州亚运场馆系列项目交付",
		summary:
				"历时8个月，建材之家圆满完成杭州亚运会主场馆及配套设施的防水、地坪等工程项目。项目采用多项创新技术，获得业主方高度评价。",
		date: "2025-03-01",
		views: "3,142",
		image:
				"https://public.readdy.ai/ai/img_res/61910e850340dffa728d50321be5632e.jpg",
	},
];
const advantages = [
	{
		icon: "fas fa-medal",
		title: "25 年专业经验",
		desc: "深耕建材行业 25 年，累积丰富的项目经验和技术知识",
	},
	{
		icon: "fas fa-certificate",
		title: "品质认证",
		desc: "ISO9001 质量管理体系认证，产品质量有保障",
	},
	{
		icon: "fas fa-users",
		title: "专业团队",
		desc: "拥有一支经验丰富的技术服务团队，提供专业的技术支持",
	},
	{
		icon: "fas fa-clock",
		title: "快速响应",
		desc: "24 小时响应客户需求，提供及时的解决方案",
	},
];
</script>

<style scoped>
.my-swiper {
	width: 100%;
	height: 100%;
}
</style>
