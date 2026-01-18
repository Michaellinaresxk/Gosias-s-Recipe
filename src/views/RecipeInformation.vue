<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { useRecipesStore } from '../stores/recipes'
import NutritionFacts from '../components/NutritionFacts.vue'
import { useRouter } from 'vue-router'

const props = defineProps<{
  id: string
}>()

const router = useRouter()
const recipeStore = useRecipesStore()
const activeTab = ref('overview')
const imageLoaded = ref(false)
const scrollY = ref(0)

onMounted(() => {
  recipeStore.fetchRecipeById(props.id)
  window.addEventListener('scroll', handleScroll)
})

const handleScroll = () => {
  scrollY.value = window.scrollY
}

const formattedSummary = computed(() => {
  if (!recipeStore.selectedRecipe?.summary) return []
  return recipeStore.selectedRecipe.summary
    .split('.')
    .filter((s: string) => s.trim())
    .map((sentence: string) => sentence.trim() + '.')
})

const formattedInstructions = computed(() => {
  if (!recipeStore.selectedRecipe?.instructions) return []
  return recipeStore.selectedRecipe.instructions
    .split('.')
    .filter((s: string) => s.trim())
    .map((sentence: string) => sentence.trim() + '.')
})

const goBack = () => {
  router.back()
}
</script>

