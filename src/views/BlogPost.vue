<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import { useRoute } from 'vue-router'
import MarkdownIt from 'markdown-it'

// Light-weight highlight.js setup
import hljs from 'highlight.js/lib/core'
import javascript from 'highlight.js/lib/languages/javascript'
import typescript from 'highlight.js/lib/languages/typescript'
import python from 'highlight.js/lib/languages/python'
import css from 'highlight.js/lib/languages/css'
import xml from 'highlight.js/lib/languages/xml'
import bash from 'highlight.js/lib/languages/bash'
import cpp from 'highlight.js/lib/languages/cpp'
import java from 'highlight.js/lib/languages/java'

// Register only needed languages
hljs.registerLanguage('javascript', javascript)
hljs.registerLanguage('typescript', typescript)
hljs.registerLanguage('python', python)
hljs.registerLanguage('css', css)
hljs.registerLanguage('xml', xml)
hljs.registerLanguage('html', xml)
hljs.registerLanguage('bash', bash)
hljs.registerLanguage('cpp', cpp)
hljs.registerLanguage('java', java)

import 'highlight.js/styles/atom-one-dark.css'

const route = useRoute()
const content = ref('')
const loading = ref(true)
const error = ref(false)

const md = new MarkdownIt({
  html: true,
  linkify: true,
  typographer: true,
  highlight: function (str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return hljs.highlight(str, { language: lang }).value
      } catch (__) {}
    }
    return '' // use external default escaping
  }
})

// Simulating fetching markdown content. 
// In a real setup, this would dynamic import from src/content/posts/
const fetchPost = async (id: string) => {
  loading.value = true
  error.value = false
  
  try {
    // This is a dynamic import trick for Vite to bundle these md files
    // Note: We need to use raw? explicitly if we want the raw string
    const modules = import.meta.glob('../content/posts/*.md', { query: '?raw', import: 'default' })
    const path = `../content/posts/${id}.md`
    
    if (modules[path]) {
      content.value = await modules[path]() as string
    } else {
      throw new Error('Post not found')
    }
  } catch (e) {
    console.error(e)
    error.value = true
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  const id = route.params.id as string
  fetchPost(id)
})

const renderedContent = computed(() => {
  return md.render(content.value)
})
</script>

<template>
  <div class="max-w-3xl mx-auto px-4 py-20 min-h-screen">
    <div v-if="loading" class="text-center text-gray-500 py-20">
      Loading post...
    </div>

    <div v-else-if="error" class="text-center py-20">
      <h2 class="text-2xl font-bold text-red-500 mb-4">Post not found</h2>
      <router-link to="/blog" class="text-blue-400 hover:underline">← Back to Blog</router-link>
    </div>

    <article v-else class="prose prose-invert prose-blue max-w-none">
      <router-link to="/blog" class="no-underline text-gray-500 hover:text-white mb-8 inline-block transition">
        ← Back to Blog
      </router-link>
      
      <div v-html="renderedContent" class="markdown-body"></div>
    </article>
  </div>
</template>

<style>
/* Custom styling for markdown content */
.markdown-body h1 {
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  color: white;
}
.markdown-body h2 {
  font-size: 1.8rem;
  font-weight: 700;
  margin-top: 2.5rem;
  margin-bottom: 1rem;
  color: #e5e7eb;
}
.markdown-body p {
  line-height: 1.8;
  margin-bottom: 1.5rem;
  color: #d1d5db;
}
.markdown-body pre {
  background-color: #161b22;
  padding: 1.5rem;
  border-radius: 0.75rem;
  overflow-x: auto;
  margin-bottom: 1.5rem;
  border: 1px solid #30363d;
}
.markdown-body code {
  font-family: 'Fira Code', monospace;
}
.markdown-body :not(pre) > code {
  background-color: rgba(110, 118, 129, 0.4);
  padding: 0.2em 0.4em;
  border-radius: 6px;
  font-size: 85%;
}
</style>
