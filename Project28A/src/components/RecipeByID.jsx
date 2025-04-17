import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function RecipeByID() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  

  useEffect(() => {
    async function fetchRecipeByID() {
      try {
        const res = await fetch(`https://fsa-recipe.up.railway.app/api/recipes/${id}`);
        const data = await res.json();
        console.log(data);
        setRecipe(data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchRecipeByID();
  }, [id]);

  


  return (
    <div className="recipeID">
      <h1>{recipe?.strMeal}</h1>
      <img src={recipe?.strMealThumb}></img>
      <h2 className="ingredients">Ingredients</h2>
      <ul>
        {recipe?.ingredients.map((ingredient, index)=>(
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h2>Cooking Instructions</h2>
      <h2>{recipe?.strInstructions}</h2>
    </div>
  );
}