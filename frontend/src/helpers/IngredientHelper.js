import axios from 'axios';

const Ingredient_API_URL = process.env.REACT_APP_API_URL || 'http://localhost:3000/ingredientsAPI';

// Function to add an ingredient
export const addIngredient = async (ingredient) => {
    try {
      const response = await axios.post(Ingredient_API_URL, ingredient);
      return response.data;
    } catch (error) {
      console.error('Error adding ingredient:', error);
      throw error;
    }
  };
  
  export const getAllIngredients = async () => {
    try {
      const response = await axios.get(Ingredient_API_URL);
      return response.data;
    } catch (error) {
      console.error('Error fetching ingredients:', error);
      throw error;
    }
  };

// Function to delete an ingredient
export const deleteIngredient = async (id) => {
    try {
        const response = await axios.delete(`${Ingredient_API_URL}/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error deleting ingredient:', error);
        throw error;
    }
};