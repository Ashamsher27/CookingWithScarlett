//recipeRoutes.js: Routes for handling database operations.


const express = require('express');
const router = express.Router();
const recipeController = require('../controllers/recipeController');

router.post('/', recipeController.createRecipe);
router.get('/', recipeController.getAllRecipes);
router.put('/:id', recipeController.updateRecipe);
router.delete('/:id', recipeController.deleteRecipe);

module.exports = router;