//index.js: Combines all routes.

const express = require('express');
const apiRoutes = require('./apiRoutes');
const recipeRoutes = require('./recipeRoutes');
const ingredientRoutes = require('./ingredientRoutes')
const router = express.Router();

router.use('/api', apiRoutes);
router.use('/recipes', recipeRoutes);
router.use('/ingredientsAPI', ingredientRoutes);

module.exports = router;