<template>
  <main class="recipe-detail">
    <!-- Hero Section with Parallax -->
    <section class="hero-section" v-if="recipeStore.selectedRecipe">
      <div 
        class="hero-image-wrapper"
        :style="{ transform: `translateY(${scrollY * 0.5}px)` }"
      >
        <v-skeleton-loader
          v-if="!imageLoaded"
          type="image"
          height="500"
        />
        <img 
          v-show="imageLoaded"
          :src="recipeStore.selectedRecipe.image" 
          class="hero-image"
          @load="imageLoaded = true"
          alt="Recipe"
        />
        <div class="hero-overlay"></div>
      </div>

      <div class="hero-content">
        <v-btn
          icon="mdi-arrow-left"
          variant="flat"
          color="white"
          class="back-btn"
          size="large"
          @click="goBack"
        />

        <div class="hero-text">
          <v-chip
            v-for="dishType in recipeStore.selectedRecipe.dishTypes"
            :key="dishType"
            color="orange-lighten-2"
            class="dish-type-chip"
            size="small"
          >
            {{ dishType }}
          </v-chip>

          <h1 class="recipe-title">
            {{ recipeStore.selectedRecipe.title }}
          </h1>

          <div class="recipe-stats">
            <div class="stat-item">
              <v-icon color="white">mdi-clock-outline</v-icon>
              <span>{{ recipeStore.selectedRecipe.readyInMinutes }} min</span>
            </div>
            <div class="stat-item">
              <v-icon color="white">mdi-account-multiple</v-icon>
              <span>{{ recipeStore.selectedRecipe.servings }} servings</span>
            </div>
            <div class="stat-item">
              <v-icon color="white">mdi-heart</v-icon>
              <span>{{ recipeStore.selectedRecipe.aggregateLikes }} likes</span>
            </div>
          </div>
        </div>

        <!-- Quick Action Buttons -->
        <div class="action-buttons">
          <v-btn
            color="white"
            variant="flat"
            size="large"
            class="action-btn"
          >
            <v-icon start>mdi-heart-outline</v-icon>
            Save
          </v-btn>
          <v-btn
            color="white"
            variant="flat"
            size="large"
            class="action-btn"
          >
            <v-icon start>mdi-share-variant</v-icon>
            Share
          </v-btn>
          <v-btn
            color="white"
            variant="flat"
            size="large"
            class="action-btn"
          >
            <v-icon start>mdi-printer</v-icon>
            Print
          </v-btn>
        </div>
      </div>
    </section>

    <!-- Loading State -->
    <v-container v-if="recipeStore.loading" class="loading-section">
      <v-progress-circular
        indeterminate
        color="orange-lighten-2"
        size="64"
      />
      <p class="loading-text">Loading delicious recipe...</p>
    </v-container>

    <!-- Error State -->
    <v-container v-else-if="recipeStore.error" class="error-section">
      <v-icon size="80" color="error">mdi-alert-circle-outline</v-icon>
      <h2>{{ recipeStore.error }}</h2>
      <v-btn color="orange-lighten-2" size="large" @click="goBack">
        Go Back
      </v-btn>
    </v-container>

    <!-- Content Section -->
    <v-container v-else-if="recipeStore.selectedRecipe" class="content-section">
      <!-- Nutrition Quick View -->
      <v-card class="nutrition-card" elevation="0">
        <NutritionFacts />
      </v-card>

      <!-- Tabs Navigation -->
      <v-card class="tabs-card" elevation="0">
        <v-tabs
          v-model="activeTab"
          color="orange-lighten-2"
          align-tabs="center"
          class="custom-tabs"
        >
          <v-tab value="overview">
            <v-icon start>mdi-text-box-outline</v-icon>
            Overview
          </v-tab>
          <v-tab value="ingredients">
            <v-icon start>mdi-food-variant</v-icon>
            Ingredients
          </v-tab>
          <v-tab value="instructions">
            <v-icon start>mdi-chef-hat</v-icon>
            Instructions
          </v-tab>
          <v-tab value="nutrition">
            <v-icon start>mdi-nutrition</v-icon>
            Nutrition
          </v-tab>
        </v-tabs>
      </v-card>

      <!-- Tab Content -->
      <v-window v-model="activeTab" class="tabs-content">
        <!-- Overview Tab -->
        <v-window-item value="overview">
          <v-card class="content-card" elevation="0">
            <h3 class="section-title">
              <v-icon color="orange-lighten-2">mdi-information-outline</v-icon>
              About This Recipe
            </h3>
            <div class="summary-content" v-html="formattedSummary.join(' ')"></div>
          </v-card>
        </v-window-item>

        <!-- Ingredients Tab -->
        <v-window-item value="ingredients">
          <v-card class="content-card" elevation="0">
            <h3 class="section-title">
              <v-icon color="orange-lighten-2">mdi-food-variant</v-icon>
              Ingredients
            </h3>
            <v-list class="ingredients-list">
              <v-list-item
                v-for="ingredient in recipeStore.selectedRecipe.extendedIngredients"
                :key="ingredient.id"
                class="ingredient-item"
              >
                <template v-slot:prepend>
                  <v-avatar color="orange-lighten-4" size="40">
                    <v-icon color="orange-lighten-2">mdi-check</v-icon>
                  </v-avatar>
                </template>
                <v-list-item-title class="ingredient-text">
                  {{ ingredient.original }}
                </v-list-item-title>
              </v-list-item>
            </v-list>
          </v-card>
        </v-window-item>

        <!-- Instructions Tab -->
        <v-window-item value="instructions">
          <v-card class="content-card" elevation="0">
            <h3 class="section-title">
              <v-icon color="orange-lighten-2">mdi-chef-hat</v-icon>
              Cooking Instructions
            </h3>
            <div class="instructions-content">
              <div 
                v-for="(step, index) in formattedInstructions"
                :key="index"
                class="instruction-step"
              >
                <div class="step-number">{{ index + 1 }}</div>
                <p class="step-text" v-html="step"></p>
              </div>
            </div>
          </v-card>
        </v-window-item>

        <!-- Nutrition Tab -->
        <v-window-item value="nutrition">
          <v-card class="content-card" elevation="0">
            <h3 class="section-title">
              <v-icon color="orange-lighten-2">mdi-nutrition</v-icon>
              Nutritional Information
            </h3>
            
            <v-row class="nutrition-grid">
              <v-col cols="12" md="6">
                <v-card class="nutrition-info-card" color="light-green-lighten-5">
                  <v-card-title>
                    <v-icon color="success" size="large">mdi-leaf</v-icon>
                    Vegan
                  </v-card-title>
                  <v-card-text class="nutrition-value">
                    {{ recipeStore.selectedRecipe.vegan ? 'Yes ✓' : 'No ✗' }}
                  </v-card-text>
                </v-card>
              </v-col>

              <v-col cols="12" md="6">
                <v-card class="nutrition-info-card" color="light-blue-lighten-5">
                  <v-card-title>
                    <v-icon color="blue" size="large">mdi-food-apple</v-icon>
                    Vegetarian
                  </v-card-title>
                  <v-card-text class="nutrition-value">
                    {{ recipeStore.selectedRecipe.vegetarian ? 'Yes ✓' : 'No ✗' }}
                  </v-card-text>
                </v-card>
              </v-col>

              <v-col cols="12" md="6">
                <v-card class="nutrition-info-card" color="amber-lighten-5">
                  <v-card-title>
                    <v-icon color="amber-darken-2" size="large">mdi-heart-pulse</v-icon>
                    Very Healthy
                  </v-card-title>
                  <v-card-text class="nutrition-value">
                    {{ recipeStore.selectedRecipe.veryHealthy ? 'Yes ✓' : 'No ✗' }}
                  </v-card-text>
                </v-card>
              </v-col>

              <v-col cols="12" md="6">
                <v-card class="nutrition-info-card" color="purple-lighten-5">
                  <v-card-title>
                    <v-icon color="purple" size="large">mdi-star</v-icon>
                    Very Popular
                  </v-card-title>
                  <v-card-text class="nutrition-value">
                    {{ recipeStore.selectedRecipe.veryPopular ? 'Yes ✓' : 'No ✗' }}
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
          </v-card>
        </v-window-item>
      </v-window>
    </v-container>
  </main>
</template>

<style scoped>
.recipe-detail {
  min-height: 100vh;
  background: #f8f9fa;
}

/* Hero Section */
.hero-section {
  position: relative;
  height: 500px;
  overflow: hidden;
}

.hero-image-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  will-change: transform;
}

.hero-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  animation: zoomIn 0.8s ease-out;
}

@keyframes zoomIn {
  from {
    transform: scale(1.1);
  }
  to {
    transform: scale(1);
  }
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.6) 0%,
    rgba(0, 0, 0, 0.4) 50%,
    rgba(0, 0, 0, 0.8) 100%
  );
}

