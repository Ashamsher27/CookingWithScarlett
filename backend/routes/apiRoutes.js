//apiRoutes.js: Routes for handling API calls.

const express = require('express');
const router = express.Router();
const apiController = require('../controllers/apiController');

// Define routes
router.get('/search', apiController.searchRecipes);
router.get('/searchByIngredients', apiController.searchRecipesByIngredients);

module.exports = router;


