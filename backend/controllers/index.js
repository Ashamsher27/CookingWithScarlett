//index.js: Exports all controllers.

const apiController = require('./apiController');
const recipeController = require('./recipeController');
const ingredientController = require('./ingredientController');

module.exports = { apiController, recipeController, ingredientController };
