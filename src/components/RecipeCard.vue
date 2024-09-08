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

    <v-img :src="baseUri + recipe.image" height="150px" cover />

    <v-card-item>
      <v-card-title>{{ recipe.title }}</v-card-title>

    </v-card-item>


    <v-divider class="mx-4 mb-1"></v-divider>

    <v-card-title>Information:</v-card-title>

    <div class="px-4 mb-2">
      <v-chip-group v-model="selection">
        <v-chip   color="cyan" >Servings: {{ recipe.servings}} </v-chip>
        <v-chip   color="cyan">Ready in: {{ recipe.readyInMinutes}} </v-chip>
      </v-chip-group>
    </div>

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
