import { Routes, Route, Link, useNavigate } from "react-router-dom";


export default function RecipeCard({ setSelectedRecipe, recipe, selectedRecipe, setFavorites, favorites, token}) {
    const navigate = useNavigate();
    const isFavorited = favorites.some(fav => fav.idMeal === recipe.idMeal);

    const handleClick = () =>{
        setSelectedRecipe(recipe)
        navigate(`/recipe/${recipe.idMeal}`)    
    }
    
    const handleAddFav = () =>{
      if(!token){
        alert("Log in to add favorites");
        return;
      }
      if (!isFavorited){
      setFavorites(prev => [...prev, recipe])
    }
    }    

    const handleRemove =(idMeal) =>{
      setFavorites(prev => prev.filter(recipe => recipe.idMeal !== idMeal));
    }
    


    return (
      <div className="recipeCard">
        <h2>{recipe.strMeal}</h2>
        <img className="cardsImage" src={recipe.strMealThumb}></img>

        <button onClick={handleClick}>Learn More</button>
        <button onClick={handleAddFav} disabled={isFavorited}>
          {isFavorited? "Favorite": "Add Favorite"}
        </button>
        {handleRemove && (
        <button onClick={() => handleRemove(recipe.idMeal)}>
          Remove from Favorites
        </button>
        )}
      </div>
    );
  }