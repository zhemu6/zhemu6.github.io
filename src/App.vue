<script setup lang="ts">


const projects = [
  {
    name: "Intelligent Livestock Weight Estimation",
    description: "Computer Vision system for automated weight estimation of livestock.",
    tags: ["CV", "PyTorch", "Vue3"],
    link: "#"
  },
  {
    name: "ai-code",
    description: "Featured open source project.",
    tags: ["AI", "Open Source"],
    link: "https://github.com/zhemu6/ai-code"
  },
  {
    name: "Sky",
    description: "Featured open source project.",
    tags: ["Open Source"],
    link: "https://github.com/zhemu6/Sky"
  }
]

const skills = {
  languages: ["Python", "Java", "JavaScript", "TypeScript"],
  ai: ["PyTorch", "TensorFlow", "OpenCV", "CUDA"],
  frontend: ["Vue.js", "React", "HTML5", "CSS3"],
  backend: ["Spring Boot", "Node.js", "FastAPI"],
  db: ["MySQL", "Redis", "MongoDB"],
  tools: ["Docker", "Git", "Linux", "VS Code"]
}
</script>

<template>
  <div class="min-h-screen bg-[#0D1117] text-[#c9d1d9] font-sans selection:bg-blue-500/30">
    <!-- Navbar -->
    <nav class="sticky top-0 z-50 backdrop-blur-md bg-[#0D1117]/80 border-b border-gray-800">
      <div class="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <a href="#" class="text-xl font-bold bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent hover:opacity-80 transition">
          Shihao Lu
        </a>
        <div class="space-x-6 text-sm font-medium">
          <a href="#about" class="hover:text-blue-400 transition">About</a>
          <a href="#skills" class="hover:text-blue-400 transition">Skills</a>
          <a href="#projects" class="hover:text-blue-400 transition">Projects</a>
          <a href="https://github.com/zhemu6" target="_blank" class="hover:text-white text-gray-400 transition">GitHub</a>
        </div>
      </div>
    </nav>

    <!-- Hero Section -->
    <section class="max-w-4xl mx-auto px-4 py-20 md:py-32 text-center">
      <div class="mb-8 relative inline-block">
        <div class="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full"></div>
        <img 
          src="https://avatars.githubusercontent.com/u/zhemu6" 
          alt="Shihao Lu" 
          class="relative w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-[#30363d] shadow-2xl mx-auto"
        />
      </div>
      
      <h1 class="text-4xl md:text-6xl font-bold mb-4 tracking-tight">
        Hi, I'm <span class="text-blue-400">Shihao Lu</span>
      </h1>
      
      <div class="h-8 md:h-12 mb-8 flex justify-center">
        <img src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&pause=1000&color=36BCF7&center=true&vCenter=true&width=500&lines=Focus+on+Computer+Vision;Full-Stack+Developer;AI+Deployment+Expert" alt="Typing SVG" />
      </div>

      <p class="text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
        Passionate about using AI to solve real-world problems. Currently working on intelligent livestock systems and learning Spring AI.
      </p>

      <div class="flex justify-center gap-4">
        <a href="#projects" class="px-6 py-3 bg-[#238636] hover:bg-[#2ea043] text-white rounded-md font-semibold transition shadow-lg shadow-green-900/20">
          View Projects
        </a>
        <a href="mailto:1137800445@qq.com" class="px-6 py-3 bg-[#30363d] hover:bg-[#3b434b] border border-gray-700 rounded-md font-semibold transition">
          Contact Me
        </a>
      </div>
    </section>

    <!-- About / Stats -->
    <section id="about" class="bg-[#161b22] py-16 border-y border-gray-800">
      <div class="max-w-6xl mx-auto px-4">
        <h2 class="text-3xl font-bold mb-12 text-center flex items-center justify-center gap-2">
          <span class="text-blue-400">⚡</span> GitHub Stats
        </h2>
        
        <div class="grid md:grid-cols-2 gap-8 items-center justify-items-center">
          <img src="https://github-readme-stats.vercel.app/api?username=zhemu6&count_private=true&show_icons=true&theme=blueberry&hide_border=true&bg_color=0D1117" alt="GitHub Stats" class="w-full max-w-md shadow-lg rounded-xl" />
          <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=zhemu6&layout=compact&langs_count=8&theme=blueberry&hide_border=true&bg_color=0D1117" alt="Top Languages" class="w-full max-w-md shadow-lg rounded-xl" />
        </div>
      </div>
    </section>

    <!-- Skills -->
    <section id="skills" class="max-w-6xl mx-auto px-4 py-20">
      <h2 class="text-3xl font-bold mb-12 text-center">Technical Expertise</h2>
      
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="(items, category) in skills" :key="category" class="bg-[#161b22] p-6 rounded-xl border border-gray-800 hover:border-blue-500/50 transition duration-300">
          <h3 class="text-xl font-semibold capitalize mb-4 text-blue-300 border-b border-gray-700 pb-2">{{ category }}</h3>
          <div class="flex flex-wrap gap-2">
            <span v-for="skill in items" :key="skill" class="px-3 py-1 bg-[#30363d] text-sm rounded-full text-blue-100 border border-gray-700 hover:bg-[#1f6feb] hover:border-transparent transition cursor-default">
              {{ skill }}
            </span>
          </div>
        </div>
      </div>
    </section>

    <!-- Projects -->
    <section id="projects" class="bg-[#161b22] py-20 border-t border-gray-800">
      <div class="max-w-6xl mx-auto px-4">
        <h2 class="text-3xl font-bold mb-12 text-center">Featured Projects</h2>
        
        <div class="grid md:grid-cols-3 gap-6">
          <div v-for="project in projects" :key="project.name" class="bg-[#0D1117] p-6 rounded-xl border border-gray-800 hover:border-blue-500/50 hover:transform hover:-translate-y-1 transition duration-300 flex flex-col">
            <h3 class="text-xl font-bold mb-2">{{ project.name }}</h3>
            <p class="text-gray-400 text-sm mb-4 flex-grow">{{ project.description }}</p>
            <div class="flex flex-wrap gap-2 mb-4">
              <span v-for="tag in project.tags" :key="tag" class="text-xs px-2 py-1 bg-[#1f6feb]/10 text-[#1f6feb] rounded border border-[#1f6feb]/20">
                {{ tag }}
              </span>
            </div>
            <a :href="project.link" target="_blank" class="text-blue-400 text-sm hover:underline inline-flex items-center gap-1">
              View Project →
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="py-12 text-center text-gray-500 border-t border-gray-800">
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
html {
  scroll-behavior: smooth;
}
</style>
