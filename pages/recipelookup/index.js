import SideBar from "../../src/components/recipelookup/SideBar";
import DisplayRecipe from "../../src/components/recipelookup/DisplayRecipe";
import { useState } from "react";
import { Box, Card, Divider } from "@mui/material";

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
    <Box
      className="recipe"
      sx={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Card
        sx={{
          display: "flex",
          minHeight: "80vh",
          maxWidth: "90vw",
          flex: "1",
          mt: "8rem",
          mb: "4rem",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            flex: "1 0 auto",
            p: "2rem",
          }}
        >
          <SideBar
            dishQuery={dishQuery}
            ingredQuery={ingredQuery}
            setDishQuery={setDishQuery}
            setIngredQuery={setIngredQuery}
            callApi={callApi}
          />
        </Box>
        <Divider
          orientation="vertical"
          variant="middle"
          flexItem
          sx={{
            my: "2rem",
          }}
        />
        <Box
          sx={{
            flex: "9 0 auto",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
          component="main"
        >
          <DisplayRecipe currentRecipe={currentRecipe} />
        </Box>
      </Card>
    </Box>
  );
}
