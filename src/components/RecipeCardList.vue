<script setup lang="ts">
import { ref, watch } from 'vue'
import RecipeCard from './RecipeCard.vue'
import { useRouter } from 'vue-router'

const props = defineProps({
  recipes: Array,
  baseUri: String,
  loading: Boolean,
  error: String
})

const router = useRouter()
const showCards = ref(false)

const goToRecipeInformation = (id: string) => {
  router.push({
    name: 'RecipeInformation',
    params: { id },
  })
}

watch(() => props.recipes, (newRecipes) => {
  if (newRecipes && newRecipes.length > 0) {
    showCards.value = false
    setTimeout(() => {
      showCards.value = true
    }, 100)
  }
}, { immediate: true })
</script>

<template>
  <div class="recipes-container">
    <!-- Loading State -->
    <div v-if="loading" class="loading-state">
      <div class="loading-spinner">
        <div class="spinner-circle"></div>
        <div class="spinner-circle circle-2"></div>
        <div class="spinner-circle circle-3"></div>
      </div>
      <p class="loading-text">Cooking up something delicious...</p>
      
      <!-- Skeleton Cards -->
      <div class="recipes-grid">
        <div v-for="n in 8" :key="n" class="skeleton-card">
          <div class="skeleton-image"></div>
          <div class="skeleton-content">
            <div class="skeleton-title"></div>
            <div class="skeleton-meta"></div>
            <div class="skeleton-tags"></div>
          </div>
        </div>
      </div>
    </div>

    <!-- Error State -->
    <div v-else-if="error" class="error-state">
      <div class="error-icon">
        <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <circle cx="12" cy="12" r="10" stroke-width="2"/>
          <line x1="12" y1="8" x2="12" y2="12" stroke-width="2"/>
          <line x1="12" y1="16" x2="12.01" y2="16" stroke-width="2"/>
        </svg>
      </div>
      <h2 class="error-title">Oops! Something went wrong</h2>
      <p class="error-message">{{ error }}</p>
      <button class="retry-button" @click="$emit('retry')">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M1 4v6h6M23 20v-6h-6" stroke-width="2"/>
          <path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15" stroke-width="2"/>
        </svg>
        Try Again
      </button>
    </div>

    <!-- Empty State -->
    <div v-else-if="!recipes || recipes.length === 0" class="empty-state">
      <div class="empty-illustration">
        <svg width="200" height="200" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="10" stroke="#FFB84D" stroke-width="2"/>
          <path d="M8 14s1.5 2 4 2 4-2 4-2" stroke="#FFB84D" stroke-width="2" stroke-linecap="round"/>
          <line x1="9" y1="9" x2="9.01" y2="9" stroke="#FFB84D" stroke-width="2" stroke-linecap="round"/>
          <line x1="15" y1="9" x2="15.01" y2="9" stroke="#FFB84D" stroke-width="2" stroke-linecap="round"/>
        </svg>
      </div>
      <h2 class="empty-title">No recipes found</h2>
      <p class="empty-description">Try adjusting your search or browse our popular recipes</p>
    </div>

    <!-- Recipe Grid -->
    <div v-else class="recipes-grid">
      <div
        v-for="(recipe, index) in recipes"
        :key="recipe.id"
        class="grid-item"
        :style="{ animationDelay: `${index * 0.05}s` }"
      >
        <RecipeCard 
          :recipe="recipe" 
          :baseUri="baseUri" 
          @handleRecipeInformation="goToRecipeInformation" 
        />
      </div>
    </div>

    <!-- Results Counter -->
    <div v-if="recipes && recipes.length > 0" class="results-footer">
      <div class="results-info">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" stroke-width="2"/>
        </svg>
        <span>Showing <strong>{{ recipes.length }}</strong> delicious recipes</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.recipes-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 60px 24px;
}

.loading-state {
  text-align: center;
  padding: 80px 20px;
}

