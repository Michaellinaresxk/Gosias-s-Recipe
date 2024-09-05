<script setup lang="ts">
import { ref } from "vue"
import heroImage from '@/assets/img/main-hero-img.jpg';

//   defineProps<{
//   heroTitle: string
//   heroImg: string
// }>()

const herotitle = ref("The Gosia`s recipes")


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
    </v-container>
</template>
