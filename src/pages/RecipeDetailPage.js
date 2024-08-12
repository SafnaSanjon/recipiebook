import React from 'react';
import { useParams } from 'react-router-dom';// Imports useParams hook to get route parameters
import { recipes } from '../components/recipes';
import '../pages/RecipeDetailPage.css';

const RecipeDetailPage = () => {// Defines the RecipeDetailPage component
  const { id } = useParams(); // Retrieves the 'id' parameter from the URL
  const recipe = recipes.find(recipe => recipe.id === parseInt(id)); // Finds the recipe with the matching id

  if (!recipe) { // If no recipe is found
    return <p>Recipe not found</p>; // Displays a message indicating recipe was not found
  }

  return ( // Returns JSX to render the recipe details
    <div className="recipe-detail-page"> {/* Container for the recipe details */}
      <h1>{recipe.name}</h1> {/* Recipe name */}
      <img src={process.env.PUBLIC_URL + '/' + recipe.image} alt={recipe.name} className="recipe-image" /> {/* Recipe image */}
      <p>{recipe.description}</p> {/* Recipe description */} 
      <h2>Ingredients</h2>
      <div>
        {recipe.ingredients.map((ingredient, index) => ( // Maps through the ingredients array
          <div key={index}>{ingredient}</div> // Displays each ingredient
        ))}
      </div>
      <h2>Instructions</h2> {/* Heading for instructions section */}
      <p>{recipe.instructions}</p> {/* Recipe instructions */}
    </div>
  );
};

export default RecipeDetailPage;
