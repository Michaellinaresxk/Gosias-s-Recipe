<script setup lang="ts">
import { ref } from 'vue'

const emit = defineEmits<{
  (e: 'handleSearchRecipe', recipeQuery: string): void
}>()

const recipeQuery = ref('')
const loading = ref(false)

const handleSearchRecipe = () => {
  if (recipeQuery.value.trim()) {
    loading.value = true
    emit('handleSearchRecipe', recipeQuery.value)
    setTimeout(() => { loading.value = false }, 1000)
  }
}
</script>

<template>
  <div class="search-wrapper">
    <div class="search-container">
      <div class="search-icon">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <circle cx="11" cy="11" r="8" stroke-width="2.5"/>
          <path d="m21 21-4.35-4.35" stroke-width="2.5"/>
        </svg>
      </div>

      <input
        v-model="recipeQuery"
        type="text"
        class="search-input"
        placeholder="Search for recipes, ingredients, cuisines..."
        @keyup.enter="handleSearchRecipe"
      />

      <div v-if="loading" class="search-loading">
        <div class="loader"></div>
      </div>

      <button v-else class="search-button" @click="handleSearchRecipe" :disabled="!recipeQuery.trim()">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M5 12h14M12 5l7 7-7 7" stroke-width="2.5" stroke-linecap="round"/>
        </svg>
      </button>
    </div>
  </div>
</template>

<style scoped>
.search-wrapper {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 20px;
}

.search-container {
  display: flex;
  align-items: center;
  gap: 16px;
  background: #ffffff;
  padding: 8px 8px 8px 24px;
  border-radius: 60px;
  box-shadow: 0 20px 60px rgba(255, 107, 53, 0.2), 0 0 0 1px rgba(255, 107, 53, 0.1);
  transition: all 0.4s ease;
}

.search-container:hover {
  box-shadow: 0 24px 80px rgba(255, 107, 53, 0.3), 0 0 0 2px rgba(255, 107, 53, 0.2);
  transform: translateY(-2px);
}

.search-container:focus-within {
  box-shadow: 0 28px 100px rgba(255, 107, 53, 0.35), 0 0 0 3px rgba(255, 107, 53, 0.3);
  transform: translateY(-4px);
}

.search-icon {
  color: #FF6B35;
  animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.1); opacity: 0.8; }
}

.search-input {
  flex: 1;
  border: none;
  outline: none;
  font-size: 1.1rem;
  color: #2d3436;
  font-weight: 500;
  background: transparent;
  padding: 16px 0;
}

.search-input::placeholder {
  color: #b2bec3;
}

.loader {
  width: 24px;
  height: 24px;
  border: 3px solid #FFF5E6;
  border-top: 3px solid #FF6B35;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

.search-button {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  border: none;
  background: linear-gradient(135deg, #FF6B35 0%, #F7931E 100%);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.4s ease;
  box-shadow: 0 8px 24px rgba(255, 107, 53, 0.4);
}

.search-button:hover {
  transform: scale(1.08) rotate(90deg);
  box-shadow: 0 12px 32px rgba(255, 107, 53, 0.5);
}

.search-button:active {
  transform: scale(0.95);
}

.search-button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  transform: none;
}

@media (max-width: 768px) {
  .search-container {
    padding: 6px 6px 6px 20px;
  }
  
  .search-input {
    font-size: 1rem;
    padding: 14px 0;
  }
  
  .search-button {
    width: 50px;
    height: 50px;
  }
}
</style>