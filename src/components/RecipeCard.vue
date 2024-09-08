<script setup lang="ts">
import { defineProps } from 'vue'

defineProps({
  recipe: Object,
  baseUri: String
})

const emit = defineEmits<{
    (e: 'handleRecipeInformation', id: string): void
  }>()

const handleRecipeInformation = (id: string) => {
  emit('handleRecipeInformation', id)
}



</script>

<template>
  <v-card
    :disabled="loading"
    :loading="loading"
    class="mx-auto my-12"
    max-width="300"
  >
    <template v-slot:loader="{ isActive }">
      <v-progress-linear
        :active="isActive"
        color="deep-purple"
        height="4"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-img :src="baseUri + recipe.image" height="200px" cover />

    <v-card-item>
      <v-card-title class="text-wrap full-title">{{ recipe.title }}</v-card-title>
    </v-card-item>



    <v-card-actions>
      <v-btn
        color="orange-lighten-2"
        text="Preparation"
        block
        variant="flat"
        @click="handleRecipeInformation(recipe.id)"
      ></v-btn>
    </v-card-actions>
  </v-card>
</template>
<style scoped>
.full-title {
  white-space: normal;    /* Permite que el texto se divida en varias líneas */
  word-wrap: break-word;  /* Corta las palabras largas para evitar desbordamientos */
}
</style>