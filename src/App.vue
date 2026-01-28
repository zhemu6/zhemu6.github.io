<script setup lang="ts">
import NavBar from './components/NavBar.vue'
</script>

<template>
  <div class="min-h-screen bg-[#0D1117] text-[#c9d1d9] font-sans selection:bg-blue-500/30">
    <NavBar />
    <router-view />
    
    <!-- Footer -->
    <footer class="glass relative mt-20">
      <!-- Gradient Top Border -->
      <div class="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>

      <div class="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <!-- Left: Branding -->
        <div class="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 font-sans">
          Shihao Lu
        </div>

        <!-- Center: Social Links -->
        <div class="flex gap-8">
          <a href="https://github.com/zhemu6" class="group transition-colors duration-300" title="GitHub">
            <i class="fab fa-github text-2xl text-gray-400 transition-all duration-300 group-hover:text-white group-hover:scale-110 group-hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.6)]"></i>
          </a>
          <a href="mailto:1137800445@qq.com" class="group transition-colors duration-300" title="Email">
            <i class="fas fa-envelope text-2xl text-gray-400 transition-all duration-300 group-hover:text-white group-hover:scale-110 group-hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.6)]"></i>
          </a>
        </div>

        <!-- Right: Copyright -->
        <div class="text-gray-500 text-sm font-light">
          &copy; 2026 Shihao Lu. All rights reserved.
        </div>
      </div>
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
