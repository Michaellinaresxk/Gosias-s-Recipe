<script setup lang="ts">
import RecipeCardList from "@/components/RecipeCardList.vue"
import HeroSection from "@/components/HeroSection.vue"
import { useRecipesStore } from '../stores/recipes'
import { onMounted } from "vue"

const recipeStore = useRecipesStore()
 
const searchRecipes = (query: string) => {
  recipeStore.searchRecipes(query)
}

onMounted(() => {
  searchRecipes('salad')
})
</script>

<template>
  <main>
    <HeroSection @searchRecipe="searchRecipes" />
    <RecipeCardList
      :recipes="recipeStore.recipes"
      :baseUri="recipeStore.baseUri"
      :loading="recipeStore.loading"
      :error="recipeStore.error"
    />
  </main>
</template>