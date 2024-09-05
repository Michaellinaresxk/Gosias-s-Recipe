import axios from 'axios'

axios.defaults.headers.common['X-RapidAPI-Host'] = import.meta.env.VITE_BASE_URL
axios.defaults.headers.common['X-RapidAPI-Key'] = import.meta.env.VITE_APIKEY
// '4b2c0858d5msha5267a2c363cb8ep1929e5jsnd1c9182651b2'

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
