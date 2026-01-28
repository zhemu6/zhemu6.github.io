<script setup lang="ts">
import NavBar from './components/NavBar.vue'
</script>

<template>
  <div class="min-h-screen bg-[#0D1117] text-[#c9d1d9] font-sans selection:bg-blue-500/30">
    <NavBar />
    <router-view />
    
    <!-- Footer -->
    <footer class="py-12 text-center text-gray-500 border-t border-gray-800 bg-[#0D1117]">
      <p class="mb-4">Built with Vue 3, TypeScript & Tailwind CSS</p>
      <div class="flex justify-center gap-6 text-2xl">
        <a href="https://github.com/zhemu6" class="hover:text-white transition" title="GitHub">
          <i class="fab fa-github"></i>
        </a>
        <a href="mailto:1137800445@qq.com" class="hover:text-white transition" title="Email">
          <i class="fas fa-envelope"></i>
        </a>
      </div>
      <p class="mt-8 text-xs text-gray-600">© 2026 Shihao Lu. All rights reserved.</p>
    </footer>
  </div>
</template>

<style>
/* Font Awesome (load from CDN for simplicity) */
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css');

html {
  scroll-behavior: smooth;
}
</style>
