<script setup lang="ts">
import {RouterView } from 'vue-router'
 
import TheAppBar  from '@/components/TheAppBar.vue'
import TheFooter  from '@/components/TheFooter.vue'
 
</script>

<template>
  <RouterView />
  <header>
      <TheAppBar />
  </header>


  <TheFooter />
</template> 
