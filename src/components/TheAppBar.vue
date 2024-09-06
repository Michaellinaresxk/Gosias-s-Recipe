<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
     <v-layout> 
       <v-app-bar
             color="orange-lighten-2"
             density="compact"
           >


             <RouterLink to="/">
               <v-app-bar-title class="ml-5">Eat-Smart</v-app-bar-title>
             </RouterLink>
     
             <template v-slot:append>
               <v-btn icon="mdi-dots-vertical"></v-btn>
             </template>
           </v-app-bar>
     </v-layout>
</template>
