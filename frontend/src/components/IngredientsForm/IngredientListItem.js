import React, {useState} from "react";
import { deleteIngredient } from '../../helpers/IngredientHelper';

const IngredientListItem = ({ ingredient, ingredientImages, onUpdate }) => {
  // Get the image URL from ingredientImages object
  const imgSrc = ingredientImages[ingredient.nameOfIngredient] || '/images/default.png'; // Fallback image

  const throwAway = () => {
    deleteIngredient(ingredient._id).then(() => {
      onUpdate();
    }).catch(error => {
      console.error('Error deleting ingredient:', error);
    });
  };

  const [showOverlay, setShowOverlay] = useState(false);

  const handleClick = () => {
    setShowOverlay(true);
  };

  const handleCancel = () => {
    setShowOverlay(false);
  };

  return (
    <div className="pantry-shelf-ingredient">
      {showOverlay && (
        <div className="overlay-ingredient">
          <div className="overlay-content">
            <p id="overlay-content-delete-this"><strong>( ´ ▽ ` )ﾉ </strong>Would you like to delete this?</p>
            <img src={imgSrc} alt={ingredient.nameOfIngredient} />
            <p>{ingredient.nameOfIngredient} x{ingredient.quantityOfIngredient}</p>
            <br></br>
            <button onClick={throwAway}><strong>( ´ ꒳ ` ) </strong>Yes!</button>
            <button onClick={handleCancel}><strong>ヽ(°〇°)ﾉ </strong> No!</button>
          </div>
        </div>
      )}
      <img src={imgSrc} alt={ingredient.nameOfIngredient} onClick={handleClick} style={{ zIndex: 0 }} />
      <p>{ingredient.nameOfIngredient} x{ingredient.quantityOfIngredient}</p>
    </div>
  );
};

export default IngredientListItem;