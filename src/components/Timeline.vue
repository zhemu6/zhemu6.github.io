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
  <div class="relative ml-4 md:ml-6 space-y-12">
    <!-- Glowing Line -->
    <div class="absolute left-0 top-2 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-transparent shadow-[0_0_8px_rgba(59,130,246,0.6)]"></div>

    <div v-for="(item, index) in items" :key="index" class="relative pl-8 md:pl-12 group">
      <!-- Pulsing Dot -->
      <div class="absolute -left-[7px] top-1.5 h-4 w-4 rounded-full bg-[#050914] border-2 border-blue-500 group-hover:border-purple-400 group-hover:scale-125 transition duration-300 z-10">
        <div class="absolute inset-0 rounded-full bg-blue-400 opacity-20 animate-ping"></div>
      </div>
      
      <!-- Content -->
      <div class="glass-card p-6 rounded-xl hover:translate-x-2 transition duration-300">
        <div class="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2">
          <h3 class="text-xl font-bold text-white group-hover:text-blue-300 transition">{{ item.title }}</h3>
          <span class="text-sm font-mono text-blue-400 bg-blue-500/10 px-2 py-1 rounded border border-blue-500/20 mt-1 sm:mt-0">{{ item.year }}</span>
        </div>
        
        <div class="text-lg text-gray-400 mb-3 flex items-center gap-2">
          <i class="fas fa-building text-xs"></i> {{ item.company }}
        </div>
        
        <p class="text-gray-400 leading-relaxed mb-4 text-sm">{{ item.description }}</p>
        
        <div class="flex flex-wrap gap-2">
          <span v-for="tag in item.tags" :key="tag" class="text-xs px-2 py-1 bg-white/5 text-gray-300 rounded border border-white/10">
            {{ tag }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
