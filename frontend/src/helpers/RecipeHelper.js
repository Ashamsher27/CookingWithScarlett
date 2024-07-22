import axios from 'axios';

const Recipe_API_URL = process.env.REACT_APP_API_URL || 'http://localhost:3000/recipes';

export const createRecipe = async (recipe) => {
  try {
    const { data: newRecipe } = await axios.post(Recipe_API_URL, recipe);
    return newRecipe;
  } catch (error) {
    throw error.response.data; 
  }
};

export const getAllRecipes = async () => {
  try {
    const { data: recipes } = await axios.get(Recipe_API_URL);
    return recipes;
  } catch (error) {
    throw error.response.data; 
  }
};

// Function to delete an ingredient
export const deleteRecipe = async (id) => {
  try {
      const response = await axios.delete(`${Recipe_API_URL}/${id}`);
      return response.data;
  } catch (error) {
      console.error('Error deleting recipe:', error);
      throw error;
  }
};

export const updateRecipe = async (id, updatedRecipe) => {
  try {
      const response = await axios.put(`${Recipe_API_URL}/${id}`, updatedRecipe);
      return response.data;
  } catch (error) {
      console.error('Error updating recipe:', error);
      throw error;
  }
};