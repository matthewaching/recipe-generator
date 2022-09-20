import SideBar from "../src/components/recipelookup/SideBar";
import DisplayRecipe from "../src/components/recipelookup/DisplayRecipe";
import { useState } from "react";
import { Box, Card, Divider } from "@mui/material";
import { Repeat } from "@mui/icons-material";

const initUrl =
  "https://api.spoonacular.com/recipes/complexSearch?sort=random&addRecipeInformation=true&fillIngredients=true&number=20";

const ApiKey = "&apiKey=34638b0a66394dec9ee3da6fab1e6423";

export default function RecipeLookup() {
  const [currentRecipe, setRecipe] = useState({});

  const [dishQuery, setDishQuery] = useState();

  const [ingredQuery, setIngredQuery] = useState();

  const callApi = async () => {
    const url = initUrl;
    if (dishQuery) url += `&query=${dishQuery}`;
    if (ingredQuery) {
      if (ingredQuery.includes(",")) {
        const ingredList = ingredQuery.split(",");
        const sortedList = ingredList.reduce((sortedIngreds, ingred) => {
          const trimmedIngred = ingred.trim();
          if (trimmedIngred[0] === "-") {
            sortedIngreds.exclude ??= [];
            sortedIngreds.exclude.push(trimmedIngred.slice(1));
            return sortedIngreds;
          }
          sortedIngreds.include ??= [];
          sortedIngreds.include.push(trimmedIngred);
          return sortedIngreds;
        }, {});
        if (sortedList.include) {
          const includeSnippet = "&includeIngredients=";
          sortedList.include.forEach(
            (ingred) => (includeSnippet += ingred + ",")
          );
          url += includeSnippet.slice(0, -1);
        }
        if (sortedList.exclude) {
          const excludeSnippet = "&excludeIngredients=";
          sortedList.exclude.forEach(
            (ingred) => (excludeSnippet += ingred + ",")
          );
          url += excludeSnippet.slice(0, -1);
        }
        // const correctedQuery = ingredQuery.replace(/\s+/g, "");
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
          display: "grid",
          minHeight: "80vh",
          width: "90vw",
          gridTemplateColumns: "3fr 2px 5fr",
          my: "4rem",
          p: "3rem",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            flex: "1 0 auto",
            pr: "2rem",
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
        <Divider orientation="vertical" variant="middle" flexItem />
        <Box
          sx={{
            flex: "9 0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            px: "3rem",
          }}
          component="main"
        >
          <DisplayRecipe currentRecipe={currentRecipe} />
        </Box>
      </Card>
    </Box>
  );
}
