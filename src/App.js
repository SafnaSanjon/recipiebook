import React from 'react';
import { Link } from 'react-router-dom'; // Imports Link component for routing
import './App.css';

function App() { // Defines the App component

  return (
    <div className="home"> {/* Container for the home page */}
      <nav>
        <ul>
          <li className="veg"><Link to="/veg">Vegetarian Dishes</Link></li> {/* List item for non-vegetarian dishes link */}
          <li className="non-veg"><Link to="/non-veg">Non-Vegetarian Dishes</Link></li>
        </ul>
      </nav>
        
      <div className="home-content">
        <h1>Welcome to the Recipe Book</h1> {/* Container for the home page content */}
        <p>Discover a world of flavors with our curated</p> {/* Main heading for the home page */}
        <p>collection of delicious recipes.</p> {/* Subheading paragraph */}
      </div>
    </div>
  );
}

export default App;