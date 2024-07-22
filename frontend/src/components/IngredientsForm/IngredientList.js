import React from "react";
import IngredientListItem from "../IngredientsForm/IngredientListItem"

const IngredientList = ({ ingredients, ingredientImages, onUpdate }) => {
    return (
      <>
        {ingredients.map((ingredient) => (
          <IngredientListItem
            key={ingredient._id}
            ingredient={ingredient}
            ingredientImages={ingredientImages}
            onUpdate={onUpdate}
          />
        ))}
      </>
    );
  };
  
  export default IngredientList;