import SideBar from "../../src/components/recipelookup/SideBar";
import Title from "../../src/components/recipelookup/Title";
import DisplayRecipe from "../../src/components/recipelookup/DisplayRecipe";
import { useState } from "react";
import { Box } from "@mui/material";

const url =
  "https://api.spoonacular.com/recipes/random?apiKey=34638b0a66394dec9ee3da6fab1e6423";

export default function RecipeLookup() {
  const [currentRecipe, setRecipe] = useState({});

  const callApi = async () => {
    const res = await fetch(url);
    const json = await res.json();
    console.log(json.recipes[0]);
    const randomName = json.recipes[0].title;
    setRecipe(json.recipes[0]);
  };

  return (
    <Box className="App">
      <SideBar setRecipe={setRecipe} callApi={callApi} />
      <Box>
        <Title />
        <DisplayRecipe currentRecipe={currentRecipe} />
      </Box>
    </Box>
  );
}
