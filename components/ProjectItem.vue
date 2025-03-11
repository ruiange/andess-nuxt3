<template>
  <NuxtLink :to="to" class="block group">
    <div class="cursor-pointer">
      <div class="aspect-video rounded-lg overflow-hidden mb-4">
        <img
          :src="project.image"
          class="w-full h-full object-cover transition duration-300 group-hover:scale-110"
        />
      </div>
      <div class="bg-white p-6 rounded-lg shadow-sm">
        <div class="flex justify-between items-center mb-3">
          <h4 class="font-bold text-lg">{{ project.title || project.name }}</h4>
          <span class="text-blue-600 text-sm flex items-center gap-1">
            <i class="ri-building-line"></i>
            {{ project.type }}
          </span>
        </div>
        <p class="text-gray-600 text-sm mb-4">{{ project.desc }}</p>
        <div class="flex justify-between items-center">
          <span class="text-gray-500 text-sm flex items-center gap-1">
            <i class="ri-map-pin-line"></i>
            {{ project.area || project.location }}
          </span>
          <span class="!rounded-button bg-gray-100 text-gray-600 px-4 h-8 text-sm cursor-pointer whitespace-nowrap group-hover:bg-blue-600 group-hover:text-white inline-flex items-center justify-center gap-1">
            查看详情
            <i class="ri-arrow-right-line"></i>
          </span>
        </div>
      </div>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
interface Project {
  id?: string | number;
  name?: string;
  title?: string;
  type?: string;
  desc: string;
  location?: string;
  area?: string;
  image: string;
}

interface Props {
  project: Project;
  to: string;
}

defineProps<Props>();
</script> 