//index.js: Combines all routes.

const express = require('express');
const apiRoutes = require('./apiRoutes');
const recipeRoutes = require('./recipeRoutes');
const router = express.Router();

router.use('/api', apiRoutes);
router.use('/recipes', recipeRoutes);

module.exports = router;