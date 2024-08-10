import React from 'react';
import { Link } from 'react-router-dom';
import './DishCard.css';

const DishCard = ({ dish }) => {
  return (
    <div className="dish-card">
      <img src={process.env.PUBLIC_URL + '/' + dish.image} alt={dish.name} className="dish-image" />
      <h3>{dish.name}</h3>
      <p>{dish.description}</p>
      <Link to={`/recipe/${dish.id}`}>View Recipe</Link>
    </div>
  );
};

export default DishCard;