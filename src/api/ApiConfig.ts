import axios from 'axios'

axios.defaults.headers.common['X-RapidAPI-Host'] = import.meta.env.VITE_BASE_URL
axios.defaults.headers.common['X-RapidAPI-Key'] = import.meta.env.VITE_APIKEY

// returns recipes searched from input
export const getRecipes = (input: string) => {
  const config = {
    params: {
      number: 10,
      query: input
    }
  }
  return axios
    .get('https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/search', config)
    .then((response) => {
      console.log(response)
      const baseUri = response.data.baseUri
      const recipes = response.data.results
      return { recipes, baseUri }
    })
    .catch((err) => console.log(err))
}
