import React from 'react'; // Imports the React library
import { Link } from 'react-router-dom'; // Imports the Link component from react-router-dom for navigation
import './DishCard.css'; // Imports the CSS file for styling the DishCard component


const DishCard = ({ dish }) => { // Defines a functional component named DishCard that accepts a 'dish' prop
  return (
    <div className="dish-card">
      <img 
       src={process.env.PUBLIC_URL + '/' + dish.image} // Sets the image source using an environment variable and the dish's image path
       alt={dish.name} // Provides an alt text for the image
       className="dish-image" // Adds a class to the image for styling
      /> 
      <h3>{dish.name}</h3> {/* Displays the dish's name in an h3 element */}
      <p>{dish.description}</p> {/* Displays the dish's description in a paragraph */}
      <Link to={`/recipe/${dish.id}`}>View Recipe</Link> {/* Creates a clickable link that navigates to the recipe details page */}
    </div>
  );
};

export default DishCard; // Exports the DishCard component as the default export