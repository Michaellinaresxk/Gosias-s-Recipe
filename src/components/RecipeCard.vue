<script setup lang="ts">
import { ref } from 'vue'

defineProps({
  recipe: Object,
  baseUri: String
})

const emit = defineEmits<{
    (e: 'handleRecipeInformation', id: string): void
}>()

const isLiked = ref(false)
const isSaved = ref(false)

const handleRecipeInformation = (id: string) => {
  emit('handleRecipeInformation', id)
}

const toggleLike = () => {
  isLiked.value = !isLiked.value
}

const toggleSave = () => {
  isSaved.value = !isSaved.value
}
</script>

<template>
  <div class="modern-recipe-card" @click="handleRecipeInformation(recipe.id)">
    <!-- Image Container -->
    <div class="image-wrapper">
      <img 
        :src="baseUri + recipe.image" 
        :alt="recipe.title"
        class="recipe-image"
      />
      
      <!-- Gradient Overlay -->
      <div class="gradient-overlay"></div>
      
      <!-- Floating Actions -->
      <div class="floating-actions">
        <button 
          class="action-btn like-btn"
          :class="{ active: isLiked }"
          @click.stop="toggleLike"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" 
              :fill="isLiked ? '#ff4757' : 'none'" 
              :stroke="isLiked ? '#ff4757' : 'currentColor'" 
              stroke-width="2"/>
          </svg>
        </button>
        
        <button 
          class="action-btn save-btn"
          :class="{ active: isSaved }"
          @click.stop="toggleSave"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" 
              :fill="isSaved ? '#FF6B35' : 'none'" 
              stroke="currentColor" 
              stroke-width="2"/>
          </svg>
        </button>
      </div>

      <!-- Premium Badge -->
      <div v-if="recipe.veryHealthy" class="premium-badge">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
        <span>Premium</span>
      </div>
    </div>

    <!-- Content -->
    <div class="card-content">
      <!-- Title -->
      <h3 class="recipe-title">{{ recipe.title }}</h3>

      <!-- Meta Info -->
      <div class="meta-row">
        <div class="meta-item">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <circle cx="12" cy="12" r="10" stroke-width="2"/>
            <path d="M12 6v6l4 2" stroke-width="2"/>
          </svg>
          <span>{{ recipe.readyInMinutes || 30 }} min</span>
        </div>
        
        <div class="meta-item">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke-width="2"/>
            <circle cx="9" cy="7" r="4" stroke-width="2"/>
            <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" stroke-width="2"/>
          </svg>
          <span>{{ recipe.servings || 4 }} servings</span>
        </div>
      </div>

      <!-- Tags -->
      <div class="tags-row">
        <span v-if="recipe.vegetarian" class="tag tag-green">
          🌱 Vegetarian
        </span>
        <span v-if="recipe.vegan" class="tag tag-lime">
          🥬 Vegan
        </span>
        <span v-if="recipe.glutenFree" class="tag tag-amber">
          🌾 Gluten Free
        </span>
      </div>

      <!-- CTA Button -->
      <button class="cta-button">
        <span>View Recipe</span>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M5 12h14M12 5l7 7-7 7" stroke-width="2" stroke-linecap="round"/>
        </svg>
      </button>
    </div>
  </div>
</template>

<style scoped>
.modern-recipe-card {
  background: #ffffff;
  border-radius: 24px;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
  box-shadow: 
    0 4px 20px rgba(0, 0, 0, 0.08),
    0 0 0 1px rgba(0, 0, 0, 0.02);
}

.modern-recipe-card:hover {
  transform: translateY(-12px) scale(1.02);
  box-shadow: 
    0 24px 48px rgba(255, 107, 53, 0.2),
    0 0 0 1px rgba(255, 107, 53, 0.1);
}

.image-wrapper {
  position: relative;
  width: 100%;
  height: 280px;
  overflow: hidden;
  background: linear-gradient(135deg, #FF6B35 0%, #F7931E 100%);
}

.recipe-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.7s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.modern-recipe-card:hover .recipe-image {
  transform: scale(1.15) rotate(2deg);
}

.gradient-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 50%;
  background: linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 100%);
  opacity: 0;
  transition: opacity 0.4s ease;
}

.modern-recipe-card:hover .gradient-overlay {
  opacity: 1;
}

.floating-actions {
  position: absolute;
  top: 16px;
  right: 16px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  opacity: 0;
  transform: translateX(20px);
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.modern-recipe-card:hover .floating-actions {
  opacity: 1;
  transform: translateX(0);
}

.action-btn {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: none;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  color: #2d3436;
}

.action-btn:hover {
  transform: scale(1.15);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.25);
}

.action-btn.active {
  background: #ffffff;
  transform: scale(1.1);
}

.like-btn.active {
  animation: heartBeat 0.6s ease;
}

@keyframes heartBeat {
  0%, 100% { transform: scale(1); }
  25% { transform: scale(1.3); }
  50% { transform: scale(1.1); }
  75% { transform: scale(1.25); }
}

.premium-badge {
  position: absolute;
  top: 16px;
  left: 16px;
  background: linear-gradient(135deg, #FDC830 0%, #F37335 100%);
  color: white;
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 6px;
  box-shadow: 0 4px 12px rgba(253, 200, 48, 0.5);
  animation: float 3s ease-in-out infinite;
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-5px); }
}

.card-content {
  padding: 24px;
}

.recipe-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: #2d3436;
  margin: 0 0 16px 0;
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  min-height: 68px;
}

.meta-row {
  display: flex;
  gap: 20px;
  margin-bottom: 16px;
}

.meta-item {
  display: flex;
  align-items: center;
  gap: 8px;
  color: #636e72;
  font-size: 0.875rem;
  font-weight: 500;
}

.meta-item svg {
  stroke: #FF6B35;
  stroke-width: 2;
}

.tags-row {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 20px;
  min-height: 32px;
}

.tag {
  padding: 6px 14px;
  border-radius: 16px;
  font-size: 0.75rem;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  transition: all 0.3s ease;
}

.tag-green {
  background: linear-gradient(135deg, #a8e6cf 0%, #56ab2f 100%);
  color: #1e5f0f;
}

.tag-lime {
  background: linear-gradient(135deg, #c3f584 0%, #7cb342 100%);
  color: #2e5f1b;
}

.tag-amber {
  background: linear-gradient(135deg, #ffd97d 0%, #ff9800 100%);
  color: #804d00;
}

.tag:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.cta-button {
  width: 100%;
  padding: 14px 24px;
  background: linear-gradient(135deg, #FF6B35 0%, #F7931E 100%);
  color: white;
  border: none;
  border-radius: 16px;
  font-size: 0.95rem;
  font-weight: 700;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  box-shadow: 0 4px 16px rgba(255, 107, 53, 0.4);
  position: relative;
  overflow: hidden;
}

.cta-button::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
  transition: left 0.5s ease;
}

.cta-button:hover::before {
  left: 100%;
}

.cta-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(255, 107, 53, 0.5);
}

.cta-button:active {
  transform: translateY(0);
}

.cta-button svg {
  transition: transform 0.3s ease;
}

.cta-button:hover svg {
  transform: translateX(4px);
}

@media (max-width: 600px) {
  .image-wrapper {
    height: 220px;
  }

  .card-content {
    padding: 20px;
  }

  .recipe-title {
    font-size: 1.1rem;
  }

  .tags-row {
    gap: 6px;
  }

  .tag {
    font-size: 0.7rem;
    padding: 5px 12px;
  }
}
</style>