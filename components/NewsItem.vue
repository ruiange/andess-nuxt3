<template>
  <div class="bg-white rounded-lg overflow-hidden shadow-sm group cursor-pointer">
    <div class="aspect-video overflow-hidden">
      <NuxtLink
        :to="newsLink"
        :data-readdy="isReaddy"
      >
        <img
          :src="news.image"
          class="w-full h-full object-cover transition duration-300 group-hover:scale-110"
        />
      </NuxtLink>
    </div>
    <div class="p-6">
      <div class="flex items-center gap-4 text-sm text-gray-500 mb-3">
        <span><i class="far fa-calendar-alt mr-2"></i>{{ news.date }}</span>
        <span><i class="far fa-eye mr-2"></i>{{ news.views }}</span>
      </div>
      <h4 class="font-bold text-lg mb-3 group-hover:text-blue-600">
        <NuxtLink :to="newsLink">{{ news.title }}</NuxtLink>
      </h4>
      <p class="text-gray-600 text-sm mb-4 line-clamp-2">
        {{ news.summary }}
      </p>
      <NuxtLink :to="readMoreLink" class="text-blue-600 text-sm flex items-center">
        阅读更多
        <i class="fas fa-arrow-right ml-2"></i>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
defineProps({
  news: {
    type: Object,
    required: true
  },
  newsLink: {
    type: String,
    default: "/news/1"
  },
  readMoreLink: {
    type: String,
    default: "/news/1"
  },
  isReaddy: {
    type: Boolean,
    default: true
  }
});
</script> 