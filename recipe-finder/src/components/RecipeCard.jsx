function RecipeCard({ recipe }) {
  return (
    <div className="recipe-card">
      <img src={recipe.image} alt={recipe.title} />
      <h3>{recipe.title}</h3>
      <p>Calories: {Math.round(recipe.calories)}</p>
    </div>
  );
}

export default RecipeCard;
