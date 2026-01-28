<script setup lang="ts">
import Timeline from '../components/Timeline.vue'

const experience = [
  {
    year: "2024 - Present",
    title: "AI Deployment Engineer",
    company: "Tech Innovation Lab",
    description: "Focusing on migrating Deep Learning models to Ascend NPU platforms and optimizing inference performance.",
    tags: ["Ascend", "C++", "Python", "Model Optimization"]
  },
  {
    year: "2023 - 2024",
    title: "Computer Vision Researcher",
    company: "University Research Group",
    description: "Developed intelligent livestock weight estimation system using multi-view stereo vision.",
    tags: ["PyTorch", "OpenCV", "3D Reconstruction"]
  },
  {
    year: "2022 - 2023",
    title: "Full Stack Developer",
    company: "Freelance",
    description: "Built scalable web applications using Vue 3 and Spring Boot for various clients.",
    tags: ["Vue 3", "Spring Boot", "MySQL"]
  }
]

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
  <div class="min-h-screen">
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
        <router-link to="/blog" class="px-6 py-3 bg-[#30363d] hover:bg-[#3b434b] border border-gray-700 rounded-md font-semibold transition">
          Read Blog
        </router-link>
      </div>
    </section>

    <!-- Experience Timeline -->
    <section class="max-w-4xl mx-auto px-4 py-20 border-t border-gray-800">
      <h2 class="text-3xl font-bold mb-12 text-center">Experience</h2>
      <Timeline :items="experience" />
    </section>

    <!-- Skills -->
    <section id="skills" class="bg-[#161b22] py-20 border-y border-gray-800">
      <div class="max-w-6xl mx-auto px-4">
        <h2 class="text-3xl font-bold mb-12 text-center">Technical Expertise</h2>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="(items, category) in skills" :key="category" class="bg-[#0D1117] p-6 rounded-xl border border-gray-800 hover:border-blue-500/50 transition duration-300">
            <h3 class="text-xl font-semibold capitalize mb-4 text-blue-300 border-b border-gray-700 pb-2">{{ category }}</h3>
            <div class="flex flex-wrap gap-2">
              <span v-for="skill in items" :key="skill" class="px-3 py-1 bg-[#30363d] text-sm rounded-full text-blue-100 border border-gray-700 hover:bg-[#1f6feb] hover:border-transparent transition cursor-default">
                {{ skill }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Projects -->
    <section id="projects" class="max-w-6xl mx-auto px-4 py-20">
      <h2 class="text-3xl font-bold mb-12 text-center">Featured Projects</h2>
      <div class="grid md:grid-cols-3 gap-6">
        <div v-for="project in projects" :key="project.name" class="bg-[#161b22] p-6 rounded-xl border border-gray-800 hover:border-blue-500/50 hover:transform hover:-translate-y-1 transition duration-300 flex flex-col">
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
    </section>
  </div>
</template>
