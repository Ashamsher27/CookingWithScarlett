import React, { useState, useEffect } from "react";
import RecipeForm from '../RecipeForm/RecipeForm';
import RecipeList from '../RecipeList/RecipeList';
import "./MyRecipes.css"
import { getAllRecipes } from "../../helpers/RecipeHelper";
import BackgroundGreen from "../Backgrounds/BackgroundGreen";
import OverlayWhite from "../Backgrounds/OverlayWhite";

const MyRecipes = () => {
    const [recipes, setRecipes] = useState([]);

  const getList = () => {
    getAllRecipes().then(recipes => {
      setRecipes(recipes);
    });
  };

  //when the component loads, call the api 
  useEffect(() => {
    getList();
  }, []);
  return (
    <div>
        <div>
        <RecipeForm onUpdate={getList} />
        </div>
        <div>
        <RecipeList recipes={recipes} onUpdate={getList} />
        </div>
        <OverlayWhite />
        <BackgroundGreen />
    </div>
  );
};

export default MyRecipes;