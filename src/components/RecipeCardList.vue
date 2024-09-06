<script setup lang="ts">
import RecipeCard from './RecipeCard.vue'
import { useRouter } from 'vue-router'

defineProps({
  recipes: Array,
  baseUri: String,
  loading: Boolean,
  error: String
})

const router = useRouter()


const goToRecipeInformation = (id: string) => {
  router.push({
    name: 'RecipeInformation',  // Nombre de la ruta donde se muestra la información de la receta
    params: { id },             // Pasamos el ID de la receta como parámetro
  })
}

</script>

<template>
  <v-row v-if="loading">Loading...</v-row>
  <v-row v-else-if="error">{{ error }}</v-row>
  <v-row v-else>
    <v-col v-for="recipe in recipes" :key="recipe.id" cols="12" md="4"  sm="6"   lg="3"   xl="2">
      <RecipeCard :recipe="recipe" :baseUri="baseUri" @handleRecipeInformation="goToRecipeInformation" />
    </v-col>
  </v-row>
</template>
