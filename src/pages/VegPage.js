import React from 'react';
import { recipes } from '../components/recipes';
import DishCard from '../components/DishCard'; 
import './Page.css'

const VegPage = () => {
  const vegDishes = recipes.filter(dish => dish.type === 'veg');

  return (
    <div className="page-container">
      <div className="header-box veg-header">
        <h1>Vegetarian Dishes</h1>
      </div>
      <div className="dishes-container">
        {vegDishes.map(dish => (
          <DishCard key={dish.id} dish={dish} />
        ))}
      </div>
    </div>
  );
};

export default VegPage;
