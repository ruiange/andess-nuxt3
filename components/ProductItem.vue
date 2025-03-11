<template>
  <div class="group cursor-pointer">
    <div class="aspect-square rounded-lg overflow-hidden mb-4">
      <img
        :src="product.image"
        class="w-full h-full object-cover transition duration-300 group-hover:scale-110"
      />
    </div>
    <h4 class="font-bold mb-2">{{ product.name }}</h4>
    <p class="text-gray-600 text-sm mb-4">{{ product.desc }}</p>
    <NuxtLink
      :to="detailLink"
      :data-readdy="isReaddy"
      class="!rounded-button bg-gray-100 text-gray-600 px-4 h-8 text-sm cursor-pointer whitespace-nowrap group-hover:bg-blue-600 group-hover:text-white inline-flex items-center justify-center"
    >查看详情</NuxtLink>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  product: {
    type: Object,
    required: true
  },
  isReaddy: {
    type: Boolean,
    default: true
  }
});

const detailLink = computed(() => `/products/${props.product.id || '1'}`);
</script> 