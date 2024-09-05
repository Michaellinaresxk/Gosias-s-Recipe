<script setup lang="ts">
import RecipeCardList from "@/components/RecipeCardList.vue"
import HeroSection from "@/components/HeroSection.vue"
import { useRecipesStore } from '../stores/recipes'


// Referencia al store de recetas
const recipeStore = useRecipesStore()

// Función para manejar la búsqueda de recetas
const searchRecipes = (query: string) => {
  recipeStore.searchRecipes(query)
}
</script>

<template>
  <main>

    <HeroSection @searchRecipe="searchRecipes" />
    <RecipeCardList
      :recipes="recipeStore.recipes"
      :baseUri="recipeStore.baseUri"
      :loading="recipeStore.loading"/>
  </main>
</template>
