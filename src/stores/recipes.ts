import { ref } from 'vue'
import { defineStore } from 'pinia'
import { getRecipes } from '../api/ApiConfig'

export const useRecipesStore = defineStore('recipes', () => {
  const recipes = ref([])
  const baseUri = ref('')
  const loading = ref(false)
  const error = ref(null)

  const searchRecipes = async (query: string) => {
    loading.value = true
    error.value = null
    try {
      const { recipes: results, baseUri: uri } = await getRecipes(query)
      recipes.value = results
      baseUri.value = uri
    } catch (err) {
      console.error(err)
      error.value = 'Failed to fetch recipes. Please try again.'
    } finally {
      loading.value = false
    }
  }

  return {
    recipes,
    baseUri,
    loading,
    error,
    searchRecipes
  }
})
