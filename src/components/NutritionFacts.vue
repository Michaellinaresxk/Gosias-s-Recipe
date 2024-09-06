
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
      color="green-darken-2"
          icon="mdi-sprout"
      size="large"
    ></v-icon>
    <v-icon
      color="green-darken-2"
      icon="mdi-percent"
      size="large"
    ></v-icon>
   </div>

      <div class="nutrition-facts-details mt-2 mb-5 d-flex justify-space-around">
            <h6>
              Vegetarian: <span> {{ recipeStore.selectedRecipe.vegetarian }} </span>
            </h6>
            <h6>
              Gluten Free: <span>{{ recipeStore.selectedRecipe.glutenFree }}</span>
            </h6>
            <h6>
              Health Score: <span>{{ recipeStore.selectedRecipe.healthScore }}%</span>
            </h6>  
      </div>
   </article>   
</template>