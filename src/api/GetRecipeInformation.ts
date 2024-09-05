import axios from 'axios'

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