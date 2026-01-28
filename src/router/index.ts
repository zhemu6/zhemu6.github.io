import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import BlogList from '../views/BlogList.vue'
import BlogPost from '../views/BlogPost.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/blog',
    name: 'BlogList',
    component: BlogList
  },
  {
    path: '/blog/:id',
    name: 'BlogPost',
    component: BlogPost,
    props: true
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(_to, _from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

export default router
