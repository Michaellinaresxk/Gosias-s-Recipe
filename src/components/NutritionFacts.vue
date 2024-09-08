
<script setup lang="ts">
import { useRecipesStore } from '../stores/recipes'

const recipeStore = useRecipesStore()

</script>

<template>
<article>
      <div class="d-flex justify-space-around">
      <v-icon
      color="green-darken-2"
      icon="mdi-sprout"
      size="large"
    ></v-icon>
    <v-icon
      color="amber-darken-1"
          icon="mdi-thumb-up"
      size="large"
    ></v-icon>
    <v-icon
      color="grey-darken-1"
      icon="mdi-percent"
      size="large"
    ></v-icon>
   </div>

      <div class="nutrition-facts-details mt-2 mb-5 d-flex justify-space-around">
            <h6 class="gray">
              Vegetarian: <span class="info"> {{ recipeStore.selectedRecipe.vegetarian }} </span>
            </h6>
            <h6  class="gray">
              Gluten Free: <span class="info">{{ recipeStore.selectedRecipe.glutenFree }}</span>
            </h6>
            <h6 class="gray">
              Health Score: <span class="info">{{ recipeStore.selectedRecipe.healthScore }}%</span>
            </h6>  
      </div>
   </article>   
</template>

<style>
.info {
  color: #078293;
  font-size: 1.2em;
}

.gray {
  color: #828282;
  font-size: .7em;
}

.nutrition-subtitle {
  color: #828282;
  font-size: 0.7em;
}
</style>