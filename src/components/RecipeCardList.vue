
<script setup lang="ts">
import RecipeCard  from "./RecipeCard.vue"
</script>
<template>
<div class="recipe-card__list">


  <RecipeCard />
  <RecipeCard />
  <RecipeCard />
  <RecipeCard />

</div>
</template>
<style>
.recipe-card__list {
  display: flex;
  gap: 2em;
  flex-wrap: wrap;
}
</style>