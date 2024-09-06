<script setup lang="ts">
import RecipeCardList from "@/components/RecipeCardList.vue"
import HeroSection from "@/components/HeroSection.vue"
import { useRecipesStore } from '../stores/recipes'
import { onMounted } from "vue"
import heroImage from '@/assets/img/main-hero-img.jpg'

// Referencia al store de recetas
const recipeStore = useRecipesStore()
 
// Función para manejar la búsqueda de recetas
const searchRecipes = (query: string) => {
  recipeStore.searchRecipes(query)
}

onMounted(() => {
  searchRecipes('salad')
})


</script>

<template>
  <main>

    <HeroSection @searchRecipe="searchRecipes" :heroImage="heroImage"  />
    <RecipeCardList
      :recipes="recipeStore.recipes"
      :baseUri="recipeStore.baseUri"
      :loading="recipeStore.loading"/>

      
  </main>
</template>
