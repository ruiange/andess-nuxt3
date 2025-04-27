<!-- The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work. -->

<template>
	<div class="min-h-[1024px]">
		<!-- 面包屑导航 -->
		<div class="bg-gray-50">
			<div class="max-w-[1440px] mx-auto px-8 py-6">
				<div class="flex items-center gap-2 text-gray-600">
					<a href="https://readdy.ai/home/c04c07c2-4169-470d-81e0-8f0a0ecbf8f5/0751a0c2-9caf-4f48-84e2-a655a2c27005" data-readdy="true" class="hover:text-blue-600">首页</a>
					<i class="fas fa-chevron-right text-xs"></i>
					<a href="https://readdy.ai/home/c04c07c2-4169-470d-81e0-8f0a0ecbf8f5/0751a0c2-9caf-4f48-84e2-a655a2c27005" data-readdy="true" class="hover:text-blue-600">解决方案</a>
					<i class="fas fa-chevron-right text-xs"></i>
					<span>某汽车制造厂工业地坪项目</span>
				</div>
			</div>
		</div>
		
		<!-- 项目概述 -->
		<div class="max-w-[1440px] mx-auto px-8 py-12">
			<div class="flex gap-12">
				<div class="flex-1">
					<h1 class="text-4xl font-bold mb-6">某汽车制造厂工业地坪项目</h1>
					<div class="flex gap-4 mb-6">
						<span class="px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm">面积：15,000 ㎡</span>
						<span class="px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm">工期：45 天</span>
						<span class="px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm">2024 年完工</span>
					</div>
					<p class="text-gray-600 leading-relaxed mb-8">本项目位于江苏省苏州市工业园区，是一家大型汽车制造企业的核心生产车间。针对客户对地坪高承重、防滑、耐磨等严格要求，我们采用环氧自流平工艺，打造出符合现代化工业生产需求的高品质地坪系统。</p>
					<div class="grid grid-cols-2 gap-6">
						<div v-for="(data, index) in projectData" :key="index" class="bg-gray-50 p-6 rounded-lg">
							<div class="text-3xl font-bold text-blue-600 mb-2">{{ data.value }}</div>
							<div class="text-gray-600">{{ data.label }}</div>
						</div>
					</div>
				</div>
				<div class="w-[600px]">
					<swiper
							:modules="swiperModules"
							:pagination="{ clickable: true }"
							:autoplay="{ delay: 3000 }"
							class="rounded-lg overflow-hidden h-[400px]"
					>
						<swiper-slide v-for="(image, index) in projectImages" :key="index">
							<img :src="image" class="w-full h-full object-cover" />
						</swiper-slide>
					</swiper>
				</div>
			</div>
		</div>
		
		<!-- 技术方案 -->
		<div class="bg-gray-50 py-16">
			<div class="max-w-[1440px] mx-auto px-8">
				<h2 class="text-3xl font-bold mb-12 text-center">技术方案</h2>
				<div class="grid grid-cols-3 gap-8">
					<div v-for="(solution, index) in technicalSolutions" :key="index" class="bg-white p-8 rounded-lg">
						<i :class="solution.icon" class="text-3xl text-blue-600 mb-4"></i>
						<h3 class="text-xl font-bold mb-4">{{ solution.title }}</h3>
						<p class="text-gray-600 text-sm leading-relaxed">{{ solution.desc }}</p>
					</div>
				</div>
			</div>
		</div>
		
		<!-- 施工过程 -->
		<div class="max-w-[1440px] mx-auto px-8 py-16">
			<h2 class="text-3xl font-bold mb-12 text-center">施工过程</h2>
			<div class="space-y-8">
				<div v-for="(process, index) in constructionProcess" :key="index" class="flex gap-8 items-center">
					<div class="w-[400px] h-[300px] rounded-lg overflow-hidden">
						<img :src="process.image" class="w-full h-full object-cover" />
					</div>
					<div class="flex-1">
						<div class="flex items-center gap-4 mb-4">
							<div class="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">{{ index + 1 }}</div>
							<h3 class="text-xl font-bold">{{ process.title }}</h3>
						</div>
						<p class="text-gray-600 leading-relaxed mb-4">{{ process.desc }}</p>
						<ul class="space-y-2">
							<li v-for="(point, pIndex) in process.points" :key="pIndex" class="flex items-start gap-2">
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
					<div v-for="(case_, index) in similarCases" :key="index" class="bg-white rounded-lg overflow-hidden group cursor-pointer">
						<div class="h-[240px] overflow-hidden">
							<img :src="case_.image" class="w-full h-full object-cover transition duration-300 group-hover:scale-110" />
						</div>
						<div class="p-6">
							<h3 class="text-xl font-bold mb-2">{{ case_.title }}</h3>
							<p class="text-gray-600 text-sm mb-4">{{ case_.desc }}</p>
							<div class="flex justify-between items-center">
								<span class="text-sm text-gray-500">{{ case_.area }}</span>
								<NuxtLink 
									:to="`/solutions/${case_.id}`" 
									class="!rounded-button bg-gray-100 text-gray-600 px-4 py-2 text-sm group-hover:bg-blue-600 group-hover:text-white"
								>
									查看方案详情
								</NuxtLink>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		
		<!-- 咨询按钮 -->
		<div class="fixed right-8 bottom-8 flex flex-col gap-4">
			<button @click="showConsultModal = true" class="!rounded-button bg-blue-600 text-white w-12 h-12 flex items-center justify-center shadow-lg">
				<i class="fas fa-comments text-xl"></i>
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
					<input v-model="consultForm.name" type="text" placeholder="您的称呼" class="w-full h-12 px-4 rounded-lg bg-gray-100 border-none">
					<input v-model="consultForm.phone" type="text" placeholder="联系电话" class="w-full h-12 px-4 rounded-lg bg-gray-100 border-none">
					<textarea v-model="consultForm.message" placeholder="咨询内容" rows="4" class="w-full p-4 rounded-lg bg-gray-100 border-none"></textarea>
				</div>
				<button @click="submitConsult" class="!rounded-button bg-blue-600 text-white w-full h-12">提交咨询</button>
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
import {ref} from 'vue';
import {Swiper, SwiperSlide} from 'swiper/vue';
import {Autoplay, Pagination} from 'swiper/modules';

