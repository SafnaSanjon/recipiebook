import React from 'react';
import { useParams } from 'react-router-dom';
import { recipes } from '../components/recipes';
import '../pages/RecipeDetailPage.css';

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
      <div>
        {recipe.ingredients.map((ingredient, index) => (
          <div key={index}>{ingredient}</div>
        ))}
      </div>
      <h2>Instructions</h2>
      <p>{recipe.instructions}</p>
    </div>
  );
};

export default RecipeDetailPage;
