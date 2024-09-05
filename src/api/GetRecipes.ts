import axios from 'axios'

export const getRecipes = (input: string) => {
  const config = {
    params: {
      number: 10,
      query: input
    },
    headers: {
      'X-RapidAPI-Host': import.meta.env.VITE_API_HOST,
      'X-RapidAPI-Key': import.meta.env.VITE_API_KEY
    }
  }
  return axios
    .get('https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/search', config)
    .then((response) => {
      const baseUri = response.data.baseUri
      const recipes = response.data.results
      return { recipes, baseUri }
    })
    .catch((err) => console.log(err))
}
