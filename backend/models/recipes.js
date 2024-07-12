//recipe.js: Defines the recipe schema

const mongoose = require("mongoose") // requiring the mongoose package

const recipeSchema = new mongoose.Schema({
    recipeName: {   
      type: String,
      unique: true,
      required: true,
    },

    ingredients: [
      {
        type: String,
        required: true,
      },
    ],

    intolerances: [
      {
        type: String,
        required: false,
      },
    ],

    cuisine: {
      type: String,
      required: false,
    },

    instructions: {
      type: String,
      required: true,
    },

    // addRecipe: {
    //   type: Boolean,
    //   default: false,
    // },

    // deleteRecipe: {
    //   type: Boolean, 
    //   default: false,
    // }
  });

const recipeModel = mongoose.model("Recipe", recipeSchema) // creating the model from the schema

module.exports = recipeModel // exporting the model

//or??
//module.exports = mongoose.model('Recipe', recipeSchema);