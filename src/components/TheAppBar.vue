<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { RouterLink } from 'vue-router'

const scrolled = ref(false)
const drawer = ref(false)

const handleScroll = () => {
  scrolled.value = window.scrollY > 50
}

const menuItems = [
  { title: 'Home', icon: 'mdi-home', route: '/' },
  { title: 'About', icon: 'mdi-information', route: '/about' },
]

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <v-app-bar
    :class="['modern-app-bar', { 'scrolled': scrolled }]"
    :elevation="scrolled ? 8 : 0"
    flat
    fixed
  >
    <!-- Mobile Drawer -->
    <v-navigation-drawer
      v-model="drawer"
      temporary
      location="left"
      class="mobile-drawer"
    >
      <v-list>
        <v-list-item
          prepend-avatar="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"
          title="Eat-Smart"
          subtitle="Delicious Recipes"
        ></v-list-item>
      </v-list>

      <v-divider></v-divider>

      <v-list density="compact" nav>
        <v-list-item
          v-for="item in menuItems"
          :key="item.title"
          :to="item.route"
          :prepend-icon="item.icon"
          :title="item.title"
          class="drawer-item"
        ></v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!-- Mobile Menu Button
    <v-app-bar-nav-icon
      @click="drawer = !drawer"
      class="mobile-menu-btn d-md-none"
    ></v-app-bar-nav-icon> -->

    <!-- Logo/Brand -->
    <RouterLink to="/" class="brand-link">
      <div class="brand-container">
        <v-icon color="orange-lighten-2" size="32">mdi-food</v-icon>
        <div class="brand-text">
          <span class="brand-name">Eat-Smart</span>
          <span class="brand-tagline">Delicious Recipes</span>
        </div>
      </div>
    </RouterLink>

    <v-spacer></v-spacer>

    <!-- Desktop Navigation -->
    <div class="desktop-nav d-none d-md-flex">
      <v-btn
        v-for="item in menuItems"
        :key="item.title"
        :to="item.route"
        variant="text"
        class="nav-btn"
      >
        <v-icon start>{{ item.icon }}</v-icon>
        {{ item.title }}
      </v-btn>
    </div>


  </v-app-bar>
</template>

<style scoped>
.modern-app-bar {
  background: rgba(255, 255, 255, 0.8) !important;
  backdrop-filter: blur(20px);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
}

.modern-app-bar.scrolled {
  background: rgba(255, 255, 255, 0.95) !important;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.08) !important;
}

/* Mobile Drawer */
.mobile-drawer {
  background: linear-gradient(135deg, #fff 0%, #fef3e7 100%);
}

.drawer-item {
  border-radius: 12px;
  margin: 4px 8px;
  transition: all 0.3s ease;
}

.drawer-item:hover {
  background: rgba(251, 140, 0, 0.1);
}

/* Brand */
.brand-link {
  text-decoration: none;
  display: flex;
  align-items: center;
}

.brand-container {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 8px 12px;
  border-radius: 16px;
  transition: all 0.3s ease;
}

.brand-container:hover {
  background: rgba(251, 140, 0, 0.1);
  transform: scale(1.02);
}

.brand-text {
  display: flex;
  flex-direction: column;
  line-height: 1.2;
}

.brand-name {
  font-size: 1.3rem;
  font-weight: 800;
  color: #2c3e50;
  letter-spacing: -0.5px;
}

.brand-tagline {
  font-size: 0.7rem;
  color: #64748b;
  font-weight: 500;
}

/* Desktop Navigation */
.desktop-nav {
  gap: 8px;
  margin-right: 16px;
}

.nav-btn {
  text-transform: none !important;
  font-weight: 600 !important;
  letter-spacing: 0.3px !important;
  border-radius: 12px !important;
  transition: all 0.3s ease !important;
  position: relative;
}

.nav-btn::after {
  content: '';
  position: absolute;
  bottom: 8px;
  left: 50%;
  transform: translateX(-50%) scaleX(0);
  width: 80%;
  height: 3px;
  background: linear-gradient(90deg, #FB8C00 0%, #F57C00 100%);
  border-radius: 2px;
  transition: transform 0.3s ease;
}

.nav-btn:hover::after,
.nav-btn.v-btn--active::after {
  transform: translateX(-50%) scaleX(1);
}

.nav-btn:hover {
  background: rgba(251, 140, 0, 0.1) !important;
}

/* Action Buttons */
.action-buttons {
  display: flex;
  align-items: center;
  gap: 8px;
}

.action-icon-btn {
  transition: all 0.3s ease !important;
}

.action-icon-btn:hover {
  background: rgba(251, 140, 0, 0.1) !important;
  transform: scale(1.05);
}

/* User Menu */
.user-menu {
  min-width: 250px;
  border-radius: 16px !important;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12) !important;
}

/* Mobile Menu Button */
.mobile-menu-btn {
  transition: all 0.3s ease;
}

.mobile-menu-btn:hover {
  background: rgba(251, 140, 0, 0.1) !important;
  transform: rotate(90deg);
}

/* Responsive */
@media (max-width: 960px) {
  .brand-name {
    font-size: 1.1rem;
  }

  .brand-tagline {
    font-size: 0.65rem;
  }
}

@media (max-width: 600px) {
  .brand-text {
    display: none;
  }

  .action-buttons {
    gap: 4px;
  }
}

/* Animations */
@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.modern-app-bar {
  animation: slideDown 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}
</style>