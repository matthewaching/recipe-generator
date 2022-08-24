import SideBar from "../../src/components/recipelookup/SideBar";
import Title from "../../src/components/recipelookup/Title";
import DisplayRecipe from "../../src/components/recipelookup/DisplayRecipe";
import { useState } from "react";
import { Box } from "@mui/material";

const initUrl =
  "https://api.spoonacular.com/recipes/complexSearch?sort=random&addRecipeInformation=true&fillIngredients=true&limit=1`";

const ApiKey = "&apiKey=34638b0a66394dec9ee3da6fab1e6423";

export default function RecipeLookup() {
  const [currentRecipe, setRecipe] = useState({});

  const [url, setUrl] = useState(initUrl);

  const [dishQuery, setDishQuery] = useState();

  const [ingredQuery, setIngredQuery] = useState();

  const callApi = async () => {
    const url = initUrl;
    if (dishQuery) url += `&query=${dishQuery}`;
    url += ApiKey;
    console.log(url);
    const res = await fetch(url);
    const json = await res.json();
    console.log(json.results);
    setRecipe(json.results[0]);
  };

  return (
    <Box className="App">
      <SideBar
        dishQuery={dishQuery}
        ingredQuery={ingredQuery}
        setDishQuery={setDishQuery}
        setIngredQuery={setIngredQuery}
        callApi={callApi}
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Title />
        <DisplayRecipe currentRecipe={currentRecipe} />
      </Box>
    </Box>
  );
}
