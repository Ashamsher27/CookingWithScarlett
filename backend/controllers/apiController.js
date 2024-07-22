const axios = require('axios');
require('dotenv').config();

const apiClient = axios.create({
  baseURL: 'https://api.spoonacular.com',
  headers: {
    'Content-Type': 'application/json',
  },
});

// GET https://api.spoonacular.com/recipes/complexSearch
//http://localhost:3000/api/search?query=pasta POSTMAN / browser test


// TODO: UPDATE API CALLS TO PUT APIKEY IN HEADER INSTEAD OF PARAM

const searchRecipes = async (req, res) => {
  const { query } = req.query;

  try {
    const response = await apiClient.get(`/recipes/complexSearch`, {
      params: {
        query,
      },
      headers: {
        'Authorization': `Bearer ${process.env.SPOONACULAR_API_KEY}`,
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
        ingredients,
      },
      headers: {
        'Authorization': `Bearer ${process.env.SPOONACULAR_API_KEY}`,
      },
    });

    res.json(response.data);
  } catch (error) {
    console.error('Error fetching recipes:', error.response ? error.response.data : error.message);
    res.status(500).send('Error fetching recipes');
  }
};

const addRecipe = async (req, res) => {
  const { query, cuisine, ingredients, intolerances, instructions } = req.body;

  try {
    const response = await apiClient.post('/recipes', {
      query,
      cuisine,
      ingredients,
      intolerances,
      instructions
    }, {
      headers: {
        'Authorization': `Bearer ${process.env.SPOONACULAR_API_KEY}`,
        'Content-Type': 'application/json'
      }
    });

    res.json(response.data);
  } catch (error) {
    console.error('Error adding recipe:', error.response ? error.response.data : error.message);
    res.status(500).send('Error adding recipe');
  }
};

module.exports = { searchRecipes, searchRecipesByIngredients, addRecipe};