const express = require('express');
const ingredientController = require('../controllers/ingredientController');

const router = express.Router();

router.post('/', ingredientController.createIngredient);
router.get('/', ingredientController.getAllIngredients);
router.put('/:id', ingredientController.updateIngredient);
router.delete('/:id', ingredientController.deleteIngredient);

module.exports = router;