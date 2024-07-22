//ingredients.js model

const mongoose = require("mongoose");

const ingredientSchema = new mongoose.Schema({
  nameOfIngredient: {
    type: String, 
    required: true
  },
  quantityOfIngredient: {
    type: Number,
    required: true
  }  
});

const ingredientModel = mongoose.model("Ingredient", ingredientSchema);
module.exports = ingredientModel;