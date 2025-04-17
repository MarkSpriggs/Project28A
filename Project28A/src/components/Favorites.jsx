import RecipeCard from "./RecipeCard";


export default function Favorites({ favorites = [], setFavorites }) {


  return (
    <div className="favorites">
      <h1>Your Favorite Recipes</h1>

      {favorites.length === 0 ? (
        <p>No favorite recipes yet!</p>
      ) : (
        favorites.map(recipe => (
          <RecipeCard key={recipe.idMeal} recipe={recipe} favorites={favorites} setFavorites={setFavorites}/>
        ))
      )}
    </div>
  );
}
