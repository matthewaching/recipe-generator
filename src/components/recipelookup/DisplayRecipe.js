import { RecipeCard, EmptyCard } from "./RecipeCard";

export default function DisplayRecipe({ currentRecipe }) {
  if (!currentRecipe || !currentRecipe.title) {
    return (
      <>
        <EmptyCard />
      </>
    );
  }

  return (
    <>
      <RecipeCard recipe={currentRecipe} />
    </>
  );
}