.loading-spinner {
  width: 80px;
  height: 80px;
  margin: 0 auto 32px;
  position: relative;
}

.spinner-circle {
  position: absolute;
  width: 100%;
  height: 100%;
  border: 4px solid transparent;
  border-top-color: #FF6B35;
  border-radius: 50%;
  animation: spin 1.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) infinite;
}

.spinner-circle.circle-2 {
  border-top-color: #F7931E;
  animation-delay: 0.2s;
  width: 70%;
  height: 70%;
  top: 15%;
  left: 15%;
}

.spinner-circle.circle-3 {
  border-top-color: #FDC830;
  animation-delay: 0.4s;
  width: 40%;
  height: 40%;
  top: 30%;
  left: 30%;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.loading-text {
  font-size: 1.2rem;
  color: #636e72;
  font-weight: 600;
  margin-bottom: 48px;
}

.error-state,
.empty-state {
  text-align: center;
  padding: 100px 20px;
  max-width: 600px;
  margin: 0 auto;
}

.error-icon {
  width: 100px;
  height: 100px;
  margin: 0 auto 32px;
  color: #ff6b6b;
}

.empty-illustration {
  margin-bottom: 32px;
}

.error-title,
.empty-title {
  font-size: 2rem;
  font-weight: 800;
  color: #2d3436;
  margin-bottom: 16px;
}

.error-message,
.empty-description {
  font-size: 1.1rem;
  color: #636e72;
  margin-bottom: 32px;
}

.retry-button {
  padding: 14px 32px;
  background: linear-gradient(135deg, #FF6B35 0%, #F7931E 100%);
  color: white;
  border: none;
  border-radius: 16px;
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  transition: all 0.3s ease;
  box-shadow: 0 4px 16px rgba(255, 107, 53, 0.4);
}

.retry-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(255, 107, 53, 0.5);
}

/* Grid Uniforme */
.recipes-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
  gap: 32px;
  margin-bottom: 60px;
}

.grid-item {
  opacity: 0;
  animation: fadeInScale 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

@keyframes fadeInScale {
  0% {
    opacity: 0;
    transform: scale(0.8) translateY(30px);
  }
  100% {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}

.skeleton-card {
  background: #ffffff;
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
}

.skeleton-image {
  width: 100%;
  height: 280px;
  background: linear-gradient(90deg, #fff5e6 25%, #ffe0b3 50%, #fff5e6 75%);
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
}

@keyframes shimmer {
  0% { background-position: -100% 0; }
  100% { background-position: 100% 0; }
}

.skeleton-content {
  padding: 24px;
}

.skeleton-title,
.skeleton-meta,
.skeleton-tags {
  background: #f0f0f0;
  border-radius: 8px;
  animation: pulse 1.5s infinite;
}

.skeleton-title {
  height: 24px;
  margin-bottom: 16px;
}

.skeleton-meta {
  height: 16px;
  width: 60%;
  margin-bottom: 16px;
}

.skeleton-tags {
  height: 28px;
  width: 80%;
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

.results-footer {
  display: flex;
  justify-content: center;
  padding: 40px 0;
}

.results-info {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  padding: 16px 32px;
  background: linear-gradient(135deg, #FFF5E6 0%, #FFE0B3 100%);
  border-radius: 50px;
  box-shadow: 0 4px 20px rgba(255, 107, 53, 0.15);
  color: #636e72;
  font-size: 1rem;
}

.results-info svg {
  stroke: #FF6B35;
}

.results-info strong {
  color: #FF6B35;
  font-weight: 700;
}

@media (max-width: 1200px) {
  .recipes-grid {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 24px;
  }
}

@media (max-width: 768px) {
  .recipes-container {
    padding: 40px 16px;
  }

  .recipes-grid {
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 20px;
  }
}

@media (max-width: 480px) {
  .recipes-grid {
    grid-template-columns: 1fr;
  }
}
</style>