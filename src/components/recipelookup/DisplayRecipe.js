<<<<<<< HEAD
import { useState, useEffect } from "react";

export default function DisplayRecipe() {
  const [currentRecipe, setRecipe] = useState();

  const url =
    "https://api.spoonacular.com/recipes/random?apiKey=3dd0a0e1bb084632878d8bd6074e22c1";
=======
import { Button } from "@mui/material";
import { useState } from "react";
import { RecipeCard, EmptyCard } from "./RecipeCard";

export default function DisplayRecipe() {
  const [currentRecipe, setRecipe] = useState({});

  const url =
    "https://api.spoonacular.com/recipes/random?apiKey=34638b0a66394dec9ee3da6fab1e6423";
>>>>>>> fb-database

  const callApi = async () => {
    const res = await fetch(url);
    const json = await res.json();
<<<<<<< HEAD
    const randomName = json.recipes[0].title;
    setRecipe(randomName);
  };

  useEffect(() => {
    callApi();
  }, []);

  return (
    <div>
      <h1>{currentRecipe}</h1>
=======
    console.log(json.recipes[0]);
    const randomName = json.recipes[0].title;
    setRecipe(json.recipes[0]);
  };

  if (!currentRecipe.title) {
    return (
      <div>
        <Button onClick={callApi}>Generate Recipe</Button>
        <EmptyCard />
      </div>
    );
  }

  return (
    <div>
      <Button onClick={callApi}>Generate Recipe</Button>
      <RecipeCard recipe={currentRecipe} />
>>>>>>> fb-database
    </div>
  );
}
