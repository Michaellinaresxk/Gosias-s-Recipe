import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        transition: 'fade',
        title: 'Home - Eat Smart'
      }
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
      meta: {
        transition: 'slide-left',
        title: 'About - Eat Smart'
      }
    },
    {
      path: '/recipe/:id',
      name: 'RecipeInformation',
      component: () => import('../views/RecipeInformation.vue'),
      props: true,
      meta: {
        transition: 'zoom',
        title: 'Recipe Details - Eat Smart'
      }
    }
  ],
  // Scroll behavior
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth'
      }
    } else {
      return {
        top: 0,
        behavior: 'smooth'
      }
    }
  }
})

// Navigation guards
router.beforeEach((to, from, next) => {
  // Update document title
  document.title = (to.meta.title as string) || 'Eat Smart - Recipe App'

  // Add loading class
  document.body.classList.add('page-loading')

  next()
})

router.afterEach(() => {
  // Remove loading class after transition
  setTimeout(() => {
    document.body.classList.remove('page-loading')
  }, 400)
})

export default router