.hero-content {
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 40px;
  z-index: 2;
}

.back-btn {
  position: absolute !important;
  top: 20px;
  left: 20px;
  backdrop-filter: blur(10px);
  background: rgba(255, 255, 255, 0.2) !important;
  transition: all 0.3s ease;
}

.back-btn:hover {
  background: rgba(255, 255, 255, 0.3) !important;
  transform: scale(1.05);
}

.hero-text {
  animation: slideUpFade 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

@keyframes slideUpFade {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.dish-type-chip {
  margin-right: 8px;
  margin-bottom: 12px;
  font-weight: 600 !important;
  backdrop-filter: blur(10px);
}

.recipe-title {
  font-size: 3rem;
  font-weight: 800;
  color: white;
  margin-bottom: 20px;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.3);
  line-height: 1.2;
}

.recipe-stats {
  display: flex;
  gap: 32px;
  margin-bottom: 24px;
}

.stat-item {
  display: flex;
  align-items: center;
  gap: 8px;
  color: white;
  font-size: 1.1rem;
  font-weight: 600;
}

.action-buttons {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.action-btn {
  backdrop-filter: blur(10px);
  background: rgba(255, 255, 255, 0.9) !important;
  font-weight: 600 !important;
  transition: all 0.3s ease !important;
}

.action-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2) !important;
}

/* Loading/Error States */
.loading-section,
.error-section {
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
}

.loading-text {
  font-size: 1.2rem;
  color: #64748b;
  font-weight: 500;
}

/* Content Section */
.content-section {
  margin-top: -60px;
  position: relative;
  z-index: 3;
  padding-bottom: 80px;
}

.nutrition-card {
  background: white !important;
  border-radius: 24px !important;
  padding: 24px;
  margin-bottom: 24px;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.08) !important;
  animation: slideUpFade 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.tabs-card {
  background: white !important;
  border-radius: 24px !important;
  margin-bottom: 24px;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.08) !important;
  animation: slideUpFade 0.7s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
}

.custom-tabs {
  border-bottom: 2px solid #f1f5f9;
}

.tabs-content {
  animation: fadeIn 0.4s ease-in;
}

.content-card {
  background: white !important;
  border-radius: 24px !important;
  padding: 32px;
  margin-top: 24px;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.08) !important;
}

.section-title {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 1.8rem;
  font-weight: 700;
  color: #2c3e50;
  margin-bottom: 24px;
}

/* Summary Content */
.summary-content {
  font-size: 1.1rem;
  line-height: 1.8;
  color: #475569;
}

/* Ingredients List */
.ingredients-list {
  background: transparent !important;
}

.ingredient-item {
  padding: 16px 0 !important;
  border-bottom: 1px solid #f1f5f9;
  transition: all 0.3s ease;
}

.ingredient-item:hover {
  background: #fef3e7 !important;
  padding-left: 12px !important;
}

.ingredient-item:last-child {
  border-bottom: none;
}

.ingredient-text {
  font-size: 1.05rem !important;
  color: #2c3e50;
  font-weight: 500;
}

/* Instructions */
.instructions-content {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.instruction-step {
  display: flex;
  gap: 20px;
  align-items: flex-start;
  padding: 20px;
  background: #fef3e7;
  border-radius: 16px;
  transition: all 0.3s ease;
}

.instruction-step:hover {
  transform: translateX(8px);
  box-shadow: 0 4px 12px rgba(251, 140, 0, 0.15);
}

.step-number {
  min-width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #FB8C00 0%, #F57C00 100%);
  color: white;
  font-weight: 700;
  font-size: 1.2rem;
  border-radius: 50%;
}

.step-text {
  font-size: 1.05rem;
  line-height: 1.7;
  color: #2c3e50;
  margin: 0;
}

/* Nutrition Grid */
.nutrition-grid {
  margin-top: 20px;
}

.nutrition-info-card {
  padding: 24px;
  border-radius: 16px !important;
  transition: all 0.3s ease;
  border: 2px solid transparent;
}

.nutrition-info-card:hover {
  transform: translateY(-4px);
  border-color: currentColor;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1) !important;
}

.nutrition-info-card .v-card-title {
  display: flex;
  align-items: center;
  gap: 12px;
  font-weight: 700 !important;
  font-size: 1.1rem !important;
}

.nutrition-value {
  font-size: 1.3rem !important;
  font-weight: 700 !important;
  color: #2c3e50;
  padding-top: 8px !important;
}

/* Responsive */
@media (max-width: 960px) {
  .recipe-title {
    font-size: 2rem;
  }

  .hero-content {
    padding: 24px;
  }

  .action-buttons {
    flex-direction: column;
  }

  .action-btn {
    width: 100%;
  }

  .content-card {
    padding: 24px;
  }
}

@media (max-width: 600px) {
  .hero-section {
    height: 400px;
  }

  .recipe-title {
    font-size: 1.5rem;
  }

  .recipe-stats {
    flex-direction: column;
    gap: 12px;
  }

  .section-title {
    font-size: 1.4rem;
  }

  .content-card {
    padding: 20px;
    border-radius: 16px !important;
  }
}
</style>