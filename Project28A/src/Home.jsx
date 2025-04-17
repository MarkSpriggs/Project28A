import { useState } from "react";
import { useEffect } from "react";
import RecipeCard from "./components/RecipeCard";



export default function Home({ favorites, setFavorites, token }) {
    const [recipes, setRecipes] = useState([])
    const [selectedRecipe, setSelectedRecipe] = useState(null)
    
    

    useEffect(()=>{
        async function fetchRecipes(){
            try{
                const res = await fetch("https://fsa-recipe.up.railway.app/api/recipes")
                const data = await res.json();
                console.log(data)
                setRecipes(data)

            }catch (error){
                console.error(error)
            }
        }
        fetchRecipes();
    },[])

    


    return (
      <div className="home">



        <h1>My Recipe Book</h1>

        {recipes && (recipes.map((recipe) =>{

          return <RecipeCard token={token} favorites={favorites} setFavorites={setFavorites} key={recipe.idMeal} recipe={recipe} setSelectedRecipe={setSelectedRecipe} selectedRecipe={selectedRecipe}/>
        }))}


        
        

      </div>
    );
  }