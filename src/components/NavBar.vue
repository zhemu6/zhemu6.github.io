<script setup lang="ts">
import { ref } from 'vue'

const isMenuOpen = ref(false)
</script>

<template>
  <nav class="sticky top-0 z-50 backdrop-blur-xl bg-[#050914]/70 border-b border-white/5 supports-[backdrop-filter]:bg-[#050914]/50">
    <div class="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
      <!-- Logo -->
      <router-link to="/" class="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent hover:opacity-80 transition tracking-wide">
        SHIHAO LU
      </router-link>

      <!-- Desktop Menu -->
      <div class="hidden md:flex space-x-8 text-sm font-medium">
        <router-link to="/" class="text-gray-300 hover:text-white hover:scale-105 transition" active-class="text-blue-400 font-semibold">Home</router-link>
        <router-link to="/blog" class="text-gray-300 hover:text-white hover:scale-105 transition" active-class="text-blue-400 font-semibold">Blog</router-link>
        <a href="https://github.com/zhemu6" target="_blank" class="hover:text-white text-gray-400 transition flex items-center gap-1">
          <i class="fab fa-github text-lg"></i> GitHub
        </a>
      </div>

      <!-- Mobile Menu Button -->
      <button @click="isMenuOpen = !isMenuOpen" class="md:hidden text-gray-400 hover:text-white focus:outline-none">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </div>

    <!-- Mobile Menu -->
    <div v-if="isMenuOpen" class="md:hidden bg-[#050914] border-b border-white/10 absolute w-full backdrop-blur-xl bg-opacity-95">
      <div class="px-4 py-4 space-y-4">
        <router-link to="/" @click="isMenuOpen = false" class="block text-gray-300 hover:text-blue-400 transition">Home</router-link>
        <router-link to="/blog" @click="isMenuOpen = false" class="block text-gray-300 hover:text-blue-400 transition">Blog</router-link>
        <a href="https://github.com/zhemu6" target="_blank" class="block text-gray-300 hover:text-white transition">GitHub</a>
      </div>
    </div>
  </nav>
</template>
