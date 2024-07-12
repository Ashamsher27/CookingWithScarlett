//recipeController.js: Handles CRUD operations with your database.

const Recipe = require('../models/recipes');

const getRecipes = async (req, res) => {
  try {
    const recipes = await Recipe.find();
    res.json(recipes);
  } catch (error) {
    console.error('Error fetching recipes from database:', error);
    console.log(error);
    res.status(500).send('Error fetching recipes');
  }
};

const addRecipe = async (req, res) => {
  const { recipeName, ingredients, cuisine, intolerances, instructions } = req.body;
  try {
    const newRecipe = new Recipe({
      recipeName,
      ingredients,
      cuisine,
      intolerances,
      instructions,
    });
    await newRecipe.save();
    res.status(201).send('Recipe added');
  } catch (error) {
    console.error('Error adding recipe:', error);
    res.status(500).send('Error adding recipe');
  }
};

const updateRecipe = async (req, res) => {
  try {
    const recipe = await Recipe.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(recipe);
  } catch (error) {
    console.error('Error updating recipe:', error);
    res.status(400).send('Failed to update recipe');
  }
};

const deleteRecipe = async (req, res) => {
  try {
    const recipe = await Recipe.findByIdAndDelete(req.params.id);
    if (!recipe) {
      return res.status(404).send('Recipe not found');
    }
    res.json({ message: 'Recipe deleted successfully', recipe });
  } catch (error) {
    console.error('Error deleting recipe:', error);
    res.status(400).send('Failed to delete recipe');
  }
};


module.exports = { getRecipes, addRecipe, updateRecipe, deleteRecipe };