const axios = require('axios');
require('dotenv').config();

const apiClient = axios.create({
  baseURL: 'https://api.spoonacular.com',
});

// GET https://api.spoonacular.com/recipes/complexSearch
//http://localhost:3000/api/search?query=pasta POSTMAN / browser test

const searchRecipes = async (req, res) => {
  const { query } = req.query;

  try {
    const response = await apiClient.get('/recipes/complexSearch', {
      params: {
        apiKey: process.env.SPOONACULAR_API_KEY,
        query,
      },
    });

    res.json(response.data);
  } catch (error) {
    console.error('Error fetching recipes:', error.response ? error.response.data : error.message);
    res.status(500).send('Error fetching recipes');
  }
};

// GET https://api.spoonacular.com/recipes/findByIngredients
//http://localhost:3000/api/searchByIngredients?ingredients=chicken POSTMAN / browser test
//http://localhost:3000/api/searchByIngredients?ingredients=chicken,tomato POSTMAN / browser test
const searchRecipesByIngredients = async (req, res) => {
  const { ingredients } = req.query;

  try {
    const response = await apiClient.get('/recipes/findByIngredients', {
      params: {
        apiKey: process.env.SPOONACULAR_API_KEY,
        ingredients,
      },
    });

    res.json(response.data);
  } catch (error) {
    console.error('Error fetching recipes:', error.response ? error.response.data : error.message);
    res.status(500).send('Error fetching recipes');
  }
};

module.exports = { searchRecipes, searchRecipesByIngredients };