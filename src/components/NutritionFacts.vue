<script setup lang="ts">
import { computed } from 'vue'
import { useRecipesStore } from '../stores/recipes'

const recipeStore = useRecipesStore()

const nutritionItems = computed(() => [
  {
    label: 'Vegetarian',
    value: recipeStore.selectedRecipe?.vegetarian,
    icon: 'mdi-food-apple',
    color: 'light-blue',
    gradient: 'linear-gradient(135deg, #42a5f5 0%, #1976d2 100%)'
  },
  {
    label: 'Gluten Free',
    value: recipeStore.selectedRecipe?.glutenFree,
    icon: 'mdi-barley-off',
    color: 'amber',
    gradient: 'linear-gradient(135deg, #ffa726 0%, #f57c00 100%)'
  },
  {
    label: 'Health Score',
    value: `${recipeStore.selectedRecipe?.healthScore}%`,
    icon: 'mdi-heart-pulse',
    color: 'green',
    gradient: 'linear-gradient(135deg, #66bb6a 0%, #43a047 100%)',
    isScore: true
  }
])

const getStatusColor = (value: boolean) => {
  return value ? 'success' : 'grey-lighten-1'
}

const getStatusIcon = (value: boolean) => {
  return value ? 'mdi-check-circle' : 'mdi-close-circle'
}
</script>

<template>
  <article class="nutrition-facts">
    <!-- Header -->
    <div class="nutrition-header">
      <v-icon color="green" size="28">mdi-nutrition</v-icon>
      <h3 class="nutrition-title">Nutrition Quick View</h3>
    </div>

    <!-- Stats Grid -->
    <v-row class="nutrition-grid">
      <v-col
        v-for="(item, index) in nutritionItems"
        :key="item.label"
        cols="12"
        sm="4"
        class="nutrition-col"
        :style="{ animationDelay: `${index * 0.1}s` }"
      >
        <div class="nutrition-card">
          <!-- Icon Circle -->
          <div 
            class="icon-circle"
            :style="{ background: item.gradient }"
          >
            <v-icon color="white" size="28">{{ item.icon }}</v-icon>
          </div>

          <!-- Content -->
          <div class="nutrition-content">
            <span class="nutrition-label">{{ item.label }}</span>
            
            <!-- Score Display -->
            <div v-if="item.isScore" class="score-display">
              <span class="score-value">{{ item.value }}</span>
              <v-progress-linear
                :model-value="recipeStore.selectedRecipe?.healthScore"
                :color="item.color"
                height="8"
                rounded
                class="score-bar"
              />
            </div>

            <!-- Boolean Display -->
            <div v-else class="status-display">
              <v-chip
                :color="getStatusColor(item.value)"
                size="small"
                class="status-chip"
              >
                <v-icon start size="small">
                  {{ getStatusIcon(item.value) }}
                </v-icon>
                {{ item.value ? 'Yes' : 'No' }}
              </v-chip>
            </div>
          </div>
        </div>
      </v-col>
    </v-row>

    <!-- Additional Stats -->
    <div class="additional-stats">
      <div 
        v-if="recipeStore.selectedRecipe?.vegan"
        class="stat-badge vegan"
      >
        <v-icon size="small">mdi-leaf</v-icon>
        <span>Vegan Friendly</span>
      </div>

      <div 
        v-if="recipeStore.selectedRecipe?.dairyFree"
        class="stat-badge dairy-free"
      >
        <v-icon size="small">mdi-cow-off</v-icon>
        <span>Dairy Free</span>
      </div>

      <div 
        v-if="recipeStore.selectedRecipe?.veryHealthy"
        class="stat-badge healthy"
      >
        <v-icon size="small">mdi-heart</v-icon>
        <span>Very Healthy</span>
      </div>
    </div>
  </article>
</template>

<style scoped>
.nutrition-facts {
  padding: 24px;
  animation: fadeInUp 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Header */
.nutrition-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 24px;
}

.nutrition-title {
  font-size: 1.3rem;
  font-weight: 700;
  color: #2c3e50;
  margin: 0;
}

/* Grid */
.nutrition-grid {
  margin-bottom: 20px;
}

.nutrition-col {
  animation: slideInUp 0.5s cubic-bezier(0.4, 0, 0.2, 1) both;
}

@keyframes slideInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Card */
.nutrition-card {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 20px;
  background: linear-gradient(135deg, #fefefe 0%, #f8f9fa 100%);
  border-radius: 16px;
  border: 2px solid #f1f5f9;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  height: 100%;
}

.nutrition-card:hover {
  transform: translateY(-4px);
  border-color: #e2e8f0;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
}

/* Icon Circle */
.icon-circle {
  min-width: 56px;
  width: 56px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  transition: all 0.3s ease;
}

.nutrition-card:hover .icon-circle {
  transform: scale(1.1) rotate(5deg);
}

/* Content */
.nutrition-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.nutrition-label {
  font-size: 0.875rem;
  font-weight: 600;
  color: #64748b;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

/* Score Display */
.score-display {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.score-value {
  font-size: 1.5rem;
  font-weight: 800;
  color: #2c3e50;
}

.score-bar {
  border-radius: 4px;
}

/* Status Display */
.status-display {
  display: flex;
}

.status-chip {
  font-weight: 700 !important;
  text-transform: uppercase;
  letter-spacing: 0.3px;
}

/* Additional Stats */
.additional-stats {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  padding-top: 16px;
  border-top: 2px solid #f1f5f9;
  animation: fadeIn 0.8s ease-in 0.3s both;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.stat-badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 8px 16px;
  border-radius: 50px;
  font-size: 0.875rem;
  font-weight: 600;
  transition: all 0.3s ease;
  cursor: default;
}

.stat-badge:hover {
  transform: translateY(-2px) scale(1.05);
}

.stat-badge.vegan {
  background: linear-gradient(135deg, #e8f5e9 0%, #c8e6c9 100%);
  color: #2e7d32;
  border: 2px solid #81c784;
}

.stat-badge.dairy-free {
  background: linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%);
  color: #1565c0;
  border: 2px solid #64b5f6;
}

.stat-badge.healthy {
  background: linear-gradient(135deg, #fce4ec 0%, #f8bbd0 100%);
  color: #c2185b;
  border: 2px solid #f06292;
}

/* Responsive */
@media (max-width: 960px) {
  .nutrition-facts {
    padding: 20px;
  }

  .nutrition-card {
    padding: 16px;
  }

  .icon-circle {
    min-width: 48px;
    width: 48px;
    height: 48px;
  }

  .nutrition-title {
    font-size: 1.1rem;
  }
}

@media (max-width: 600px) {
  .nutrition-facts {
    padding: 16px;
  }

  .nutrition-card {
    flex-direction: column;
    text-align: center;
    padding: 20px 16px;
  }

  .icon-circle {
    margin: 0 auto;
  }

  .nutrition-content {
    align-items: center;
  }

  .score-display,
  .status-display {
    width: 100%;
  }

  .additional-stats {
    justify-content: center;
  }
}
</style>