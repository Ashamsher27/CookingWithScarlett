import React, { useState } from "react";
import { createRecipe } from "../../helpers/RecipeHelper";
import "./RecipeForm.css";

const RecipeForm = ({ onUpdate }) => {
  const [recipeName, setRecipeName] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [intolerances, setIntolerances] = useState("");
  const [cuisine, setCuisine] = useState("");
  const [instructions, setInstructions] = useState("");

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await createRecipe({
        recipeName,
        ingredients,
        intolerances,
        cuisine,
        instructions,
      });
      onUpdate(); // Call the onUpdate function to refresh the recipe list
      setRecipeName("");
      setIngredients("");
      setIntolerances("");
      setCuisine("");
      setInstructions("");
    } catch (error) {
      console.error("Error creating recipe:", error);
    }
  };

  return (
    <div className="recipe-form-form-container">
    <form onSubmit={handleSubmit}>
      <label>
        Recipe Name:
        <input
          type="text"
          placeholder="Recipe Name"
          value={recipeName}
          onChange={e => setRecipeName(e.target.value)}
        />
      </label>
      <br></br>

      <label>
        Ingredients:
        <input
          type="text"
          placeholder="Ingredients"
          value={ingredients}
          onChange={e => setIngredients(e.target.value)}
        />
      </label>
      <br></br>

      <label>
        Intolerances:
        <input
          type="text"
          placeholder="Intolerances"
          value={intolerances}
          onChange={e => setIntolerances(e.target.value)}
        />
      </label>
      <br></br>

      <label>
        Cuisine:
        <input
          type="text"
          placeholder="Cuisine"
          value={cuisine}
          onChange={e => setCuisine(e.target.value)}
        />
      </label>
      <br></br>

      <label>
        Instructions:
        <input
          type="text"
          placeholder="Instructions"
          value={instructions}
          onChange={e => setInstructions(e.target.value)}
        />
      </label>
      <br></br>
      <div className="recipe-form-form-button">
      <button id="recipe-form-add-button" type="submit"> (ﾉ´ヮ`)ﾉ*: ･ﾟAdd recipe?</button>
      </div>
    </form>
    </div>
  );
};

export default RecipeForm;