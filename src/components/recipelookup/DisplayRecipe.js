import { useState, useEffect } from "react";

export default function DisplayRecipe() {
  const [currentRecipe, setRecipe] = useState();

  const url =
    "https://api.spoonacular.com/recipes/random?apiKey=3dd0a0e1bb084632878d8bd6074e22c1";

  const callApi = async () => {
    const res = await fetch(url);
    const json = await res.json();
    const randomName = json.recipes[0].title;
    setRecipe(randomName);
  };

  useEffect(() => {
    callApi();
  }, []);

  return (
    <div>
      <h1>{currentRecipe}</h1>
    </div>
  );
}
