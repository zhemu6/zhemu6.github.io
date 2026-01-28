<script setup lang="ts">


interface Props {
  name: string
  description: string
  tags: string[]
  link?: string
}

defineProps<Props>()
</script>

<template>
  <div class="glass-card group relative overflow-hidden rounded-xl p-6 h-full flex flex-col">
    <!-- Glow Effect -->
    <div class="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 opacity-0 group-hover:opacity-20 transition duration-500 blur-lg"></div>
    
    <div class="relative flex-grow">
      <div class="flex justify-between items-start mb-4">
        <h3 class="text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
          {{ name }}
        </h3>
        <a v-if="link" :href="link" target="_blank" class="text-gray-400 hover:text-white transition-colors">
          <i class="fas fa-external-link-alt"></i>
        </a>
      </div>
      
      <p class="text-gray-400 text-sm mb-6 leading-relaxed">
        {{ description }}
      </p>
    </div>

    <div class="relative flex flex-wrap gap-2 mt-auto">
      <span 
        v-for="tag in tags" 
        :key="tag" 
        class="text-xs px-2 py-1 bg-blue-500/10 text-blue-300 border border-blue-500/20 rounded-md font-mono"
      >
        {{ tag }}
      </span>
    </div>
  </div>
</template>
