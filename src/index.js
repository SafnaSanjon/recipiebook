import React from 'react'; // Imports React library
import ReactDOM from 'react-dom'; // Imports ReactDOM for rendering the app
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Imports Router components for routing
import './index.css'; // Imports the global CSS file
import App from './App';
import VegPage from './pages/VegPage';
import NonVegPage from './pages/NonVegPage';
import RecipeDetailPage from './pages/RecipeDetailPage';

ReactDOM.render(
  <React.StrictMode>
    <Router> {/* Wraps the application in a Router to enable routing */}
      <Routes> {/* Defines the routes for the application */}
        <Route path="/" element={<App />} /> {/* Route for the home page */}
        <Route path="/veg" element={<VegPage />} /> {/* Route for the vegetarian dishes page */}
        <Route path="/non-veg" element={<NonVegPage />} /> {/* Route for the non-vegetarian dishes page */}
        <Route path="/recipe/:id" element={<RecipeDetailPage />} /> {/* Route for recipe details page with dynamic id */}
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root') // Specifies the root element to render the application into
);