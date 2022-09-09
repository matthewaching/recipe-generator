import { RecipeCard, EmptyCard } from "./RecipeCard";

export default function DisplayRecipe({ currentRecipe }) {
  if (!currentRecipe || !currentRecipe.title) {
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
