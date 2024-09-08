<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { useRecipesStore } from '../stores/recipes'
import NutritionFacts from '../components/NutritionFacts.vue'

const props = defineProps<{
  id: string
}>()

const recipeStore = useRecipesStore()

console.log(recipeStore)
onMounted(() => {
  recipeStore.fetchRecipeById(props.id)
})


const formattedSummary = computed(() => {
  return recipeStore.selectedRecipe.summary.split('.').map((sentence: string) => sentence.trim() + '.')
})

const formattedInstructions = computed(() => {
  return recipeStore.selectedRecipe.instructions.split('.').map((sentence: string) => sentence.trim() + '.')
})

// aggregateLikes   - esto es para la valoracion

// const heroImage = recipeStore.selectedRecipe.image;

// dishTypes []
</script>

<template>
  <main>
    <div class="mt-10 mb-10">
      <div v-if="recipeStore.loading">Loading recipe...</div>
      <div v-if="recipeStore.error">{{ recipeStore.error }}</div>
    </div>

      <div v-if="recipeStore.selectedRecipe">
        <v-container fluid>
    <v-row>
      <v-img :src="recipeStore.selectedRecipe.image" class="align-center hero-image" height="300px" cover />
    </v-row>
  </v-container>

        <h2 class="text-center mt-5 mb-10">{{ recipeStore.selectedRecipe.title }}</h2>
        <!-- <h5>{{ recipeStore.selectedRecipe.dishTypes }}</h5>
        <h5>{{ recipeStore.selectedRecipe.aggregateLikes }}</h5> -->
        <NutritionFacts />
        <h6 class="title mx-10 mb-5 mt-10">Summary:</h6>
        <p class="mx-10" v-html="formattedSummary"></p>

        <article>
          <h6 class="title px-10 mt-10">Ingredients:</h6>
            <div class="ingredients-list mt-5 px-10 mb-10">
              <ul>
                <li
                  v-for="ingredient in recipeStore.selectedRecipe.extendedIngredients"
                  :key="ingredient.id"
                >
                  {{ ingredient.original }}
                </li>
              </ul>
            </div>
        </article>

        <article class="mx-10">
          <div class="preparation">
            <h6 class="title mb-5">Preparation:</h6>
  
              <p v-html="formattedInstructions"></p>
          </div>
          <div class="secundary-info">
            <span class="badge badge-info"
              >Servings: {{ recipeStore.selectedRecipe.servings }}</span
            >
            <span class="badge badge-secondary mr-10"
              >Ready in : {{ recipeStore.selectedRecipe.readyInMinutes }} Min.</span
            >
          </div>
        </article>

        <div class="mx-10 mb-10 mt-10"  >
          <h5 class="title mb-3 mt-5">Nutrition Facts:</h5>

          <v-alert border="start" border-color="light-green-accent-4">
            <strong class="custom-color">Vegan:</strong>
            {{ recipeStore.selectedRecipe.vegan }}
          </v-alert>

          <v-alert class="mt-2" border="start" border-color="light-blue-accent-4">
            <div class="notice notice-warning">
              <strong>Is a popular Recipe ?</strong>
              {{ recipeStore.selectedRecipe.veryPopular }}
            </div>
          </v-alert>

          <v-alert class="mt-2" border="start" border-color="light-blue-lighten-4">
            <div class="notice notice-warning">
              <strong>Vegetarian ?</strong>
              {{ recipeStore.selectedRecipe.vegetarian }}
            </div>
          </v-alert>

          <v-alert class="mt-2" border="start" border-color="amber-darken-1">
            <div class="notice notice-warning">
              <strong color="amber-darken-1">Very Healthy:</strong>
              {{ recipeStore.selectedRecipe.veryHealthy }}
            </div>
          </v-alert>
        </div>
      </div>

  </main>
</template>

<style scoped>

.title {
  font-size: 1.2em;
  color: #656262;
}

.badge {
background-color: #656262;
margin-right:20px;
padding: 5px 10px;
color: aliceblue;
border-radius: 5px;
font-size: .9em;
font-weight: bold;
}

.badge-info {
  background-color: #078293;
}

</style>