import React from 'react';
import './Page.css';
import { recipes } from '../components/recipes'; 
import DishCard from '../components/DishCard'; 

const NonVegPage = () => {
  const nonVegDishes = recipes.filter(dish => dish.type === 'non-veg');

  return (
    <div className="page-container">
      <div className="header-box non-veg-header">
        <h1>Non-Vegetarian Dishes</h1>
      </div>
      <div className="dishes-container">
        {nonVegDishes.map(dish => (
          <DishCard key={dish.id} dish={dish} />
        ))}
      </div>
    </div>
  );
};

export default NonVegPage;
