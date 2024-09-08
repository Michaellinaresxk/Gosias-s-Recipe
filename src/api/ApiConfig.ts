import axios from 'axios'

axios.defaults.headers.common['X-RapidAPI-Host'] = import.meta.env.VITE_BASE_URL
axios.defaults.headers.common['X-RapidAPI-Key'] = import.meta.env.VITE_APIKEY

// returns recipes searched from input
export const getRecipes = async (input: string) => {
  const config = {
    params: {
      number: 10,
      query: input
    }
  }

  try {
    const response = await axios.get(
      'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/search',
      config
    )

    console.log(response) // Verifica que estás recibiendo una respuesta válida

    if (response.data && response.data.results && response.data.baseUri) {
      const baseUri = response.data.baseUri
      const recipes = response.data.results
      return { recipes, baseUri }
    } else {
      throw new Error('La estructura de los datos no es la esperada')
    }
  } catch (err) {
    console.error('Error al obtener las recetas:', err)
    throw err // Lanza el error para que el componente pueda manejarlo
  }
}

export const getRecipeInformation = (id: string) => {
  const config = {}
  return axios
    .get(
      `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/${id}/information`,
      config
    )
    .then((response) => {
      console.log(response.data)
      return response.data
    })
    .catch((err) => console.log(err))
}
