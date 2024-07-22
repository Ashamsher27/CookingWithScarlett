import React, { useState } from "react";
import './IngredientsForm.css'
// import milkImage from "../../assets/images/ScarlettMilk.png";
// import beefImage from "../../assets/images/ScarlettBeef.png";
import { addIngredient } from "../../helpers/IngredientHelper";


const IngredientsForm = ({ onUpdate, ingredientImages }) => {
  const [quantityOfIngredient, setQuantityOfIngredient] = useState(1);
  const [selectedIngredient, setSelectedIngredient] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const ingredient = {
        nameOfIngredient: selectedIngredient,
        quantityOfIngredient: quantityOfIngredient,
        imgFileName: `${selectedIngredient}.png`  // Assuming image filenames are named according to ingredients
      };
      await addIngredient(ingredient);
      onUpdate(); // Call the onUpdate function to refresh the ingredient list
      setQuantityOfIngredient(1);
      setSelectedIngredient("");
    } catch (error) {
      console.error("Error adding ingredient:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="ingredient-form-parent-container">
      <div className="ingredient-form-form">
      <label>
        Which ingredient do you wish to add? <br />
        <select
          value={selectedIngredient}
          onChange={(e) => setSelectedIngredient(e.target.value)}
        >
          <option value="">--Please choose an option--</option>
          <option value="milk">Milk</option>
          <option value="beef">Beef</option>
          <option value="egg">Egg</option>
          <option value="butter">Butter</option>
          <option value="habanero">Brent's Habanero</option>
          <option value="cucumber">Scarlett's Cucumber</option>
          {/* Add more ingredients as options here */}
        </select>
      </label>
      <label>
        <br />
        How many?
        <input
          type="number"
          value={quantityOfIngredient}
          onChange={(e) => setQuantityOfIngredient(parseInt(e.target.value))}
          min="1"
        />
      </label>
      <button type="submit">Add</button>
      <p id="please-click-ingredient">please click on the ingredient to delete|･д･)ﾉ</p>
      </div>
      </div>
    </form>
  );
};

export default IngredientsForm;