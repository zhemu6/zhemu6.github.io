<script setup lang="ts">
import Timeline from '../components/Timeline.vue'
import ProjectCard from '../components/ProjectCard.vue'

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
    <section class="max-w-4xl mx-auto px-4 py-24 md:py-40 text-center animate-fade-in-up">
      <div class="mb-10 relative inline-block group">
        <div class="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full group-hover:bg-purple-500/30 transition duration-700"></div>
        <img 
          src="https://avatars.githubusercontent.com/u/zhemu6" 
          alt="Shihao Lu" 
          class="relative w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-[#30363d] shadow-2xl mx-auto transform group-hover:scale-105 transition duration-500"
        />
      </div>
      
      <h1 class="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight bg-gradient-to-r from-blue-400 via-purple-400 to-green-400 bg-clip-text text-transparent animate-glow">
        Shihao Lu
      </h1>
      
      <div class="h-8 md:h-12 mb-8 flex justify-center opacity-90 delay-100 animate-fade-in-up">
        <img src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&pause=1000&color=36BCF7&center=true&vCenter=true&width=600&lines=Computer+Vision+Engineer;AI+Model+Optimization;Full-Stack+Developer" alt="Typing SVG" />
      </div>

      <p class="text-xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed delay-200 animate-fade-in-up">
        Merging AI intelligence with engineering precision. Building the future of computer vision on Ascend NPU.
      </p>

      <div class="flex justify-center gap-6 delay-300 animate-fade-in-up">
        <a href="#projects" class="px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white rounded-lg font-semibold transition shadow-lg shadow-blue-500/25 transform hover:-translate-y-1">
          View Projects
        </a>
        <router-link to="/blog" class="px-8 py-3 glass hover:bg-white/10 border border-gray-700 rounded-lg font-semibold transition transform hover:-translate-y-1">
          Read Blog
        </router-link>
      </div>
    </section>

    <!-- Experience Timeline -->
    <section class="max-w-4xl mx-auto px-4 py-24 border-t border-white/5">
      <h2 class="text-3xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">Professional Journey</h2>
      <Timeline :items="experience" />
    </section>

    <!-- Skills -->
    <section id="skills" class="py-24 border-y border-white/5 bg-black/20 backdrop-blur-sm">
      <div class="max-w-6xl mx-auto px-4">
        <h2 class="text-3xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">Tech Arsenal</h2>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="(items, category) in skills" :key="category" class="glass-card p-6 rounded-xl">
            <h3 class="text-xl font-semibold capitalize mb-4 text-blue-400 border-b border-white/10 pb-2">{{ category }}</h3>
            <div class="flex flex-wrap gap-2">
              <span v-for="skill in items" :key="skill" class="px-3 py-1 bg-white/5 text-sm rounded-full text-gray-300 border border-white/10 hover:border-blue-400/50 hover:text-blue-300 transition cursor-default">
                {{ skill }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Projects -->
    <section id="projects" class="max-w-6xl mx-auto px-4 py-24">
      <h2 class="text-3xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">Featured Work</h2>
      <div class="grid md:grid-cols-3 gap-8">
        <div v-for="project in projects" :key="project.name" class="h-full">
          <ProjectCard v-bind="project" />
        </div>
      </div>
    </section>
  </div>
</template>
