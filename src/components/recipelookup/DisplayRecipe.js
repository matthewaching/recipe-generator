import { Button } from "@mui/material";
import { useState } from "react";
import { RecipeCard, EmptyCard } from "./RecipeCard";

export default function DisplayRecipe({ currentRecipe }) {
  if (!currentRecipe.title) {
    return (
      <div>
        <EmptyCard />
      </div>
    );
  }

  return (
    <div>
      <RecipeCard recipe={currentRecipe} />
    </div>
  );
}
