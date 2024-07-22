//ingredientController.js

const Ingredient = require('../models/ingredients');

const getAllIngredients = async (req, res) => {
  try {
    const ingredients = await Ingredient.find();
    res.json(ingredients);
  } catch (error) {
    console.error('Error getting ingredients from database:', error);
    res.status(500).send('Error getting ingredients');
  }
};

const createIngredient = async (req, res) => {
  const { nameOfIngredient, quantityOfIngredient, imgFileName } = req.body;

  // Validate quantity if needed
  if (isNaN(quantityOfIngredient) || quantityOfIngredient < 0) {
    return res.status(400).send('Invalid quantityOfIngredient');
  }

  // Construct the image URL
  const img = `/images/${imgFileName}`;

  try {
    const newIngredient = new Ingredient({ nameOfIngredient, quantityOfIngredient, img });
    await newIngredient.save();
    res.status(201).send('Ingredient added!');
  } catch (error) {
    console.error('Error adding ingredient:', error);
    res.status(500).send('Error adding ingredient');
  }
};

const updateIngredient = async (req, res) => {
  try {
    const ingredient = await Ingredient.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(ingredient);
  } catch (error) {
    console.error('Error updating ingredient:', error);
    res.status(400).send('Failed to update ingredient');
  }
};

const deleteIngredient = async (req, res) => {
  try {
    const ingredient = await Ingredient.findByIdAndDelete(req.params.id);
    if (!ingredient) {
      return res.status(404).send('Ingredient not found');
    }
    res.json({ message: 'Ingredient deleted successfully', ingredient });
  } catch (error) {
    console.error('Error deleting ingredient:', error);
    res.status(400).send('Failed to delete ingredient');
  }
};

module.exports = { getAllIngredients, createIngredient, updateIngredient, deleteIngredient };