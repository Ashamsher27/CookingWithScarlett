import React, {useState} from "react";
import "./RecipeListItems.css";
import { deleteRecipe, updateRecipe } from "../../helpers/RecipeHelper";


const RecipeListItems = ({ recipe, onUpdate }) => {
  const [showOverlay, setShowOverlay] = useState(false);
  const [editing, setEditing] = useState(false);
  const [readMore, setReadMore] = useState(false);

  const [recipeName, setRecipeName] = useState(recipe.recipeName);
  const [ingredients, setIngredients] = useState(recipe.ingredients);
  const [intolerances, setIntolerances] = useState(recipe.intolerances);
  const [cuisine, setCuisine] = useState(recipe.cuisine);
  const [instructions, setInstructions] = useState(recipe.instructions);

  const handleDelete = () => {
    deleteRecipe(recipe._id).then(() => {
      onUpdate();
      setShowOverlay(false); // Close the overlay after deletion
    }).catch(error => {
      console.error('Error deleting recipe:', error);
    });
  };

  const handleClick = () => {
    setShowOverlay(true);
  };

  const handleCancel = () => {
    setShowOverlay(false);
    setEditing(false);
  };

  const handleUpdate = () => {
    const updatedRecipe = {
      recipeName,
      ingredients,
      intolerances,
      cuisine,
      instructions
    };

    updateRecipe(recipe._id, updatedRecipe).then(() => {
      onUpdate();
      setEditing(false);
    }).catch(error => {
      console.error('Error updating recipe:', error);
    });
  };

  const toggleReadMore = () => {
    setReadMore(!readMore);
  };

  return (
    <div className="recipe-list-item-container">
      {editing ? (
        <div>
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
        <div className="recipe-list-form-container-buttons">
          <button id="recipe-list-form-save-button" onClick={handleUpdate}> ( *ˊᗜˋ* ) Save changes?</button>
          <button id="recipe-list-form-cancel-button" onClick={handleCancel}>(/▿＼) Cancel changes?</button>
          </div>
        </div>
      ) : (
        <div>
          <p>Recipe Name: {recipe.recipeName}</p>
          <p>Ingredients: {recipe.ingredients}</p>
          <p>Intolerances: {recipe.intolerances}</p>
          <p>Cuisine: {recipe.cuisine}</p>
          <p className={`instructions ${readMore ? 'full' : 'truncated'}`}>
            Instructions: {recipe.instructions} <span className="read-more-text" onClick={toggleReadMore}>
              <strong>{readMore ? ' Read Less' : ' Read More'}</strong>
            </span>
          </p>
        </div>
      )}
      <div className="recipe-list-item-container-buttons">
        <button id="recipe-list-update-button" onClick={() => setEditing(true)}>(  *ˊᵕˋ*  ) Update Recipe?</button>
        <button id="recipe-list-delete-button" onClick={handleClick}>( *`ー´* ) Delete Recipe?</button>
      </div>

      {showOverlay && (
        <div className="recipe-list-item-overlay">
          <div className="recipe-list-item-overlay-content">
            <p>Are you sure you want to delete this recipe?</p>
            <button onClick={handleDelete}><strong>Yes</strong></button>
            <button onClick={handleCancel}><strong>No</strong></button>
          </div>
        </div>
      )}
    </div>
  );
};

export default RecipeListItems;