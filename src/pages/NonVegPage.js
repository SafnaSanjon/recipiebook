import React from 'react';
import './Page.css';
import { recipes } from '../components/recipes'; // Imports the recipes array from the specified path
import DishCard from '../components/DishCard'; // Imports the DishCard component

const NonVegPage = () => { // Defines the NonVegPage component
  const nonVegDishes = recipes.filter(dish => dish.type === 'non-veg'); // Filters the recipes to get only non-vegetarian dishes

  return ( // Returns JSX to render the page
    <div className="page-container"> {/* Container for the entire page */}
      <div className="header-box non-veg-header"> {/* Header section with specific styling */}
        <h1>Non-Vegetarian Dishes</h1> {/* Page title */}
      </div>
      <div className="dishes-container"> {/* Container for displaying all non-veg dishes */}
        {nonVegDishes.map(dish => ( // Maps through non-veg dishes and renders a DishCard for each
          <DishCard key={dish.id} dish={dish} /> // DishCard component with a unique key and dish
        ))}
      </div>
    </div>
  );
};

export default NonVegPage; // Exports the NonVegPage component
