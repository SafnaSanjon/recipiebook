import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import App from './App';
import VegPage from './pages/VegPage';
import NonVegPage from './pages/NonVegPage';
import RecipeDetailPage from './pages/RecipeDetailPage';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/veg" element={<VegPage />} />
        <Route path="/non-veg" element={<NonVegPage />} />
        <Route path="/recipe/:id" element={<RecipeDetailPage />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);