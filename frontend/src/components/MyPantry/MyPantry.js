import React, { useState, useEffect } from 'react';
import './MyPantry.css';
import IngredientsForm from "../IngredientsForm/IngredientsForm"
import PantryImage from "../../assets/images/ScarlettPantry.png"
import BackgroundBlue from '../Backgrounds/BackgroundBlue';
import OverlayWhite from '../Backgrounds/OverlayWhite';
import { getAllIngredients } from '../../helpers/IngredientHelper';
import IngredientList from '../IngredientsForm/IngredientList';
import milkImage from "../../assets/images/ScarlettMilk.png";
import beefImage from "../../assets/images/ScarlettBeef.png";
import eggImage from "../../assets/images/ScarlettEgg.png";
import butterImage from "../../assets/images/ScarlettButter.png";
import habaneroImage from "../../assets/images/ScarlettHabanero.png";
import cucumberImage from "../../assets/images/ScarlettCucumber.png"


const MyPantry = () => {
  const [ingredients, setIngredients] = useState([]);

  const ingredientImages = {
    milk: milkImage,
    beef: beefImage,
    egg: eggImage,
    butter: butterImage,
    habanero: habaneroImage,
    cucumber: cucumberImage,
    // Add more ingredients as needed
  };

  const getIngredients = () => {
    getAllIngredients()
      .then((ingredients) => {
        setIngredients(ingredients);
      })
      .catch(error => {
        console.error('Error fetching ingredients:', error);
      });
  };


  useEffect(() => {
    getIngredients();
  }, []);

  return (
  <div>
          <IngredientsForm onUpdate={getIngredients} ingredientImages={ingredientImages} />

        <div className="pantry-shelf-container">
            <IngredientList ingredients={ingredients} ingredientImages={ingredientImages} onUpdate={getIngredients}/>
        </div>
        <div className="scarlett-pantry">
        <img src={PantryImage} alt="Scarlett's Pantry" />
        </div>
      <OverlayWhite />
      <BackgroundBlue />
    </div>
  );
};

export default MyPantry;