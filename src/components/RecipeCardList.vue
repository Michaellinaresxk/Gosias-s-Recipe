<script setup lang="ts">
import RecipeCard from './RecipeCard.vue'
defineProps({
  recipes: Array,
  baseUri: String,
  loading: Boolean,
  error: String
})
</script>

<template>
  <v-row v-if="loading">Loading...</v-row>
  <v-row v-else-if="error">{{ error }}</v-row>
  <v-row v-else>
    <v-col v-for="recipe in recipes" :key="recipe.id" cols="12" md="6">
      <RecipeCard :recipe="recipe" :baseUri="baseUri" />
    </v-col>
  </v-row>
</template>
