<template>
  <div class="min-h-[1024px]">
    <!-- 页面标题 -->
    <div class="bg-gray-50 py-16">
      <div class="max-w-[1440px] mx-auto px-8">
        <h1 class="text-4xl font-bold text-center">产品中心</h1>
        <p class="text-gray-600 text-center mt-4">提供高品质建材产品，满足各类工程需求</p>
      </div>
    </div>
    
    <!-- 产品分类 -->
    <div class="max-w-[1440px] mx-auto px-8 py-16">
      <div class="flex gap-4 mb-12 justify-center">
        <button
          v-for="cat in categories"
          :key="cat"
          @click="currentCategory = cat"
          class="!rounded-button px-6 h-10 cursor-pointer whitespace-nowrap"
          :class="currentCategory === cat ? 'bg-[var(--td-brand-color)] text-white' : 'bg-gray-100 text-gray-600'"
        >
          {{ cat }}
        </button>
      </div>
      
      <!-- 产品列表 -->
      <div class="grid grid-cols-4 gap-8">
        <ProductItem 
          v-for="product in filteredProducts" 
          :key="product.id" 
          :product="product"
          :isReaddy="true"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
// 指定使用默认布局
definePageMeta({
  layout: 'default'
});

import {computed, ref} from "vue";
import ProductItem from '~/components/ProductItem.vue';

const currentCategory = ref("地坪材料");
const categories = ["全部", "地坪材料", "防水材料", "保温材料", "装饰材料", "结构加固"];

const allProducts = [
  {
    id: "1",
    name: "环氧自流平地坪",
    desc: "适用于工业厂房、仓库等场所，具有优异的耐磨性和防腐性",
    image: "https://public.readdy.ai/ai/img_res/583ab540e292cc052999ec05bd04f4f9.jpg",
    category: "地坪材料"
  },
  {
    id: "2",
    name: "金刚砂耐磨地坪",
    desc: "适用于高强度耐磨场所，如物流中心、车间等，具有超强耐磨性",
    image: "https://public.readdy.ai/ai/img_res/583ab540e292cc052999ec05bd04f4f9.jpg",
    category: "地坪材料"
  },
  {
    id: "3",
    name: "SBS 改性沥青防水卷材",
    desc: "高性能防水材料，适用于屋面、地下室等防水工程",
    image: "https://public.readdy.ai/ai/img_res/3bde06f6373ffb6dae597dff678a06e1.jpg",
    category: "防水材料"
  },
  {
    id: "4",
    name: "聚氨酯防水涂料",
    desc: "优质弹性防水涂料，适用于屋面、卫生间等防水工程",
    image: "https://public.readdy.ai/ai/img_res/3bde06f6373ffb6dae597dff678a06e1.jpg",
    category: "防水材料"
  },
  {
    id: "5",
    name: "岩棉保温板",
    desc: "优质保温隔热材料，防火性能卓越，适用于外墙保温系统",
    image: "https://public.readdy.ai/ai/img_res/4ac233c00009ba8b9cc57b8405f48acb.jpg",
    category: "保温材料"
  },
  {
    id: "6",
    name: "挤塑聚苯板",
    desc: "高性能保温材料，导热系数低，适用于外墙、屋面保温",
    image: "https://public.readdy.ai/ai/img_res/4ac233c00009ba8b9cc57b8405f48acb.jpg",
    category: "保温材料"
  },
  {
    id: "7",
    name: "碳纤维布",
    desc: "用于混凝土结构加固补强，强度高、重量轻",
    image: "https://public.readdy.ai/ai/img_res/879e1962344565ed2ca90ceb42d1a460.jpg",
    category: "结构加固"
  },
  {
    id: "8",
    name: "植筋胶",
    desc: "用于钢筋与混凝土的连接，粘结强度高，适用于结构加固工程",
    image: "https://public.readdy.ai/ai/img_res/879e1962344565ed2ca90ceb42d1a460.jpg",
    category: "结构加固"
  }
];

const filteredProducts = computed(() => {
  if (currentCategory.value === "全部") {
    return allProducts;
  }
  return allProducts.filter(product => product.category === currentCategory.value);
});
</script>

<style scoped>
/* 页面特定样式可以在这里添加 */
</style> 