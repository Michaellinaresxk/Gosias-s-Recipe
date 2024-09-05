<script setup lang="ts">
import heroImage from '@/assets/img/main-hero-img.jpg'
import SearchRecipe from './SearchRecipe.vue'

const emit = defineEmits(['searchRecipe'])

const handleSearchRecipe = (recipeQuery: string) => {
  emit('searchRecipe', recipeQuery)
}
</script>

<template>
  <v-container fluid>
    <v-row>
      <v-img :src="heroImage" class="align-center" height="300px" cover>
        <v-card-title class="text-center">
          <text-h1 class="font-weight-black">The Gosia's Recipes</text-h1>
        </v-card-title>
      </v-img>
    </v-row>
    <SearchRecipe @handleSearchRecipe="handleSearchRecipe" />
  </v-container>
</template>