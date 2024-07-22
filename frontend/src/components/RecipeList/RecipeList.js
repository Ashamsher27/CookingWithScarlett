import React from "react";
import RecipeListItems from "../RecipeListItems/RecipeListItems";

const RecipeList = ({ onUpdate, recipes }) => {
  return (
    <>
      {recipes.map((recipe) => (
        <RecipeListItems
          key={recipe._id}
          recipe={recipe}
          onUpdate={onUpdate}
        />
      ))}
    </>
  );
};

export default RecipeList;