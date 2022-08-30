import SideBar from "../../src/components/recipelookup/SideBar";
import Title from "../../src/components/recipelookup/Title";
import DisplayRecipe from "../../src/components/recipelookup/DisplayRecipe";
import { useState } from "react";
import { Box } from "@mui/material";
import { Toolbar } from "@mui/material";

const initUrl =
  "https://api.spoonacular.com/recipes/complexSearch?sort=random&addRecipeInformation=true&fillIngredients=true&number=20";

const ApiKey = "&apiKey=34638b0a66394dec9ee3da6fab1e6423";

export default function RecipeLookup() {
  const [currentRecipe, setRecipe] = useState({});

  const [url, setUrl] = useState(initUrl);

  const [dishQuery, setDishQuery] = useState();

  const [ingredQuery, setIngredQuery] = useState();

  const callApi = async () => {
    const url = initUrl;
    if (dishQuery) url += `&query=${dishQuery}`;
    if (ingredQuery) {
      url += "&includeIngredients=";
      if (ingredQuery.includes(",")) {
        const correctedQuery = ingredQuery.replace(/\s+/g, "");
        url += correctedQuery;
      } else {
        url += ingredQuery;
      }
    }
    url += ApiKey;
    console.log(url);
    const res = await fetch(url);
    const json = await res.json();
    console.log(json.results);
    setRecipe(json.results[0]);
  };

  return (
    <Box className="recipe">
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
        component="main"
      >
        <Title />
        <DisplayRecipe currentRecipe={currentRecipe} />
      </Box>
    </Box>
  );
}