interface SimilarCase {
	id: string;
	title: string;
	desc: string;
	area: string;
	image: string;
}

const swiperModules = [Pagination, Autoplay];
const showConsultModal = ref(false);

const consultForm = ref({
	name: '',
	phone: '',
	message: ''
});

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

const technicalSolutions = [
	{
		icon: 'fas fa-layer-group',
		title: '多层复合结构',
		desc: '采用环氧树脂底漆、中涂、面漆三层结构，确保地坪具有优异的机械性能和耐久性。'
	},
	{
		icon: 'fas fa-shield-alt',
		title: '高强度配方',
		desc: '特殊改性环氧树脂配方，抗压强度≥60MPa，满足重载车间使用要求。'
	},
	{
		icon: 'fas fa-tint',
		title: '防滑处理',
		desc: '表面采用特殊防滑处理工艺，确保湿滑条件下的安全性。'
	}
];

const constructionProcess = [
	{
		title: '基层处理',
		desc: '采用进口打磨设备对混凝土基层进行全面处理，确保基层平整度和粘结强度。',
		points: ['表面打磨除尘', '裂缝修补加固', '基层强度检测'],
		image: 'https://public.readdy.ai/ai/img_res/a214e270fdc14c487147e5eb326bdeaa.jpg'
	},
	{
		title: '底漆施工',
		desc: '使用高渗透性环氧底漆，确保与基层牢固结合。',
		points: ['底漆均匀涂布', '封闭基层孔隙', '提高附着力'],
		image: 'https://public.readdy.ai/ai/img_res/7dbaa8f027788fe5859a790b9c8efb53.jpg'
	},
	{
		title: '面层施工',
		desc: '采用自流平工艺施工面层，确保表面平整光滑。',
		points: ['自流平找平', '气泡处理', '固化养护'],
		image: 'https://public.readdy.ai/ai/img_res/c24bb852d99ad3fc1432b1d599f14043.jpg'
	}
];

const similarCases: SimilarCase[] = [
	{
		id: 'logistics-warehouse',
		title: '某物流仓储中心',
		desc: '采用环氧砂浆地坪，满足重载叉车频繁作业需求',
		area: '20,000㎡',
		image: 'https://public.readdy.ai/ai/img_res/f7bdd8c07adfa4acae381b38badfff46.jpg'
	},
	{
		id: 'food-processing',
		title: '某食品加工车间',
		desc: '采用食品级环氧地坪，满足卫生防腐要求',
		area: '12,000㎡',
		image: 'https://public.readdy.ai/ai/img_res/79b2493085f78796a7727d0db5f2cecd.jpg'
	},
	{
		id: 'electronics-cleanroom',
		title: '某电子厂净化车间',
		desc: '采用防静电环氧地坪，满足电子产品生产需求',
		area: '8,000㎡',
		image: 'https://public.readdy.ai/ai/img_res/8acf26e0e531add1a0b8bab8e68e68c2.jpg'
	}
];

const submitConsult = () => {
	showConsultModal.value = false;
	consultForm.value = {
		name: '',
		phone: '',
		message: ''
	};
};
</script>

<style scoped>
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
	-webkit-appearance: none;
	margin: 0;
}
</style>

