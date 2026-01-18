<script setup lang="ts">
import heroImage from '@/assets/img/main-hero-img.jpg'
import SearchRecipe from './SearchRecipe.vue'

const emit = defineEmits(['searchRecipe'])

const handleSearchRecipe = (recipeQuery: string) => {
  emit('searchRecipe', recipeQuery)
}
</script>

<template>
  <section class="hero-section">
    <div class="hero-bg">
      <img :src="heroImage" alt="Hero" class="hero-image" />
      <div class="hero-overlay"></div>
    </div>

    <div class="hero-content">
      <h1 class="hero-title">
        <span class="title-line">Discover Your Next</span>
        <span class="title-line gradient">Favorite Recipe</span>
      </h1>

      <p class="hero-subtitle">
        From quick weeknight dinners to impressive weekend feasts
      </p>

      <div class="hero-search">
        <SearchRecipe @handleSearchRecipe="handleSearchRecipe" />
      </div>

      <div class="hero-stats">
        <div class="stat">
          <span class="stat-number">10K+</span>
          <span class="stat-label">Recipes</span>
        </div>
        <div class="stat">
          <span class="stat-number">50K+</span>
          <span class="stat-label">Users</span>
        </div>
        <div class="stat">
          <span class="stat-number">4.8★</span>
          <span class="stat-label">Rating</span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero-section {
  position: relative;
  min-height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  padding: 100px 20px 60px;
}

.hero-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
}

.hero-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  animation: slowZoom 20s ease-in-out infinite alternate;
}

@keyframes slowZoom {
  0% { transform: scale(1); }
  100% { transform: scale(1.1); }
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgba(255, 107, 53, 0.85) 0%, rgba(247, 147, 30, 0.75) 100%);
}

.hero-content {
  position: relative;
  z-index: 2;
  max-width: 900px;
  width: 100%;
  text-align: center;
  animation: fadeInUp 1s ease;
}

@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(40px); }
  to { opacity: 1; transform: translateY(0); }
}

.hero-title {
  font-size: clamp(2.5rem, 7vw, 4.5rem);
  font-weight: 900;
  line-height: 1.1;
  margin: 0 0 24px 0;
}

.title-line {
  display: block;
  color: white;
}

.title-line.gradient {
  background: linear-gradient(135deg, #FFF 0%, #FDC830 50%, #FFF 100%);
  background-size: 200% auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: shimmer 3s linear infinite;
}

@keyframes shimmer {
  to { background-position: 200% center; }
}

.hero-subtitle {
  font-size: clamp(1rem, 2vw, 1.2rem);
  color: rgba(255, 255, 255, 0.95);
  line-height: 1.6;
  margin: 0 0 40px 0;
  font-weight: 400;
}

.hero-search {
  margin-bottom: 48px;
}

.hero-stats {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 48px;
  flex-wrap: wrap;
}

.stat {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.stat-number {
  font-size: 2rem;
  font-weight: 900;
  color: white;
  text-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.stat-label {
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.9);
  font-weight: 500;
}

@media (max-width: 768px) {
  .hero-section {
    min-height: 500px;
    padding: 80px 16px 40px;
  }

  .hero-stats {
    gap: 32px;
  }

  .stat-number {
    font-size: 1.5rem;
  }
}
</style>