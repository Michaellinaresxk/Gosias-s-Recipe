<script setup lang="ts">
import { ref } from "vue"
import heroImage from '@/assets/img/main-hero-img.jpg';
import SearchRecipe from './SearchRecipe.vue';

//   defineProps<{
//   heroTitle: string
//   heroImg: string
// }>()

const herotitle = ref("The Gosia`s recipes")

const fetchQuery = (payload: string) => {
  console.log(payload)
}

</script>

<template>
  <v-container fluid>
      <v-row>
            <v-img
              :src="heroImage"
              class="align-center"
              height="300px"
              cover
            >
              <v-card-title class="text-center"><text-h1 class="font-weight-black">{{ herotitle }} </text-h1> </v-card-title>
            </v-img>

      </v-row>
      <SearchRecipe @handleSearchRecipe="fetchQuery" />
    </v-container>
</template>
