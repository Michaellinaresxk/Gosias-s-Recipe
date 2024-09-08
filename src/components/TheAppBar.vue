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
               <v-app-bar-title class="ml-5 mb-1">Eat-Smart</v-app-bar-title>
             </RouterLink>
     
           </v-app-bar>
     </v-layout>
</template>
