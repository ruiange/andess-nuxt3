<template>
  <div class="bg-white rounded-lg overflow-hidden shadow-sm group cursor-pointer">
    <div class="aspect-video overflow-hidden">
      <a
        :href="newsLink"
        :data-readdy="isReaddy"
      >
        <img
          :src="news.image"
          class="w-full h-full object-cover transition duration-300 group-hover:scale-110"
        />
      </a>
    </div>
    <div class="p-6">
      <div class="flex items-center gap-4 text-sm text-gray-500 mb-3">
        <span><i class="far fa-calendar-alt mr-2"></i>{{ news.date }}</span>
        <span><i class="far fa-eye mr-2"></i>{{ news.views }}</span>
      </div>
      <h4 class="font-bold text-lg mb-3 group-hover:text-blue-600">
        {{ news.title }}
      </h4>
      <p class="text-gray-600 text-sm mb-4 line-clamp-2">
        {{ news.summary }}
      </p>
      <a :href="readMoreLink" class="text-blue-600 text-sm flex items-center">
        阅读更多
        <i class="fas fa-arrow-right ml-2"></i>
      </a>
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
    default: "https://readdy.ai/home/c04c07c2-4169-470d-81e0-8f0a0ecbf8f5/df317973-cd20-4ac3-8c49-d88c36265e51"
  },
  readMoreLink: {
    type: String,
    default: "#"
  },
  isReaddy: {
    type: Boolean,
    default: true
  }
});
</script> 