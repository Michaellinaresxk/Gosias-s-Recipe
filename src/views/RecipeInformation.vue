<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { useRecipesStore } from '../stores/recipes'
import NutritionFacts from '../components/NutritionFacts.vue'
import HeroSection from '@/components/HeroSection.vue';
import heroImage from '@/assets/img/main-hero-img.jpg';

const props = defineProps<{
  id: string
}>()

const recipeStore = useRecipesStore()

console.log(recipeStore)
onMounted(() => {
  recipeStore.fetchRecipeById(props.id)
})


//  color: #6c757d;   pra los titulos 
//  otro    color: #42a3b8;      color: #f9c132;

// const formattedSummary = computed(() => {
//   return recipeStore.selectedRecipe.summary
//     .replace(/<b>(.*?)<\/b>/g, '<strong>$1</strong>') // Reemplaza <b> por <strong>
//     // .replace(/\./g, '.<br>') // Agrega saltos de línea al final de cada oración
// })

// const formattedInstructions = computed(() => {
//   return recipeStore.selectedRecipe.instructions
//     .replace(/<b>(.*?)<\/b>/g, '<strong>$1</strong>') // Reemplaza <b> por <strong>
//     // .replace(/\./g, '.<br>') // Agrega saltos de línea al final de cada oración
// })


// aggregateLikes   - esto es para la valoracion


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

  <!-- <h5>{{ recipeStore.selectedRecipe.dishTypes }}</h5>
  <h5>{{ recipeStore.selectedRecipe.aggregateLikes }}</h5> -->
  <NutritionFacts />
  <h2 class="text-center mt-5 mb-10">{{ recipeStore.selectedRecipe.title }}</h2>
        <h6 class="title mx-10 mt-10 mb-5">Summary:</h6>
        <!-- <p class="px-10" v-html="formattedSummary"></p> -->
     
  

        <article class="d-flex justify-center flex-column align-center">
          <h6 class="title  mt-10">Ingredients:</h6>
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
            <!-- <p v-html="formattedInstructions"></p> -->
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

        <div class="mx-10 mb-10">
          <h5 class="title mb-5 mt-10">Recipe Info:</h5>

          <div class="notice notice-info ">
            <strong class="notice-warning">Vegan:</strong>
            {{ recipeStore.selectedRecipe.vegan }}
          </div>

     
            <div class="notice notice-success">
              <strong>Is a popular Recipe ?</strong>
              {{ recipeStore.selectedRecipe.veryPopular }}
            </div>


            <div class="notice notice-purple">
              <strong>Vegetarian ?</strong>
              {{ recipeStore.selectedRecipe.vegetarian }}
            </div>


            <div class="notice notice-warning">
              <strong color="amber-darken-1">Very Healthy:</strong>
              {{ recipeStore.selectedRecipe.veryHealthy }}
            </div>
        </div>
      </div>

  </main>
</template>

<style scoped>

.title {
  font-size: 1.2em;
  color: #393939;
}

.notice {
  padding: 15px;
  background-color: #fafafa;
  border-left: 6px solid #7f7f84;
  margin-bottom: 10px;
  -webkit-box-shadow: 0 5px 8px -6px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: 0 5px 8px -6px rgba(0, 0, 0, 0.2);
  box-shadow: 0 5px 8px -6px rgba(0, 0, 0, 0.2);
}
.notice-success  {
  border-color:#80d651;
}
.notice-success > strong {
  color: #80d651;
}
.notice-info {
  border-color: #45abcd;
}
.notice-info > strong {
  color: #45abcd;
}
.notice-warning {
  border-color: #feaf20;
}
.notice-warning > strong {
  color: #feaf20;
}

.notice-purple {
  border-color: #a045cd;
}
.notice-purple > strong {
  color: #a045cd;
}
</style>