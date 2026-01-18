<script setup lang="ts">
import { RouterView } from 'vue-router'
import TheAppBar from '@/components/TheAppBar.vue'
import TheFooter from '@/components/TheFooter.vue'
</script>

<template>
  <v-app class="eat-smart-app">
    <!-- Navbar -->
    <TheAppBar />
    
    <!-- Main Content with Router -->
    <v-main class="main-content">
      <RouterView v-slot="{ Component, route }">
        <transition 
          :name="route.meta.transition || 'fade'"
          mode="out-in"
        >
          <component :is="Component" :key="route.path" />
        </transition>
      </RouterView>
    </v-main>

    <!-- Footer -->
    <TheFooter />
  </v-app>
</template>

<style>
/* ========== GLOBAL RESETS ========== */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  overflow-x: hidden;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

/* ========== MAIN APP ========== */
.eat-smart-app {
  background: linear-gradient(180deg, #ffffff 0%, #f8f9fa 100%) !important;
}

.main-content {
  min-height: 100vh;
}

/* ========== ROUTER TRANSITIONS ========== */
.fade-enter-active,
.fade-leave-active {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.fade-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.fade-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}

.slide-left-enter-active,
.slide-left-leave-active {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.slide-left-enter-from {
  opacity: 0;
  transform: translateX(50px);
}

.slide-left-leave-to {
  opacity: 0;
  transform: translateX(-50px);
}

.zoom-enter-active,
.zoom-leave-active {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.zoom-enter-from {
  opacity: 0;
  transform: scale(0.95);
}

.zoom-leave-to {
  opacity: 0;
  transform: scale(1.05);
}

/* ========== CUSTOM SCROLLBAR ========== */
::-webkit-scrollbar {
  width: 12px;
}

::-webkit-scrollbar-track {
  background: #f1f5f9;
}

::-webkit-scrollbar-thumb {
  background: linear-gradient(180deg, #FB8C00 0%, #F57C00 100%);
  border-radius: 6px;
  border: 2px solid #f1f5f9;
}

::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(180deg, #F57C00 0%, #E65100 100%);
}

/* ========== SELECTION COLOR ========== */
::selection {
  background: rgba(251, 140, 0, 0.3);
  color: #2c3e50;
}

/* ========== SMOOTH SCROLL ========== */
html {
  scroll-behavior: smooth;
}

/* ========== FOCUS STYLES ========== */
*:focus-visible {
  outline: 3px solid rgba(251, 140, 0, 0.4);
  outline-offset: 2px;
}

/* ========== UTILITY CLASSES ========== */
.text-gradient {
  background: linear-gradient(135deg, #FB8C00 0%, #F57C00 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* ========== ANIMATIONS ========== */
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes scaleIn {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-15px);
  }
  60% {
    transform: translateY(-7px);
  }
}

@keyframes pulse {
  0%, 100% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.05);
    opacity: 0.8;
  }
}

@keyframes shimmer {
  0% {
    background-position: -1000px 0;
  }
  100% {
    background-position: 1000px 0;
  }
}

/* ========== RESPONSIVE ========== */
@media (max-width: 600px) {
  .main-content {
    padding-top: 0;
  }
}

/* ========== PRINT STYLES ========== */
@media print {
  .v-app-bar,
  .v-footer,
  .action-buttons,
  .scroll-indicator {
    display: none !important;
  }
}

/* ========== REDUCED MOTION ========== */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
</style>