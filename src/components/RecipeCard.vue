<script setup lang="ts">
import { defineProps } from 'vue'

defineProps({
  recipe: Object,
  baseUri: String
})
</script>

<template>
  <v-card
    :disabled="loading"
    :loading="loading"
    class="mx-auto my-12"
    max-width="374"
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
      <v-card-title>{{ recipe.title }}</v-card-title>

      <v-card-subtitle>
        <span class="me-1">Health Score: 100%</span>

        <v-icon
          color="error"
          icon="mdi-fire-circle"
          size="small"
        ></v-icon>
      </v-card-subtitle>
    </v-card-item>

    <v-card-text>
      <v-row
        align="center"
        class="mx-0"
      >
        <v-rating
          :model-value="4.5"
          color="amber"
          density="compact"
          size="small"
          half-increments
          readonly
        ></v-rating>

 
      </v-row>

      <div>Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.</div>
    </v-card-text>

    <v-divider class="mx-4 mb-1"></v-divider>

    <v-card-title>Information:</v-card-title>

    <div class="px-4 mb-2">
      <v-chip-group v-model="selection">
        <v-chip   color="cyan" >Servings: 6 </v-chip>
        <v-chip   color="cyan">Ready in: 7 min </v-chip>
      </v-chip-group>
    </div>

    <v-card-actions>
      <v-btn
        color="orange-lighten-2"
        text="Preparation"
        block
        variant="flat"
      ></v-btn>
    </v-card-actions>
  </v-card>
</template>
