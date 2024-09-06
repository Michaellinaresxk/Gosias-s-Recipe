<script setup lang="ts">
const props = defineProps<{
  ingredients: string[];
}>()



</script>


<template>





  <section>
    <article>
      <h6 class="ingradients-title">Ingredients:</h6>
            <div class="ingredents-content">
              <div class="ingredients-list mb-3">
                <ul>
                  <li
                    v-for="ingredient in ingredients."
                    :key="ingredient.id"
                  >
                    {{ ingredient.original }}
                  </li>
                </ul>
              </div>
            </div>
    </article>

    <article>

      <div class="preparation">
            <h6 class="ingradients-title">Preparation:</h6>
            <div class="instruction-content">
              <p class="instruction">
                {{ recipeInformation.instructions }}
              </p>
            </div>
          </div>
          <div class="secundary-info">
            <span class="badge badge-info"
              >Servings: {{ recipeInformation.servings }}</span
            >
            <span class="badge badge-secondary mr-10"
              >Ready in : {{ recipeInformation.readyInMinutes }} Min.</span
            >
          </div>
    </article>
  </section>

</template>