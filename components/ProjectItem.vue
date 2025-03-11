<template>
  <div class="group cursor-pointer">
    <div class="aspect-video rounded-lg overflow-hidden mb-4">
      <img
        :src="project.image"
        class="w-full h-full object-cover transition duration-300 group-hover:scale-110"
      />
    </div>
    <div class="bg-white p-6 rounded-lg shadow-sm">
      <div class="flex justify-between items-center mb-3">
        <h4 class="font-bold text-lg">{{ project.name }}</h4>
        <span class="text-blue-600 text-sm">{{ project.type }}</span>
      </div>
      <p class="text-gray-600 text-sm mb-4">{{ project.desc }}</p>
      <div class="flex justify-between items-center">
        <span class="text-gray-500 text-sm">{{ project.location }}</span>
        <a
          :href="detailLink"
          :data-readdy="isReaddy"
          class="!rounded-button bg-gray-100 text-gray-600 px-4 h-8 text-sm cursor-pointer whitespace-nowrap group-hover:bg-blue-600 group-hover:text-white inline-flex items-center justify-center"
        >查看详情</a>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  project: {
    type: Object,
    required: true
  },
  detailLink: {
    type: String,
    default: "https://readdy.ai/home/c04c07c2-4169-470d-81e0-8f0a0ecbf8f5/45be900f-1ebb-4fa3-a5ad-5077417e2431"
  },
  isReaddy: {
    type: Boolean,
    default: true
  }
});
</script> 