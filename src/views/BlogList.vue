<script setup lang="ts">
const posts = [
  {
    id: 'computer-vision-intro',
    title: "Introduction to Computer Vision with PyTorch",
    date: "2024-03-15",
    summary: "A beginner's guide to building your first CNN model using PyTorch for image classification.",
    tags: ["CV", "PyTorch", "AI"]
  },
  {
    id: 'vue3-composition-api',
    title: "Why I Love Vue 3 Composition API",
    date: "2024-02-28",
    summary: "Exploring the benefits of the Composition API over the Options API for scalable frontend development.",
    tags: ["Vue 3", "Frontend"]
  }
]
</script>

<template>
  <div class="max-w-4xl mx-auto px-4 py-20 min-h-screen">
    <h1 class="text-4xl font-bold mb-12 text-center">Blog</h1>
    
    <div class="grid gap-8">
      <router-link 
        v-for="post in posts" 
        :key="post.id" 
        :to="{ name: 'BlogPost', params: { id: post.id } }"
        class="group block bg-[#161b22] border border-gray-800 rounded-xl p-8 hover:border-blue-500/50 transition duration-300"
      >
        <div class="flex flex-col md:flex-row md:items-baseline md:justify-between mb-4">
          <h2 class="text-2xl font-bold group-hover:text-blue-400 transition">{{ post.title }}</h2>
          <span class="text-gray-500 text-sm font-mono mt-2 md:mt-0">{{ post.date }}</span>
        </div>
        
        <p class="text-gray-400 mb-6 leading-relaxed">{{ post.summary }}</p>
        
        <div class="flex flex-wrap gap-2">
          <span v-for="tag in post.tags" :key="tag" class="text-xs px-2 py-1 bg-gray-800 text-gray-300 rounded border border-gray-700">
            {{ tag }}
          </span>
        </div>
      </router-link>
    </div>
  </div>
</template>
