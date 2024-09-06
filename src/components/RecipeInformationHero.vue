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
      <v-img :src="heroImage" class="align-center hero-image" height="300px" cover />
    </v-row>
  </v-container>
</template>
