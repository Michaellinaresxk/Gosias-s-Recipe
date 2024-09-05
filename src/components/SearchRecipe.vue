<template>
      <v-text-field
        :loading="loading"
        append-inner-icon="mdi-magnify"
        density="compact"
        label="Search recipes..."
        variant="solo"
        hide-details
        single-line
        v-model="recipeQuery"
  @keyup.enter="handleSearchRecipe"
        required
      ></v-text-field>
</template>
<script setup lang="ts">
  import { ref } from "vue";

  const emit = defineEmits<{
    (e: 'handleSearchRecipe', recipeQuery: string): void
  }>()

   const recipeQuery = ref("")
   const loaded = ref(false)
   const loading = ref(false)


  const handleSearchRecipe = () => {
    loadingEffect()
     emit('handleSearchRecipe', recipeQuery.value)
  }

  const loadingEffect = () =>{
    setTimeout(() => {
        loading.value = false
        loaded.value = true
        }, 2000)
  }

</script>
