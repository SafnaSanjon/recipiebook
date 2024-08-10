import React from 'react';
import { useParams } from 'react-router-dom';
import { recipes } from '../components/recipes'; // Import recipes data
import '../pages/RecipeDetailPage.css'; // Import the CSS file

const RecipeDetailPage = () => {
  const { id } = useParams();
  const recipe = recipes.find(recipe => recipe.id === parseInt(id));

  if (!recipe) {
    return <p>Recipe not found</p>;
  }

  return (
    <div className="recipe-detail-page">
      <h1>{recipe.name}</h1>
      <img src={process.env.PUBLIC_URL + '/' + recipe.image} alt={recipe.name} className="recipe-image" />
      <p>{recipe.description}</p>
      <h2>Ingredients</h2>
      <ul>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h2>Instructions</h2>
      <p>{recipe.instructions}</p>
    </div>
  );
};

export default RecipeDetailPage;
