<script setup lang="ts">
import { ref } from 'vue'

const isMenuOpen = ref(false)
</script>

<template>
  <nav class="sticky top-0 z-50 backdrop-blur-md bg-[#0D1117]/80 border-b border-gray-800">
    <div class="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
      <!-- Logo -->
      <router-link to="/" class="text-xl font-bold bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent hover:opacity-80 transition">
        Shihao Lu
      </router-link>

      <!-- Desktop Menu -->
      <div class="hidden md:flex space-x-8 text-sm font-medium">
        <router-link to="/" class="hover:text-blue-400 transition" active-class="text-blue-400">Home</router-link>
        <router-link to="/blog" class="hover:text-blue-400 transition" active-class="text-blue-400">Blog</router-link>
        <a href="https://github.com/zhemu6" target="_blank" class="hover:text-white text-gray-400 transition">
          <i class="fab fa-github text-lg"></i> GitHub
        </a>
      </div>

      <!-- Mobile Menu Button -->
      <button @click="isMenuOpen = !isMenuOpen" class="md:hidden text-gray-400 hover:text-white">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </div>

    <!-- Mobile Menu -->
    <div v-if="isMenuOpen" class="md:hidden bg-[#161b22] border-b border-gray-800">
      <div class="px-4 py-2 space-y-2">
        <router-link to="/" @click="isMenuOpen = false" class="block py-2 hover:text-blue-400 transition">Home</router-link>
        <router-link to="/blog" @click="isMenuOpen = false" class="block py-2 hover:text-blue-400 transition">Blog</router-link>
        <a href="https://github.com/zhemu6" target="_blank" class="block py-2 hover:text-white text-gray-400 transition">GitHub</a>
      </div>
    </div>
  </nav>
</template>
