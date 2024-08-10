import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

function App() {

  return (
    <div className="home">
      <nav>
        <ul>
          <li className="veg"><Link to="/veg">Vegetarian Dishes</Link></li>
          <li className="non-veg"><Link to="/non-veg">Non-Vegetarian Dishes</Link></li>
        </ul>
      </nav>
        
      <div className="home-content">
        <h1>Welcome to the Recipe Book</h1>
        <p>Discover a world of flavors with our curated</p>
        <p>collection of delicious recipes.</p>
      </div>
    </div>
  );
}

export default App;