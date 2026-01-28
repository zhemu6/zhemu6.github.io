<script setup lang="ts">
interface TimelineItem {
  year: string;
  title: string;
  company: string;
  description: string;
  tags: string[];
}

defineProps<{
  items: TimelineItem[]
}>()
</script>

<template>
  <div class="relative border-l-2 border-gray-800 ml-4 md:ml-6 space-y-12">
    <div v-for="(item, index) in items" :key="index" class="relative pl-8 md:pl-12">
      <!-- Dot -->
      <div class="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-blue-500 border-4 border-[#0D1117] shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
      
      <!-- Content -->
      <div class="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2">
        <h3 class="text-xl font-bold text-white">{{ item.title }}</h3>
        <span class="text-sm font-mono text-blue-400 bg-blue-400/10 px-2 py-1 rounded mt-1 sm:mt-0">{{ item.year }}</span>
      </div>
      
      <div class="text-lg text-gray-400 mb-2">{{ item.company }}</div>
      
      <p class="text-gray-500 leading-relaxed mb-4">{{ item.description }}</p>
      
      <div class="flex flex-wrap gap-2">
        <span v-for="tag in item.tags" :key="tag" class="text-xs px-2 py-1 bg-gray-800 text-gray-300 rounded border border-gray-700">
          {{ tag }}
        </span>
      </div>
    </div>
  </div>
</template>
