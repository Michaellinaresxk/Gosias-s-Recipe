import { ref } from 'vue'
import { defineStore } from 'pinia'
import { getRecipes, getRecipeInformation } from '../api/ApiConfig'

export const useRecipesStore = defineStore('recipes', () => {
  const recipes = ref([])
  const baseUri = ref('')
  const loading = ref(false)
  const error = ref(null)

  // Nuevo estado para la información de una receta
  const selectedRecipe = ref(null)

  // Función para buscar recetas por término de búsqueda
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

  // Función para buscar una receta por ID
  const fetchRecipeById = async (id: string) => {
    loading.value = true
    error.value = null
    try {
      const recipe = await getRecipeInformation(id)
      selectedRecipe.value = recipe
    } catch (err) {
      console.error(err)
      error.value = 'Failed to fetch recipe information. Please try again.'
    } finally {
      loading.value = false
    }
  }

  return {
    recipes,
    baseUri,
    loading,
    error,
    selectedRecipe, // Retornamos la receta seleccionada
    searchRecipes,
    fetchRecipeById // Retornamos la nueva función
  }
})
