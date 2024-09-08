<script setup lang="ts">
import { useRecipesStore } from '../stores/recipes'

const recipeStore = useRecipesStore()
</script>

<template>
  <article>
    <div class="d-flex justify-space-around mt-10 ">
      <v-icon color="cyan-darken-1" icon="mdi-sprout" size="large"></v-icon>
      <v-icon color="orange-lighten-2" icon="mdi-sprout" size="large"></v-icon>
      <v-icon color="blue-grey-lighten-1" icon="mdi-percent" size="large"></v-icon>
    </div>

    <div class="nutrition-facts-details mt-2 mb-10 d-flex justify-space-around">
      <h6 class="nutrition-subtitle">
        Vegetarian: <span class="info"> {{ recipeStore.selectedRecipe.vegetarian }} </span>
      </h6>
      <h6 class="nutrition-subtitle">
        Gluten Free: <span class="info">{{ recipeStore.selectedRecipe.glutenFree }}</span>
      </h6>
      <h6 class="nutrition-subtitle">
        Health Score: <span class="info">{{ recipeStore.selectedRecipe.healthScore }}%</span>
      </h6>
    </div>
  </article>
</template>

<style>
.info {
  color: #00acc1;
  font-size: 1.1em;
}

.gray {
  color: #828282;
}
/* .info > strong {
  color: #45abcd;
} */
.nutrition-subtitle {
  color: #828282;
  font-size: 0.7em;
}
</style>
