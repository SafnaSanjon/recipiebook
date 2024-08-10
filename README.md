# Getting Started with Create React App

Recipe Book Application
This is a simple Recipe Book application built using React. The application allows users to browse vegetarian and non-vegetarian dishes and view detailed recipes for each dish.

## Features

- Home Page: Welcome message and navigation links to Vegetarian and Non-Vegetarian dishes.
- Vegetarian Dishes Page: Displays a list of all vegetarian dishes.
Non-Vegetarian Dishes Page: Displays a list of all non-vegetarian dishes.
- Recipe Detail Page: Displays the full recipe, including ingredients and instructions, for a selected dish.

## Project Structure
The project is organized into the following main directories:
- src/components/: Contains reusable components like DishCard.
- src/pages/: Contains page components like VegPage, NonVegPage, and RecipeDetailPage.
- src/assets/: Contains images used in the application.
- src/: Contains global files like App.js, index.js, and CSS files.


## Components
- DishCard.js
Props: Accepts a dish object containing details of the dish (name, description, image, etc.).
Functionality: Renders the dish's image, name, description, and a link to view the full recipe.

- VegPage.js
Functionality: Filters and displays all vegetarian dishes using the DishCard component.

- NonVegPage.js
Functionality: Filters and displays all non-vegetarian dishes using the DishCard component.

- RecipeDetailPage.js
Functionality: Displays the full recipe details, including ingredients and cooking instructions for the selected dish.

- App.js
Functionality: Main entry point for the application, provides navigation links to the Vegetarian and Non-Vegetarian dishes pages.


## Pages
- Home Page
Displays a welcome message and links to Vegetarian and Non-Vegetarian dishes pages.

- Vegetarian Dishes Page
Displays all vegetarian dishes with their names, images, and a short description.

- Non-Vegetarian Dishes Page
Displays all non-vegetarian dishes with their names, images, and a short description.

- Recipe Detail Page
Displays detailed recipe information for a selected dish, including ingredients and step-by-step cooking instructions.

## Installation and Setup
- Prerequisites
 Node.js
 npm or yarn
Installation
1. Clone the repository:
git clone https://github.com/your-username/recipe-book.git

2. Navigate to the project directory:
cd recipe-book

3. Install dependencies:
npm install
or
yarn install

4. Start the development server:
npm start
or
yarn start

5. Open your browser and go to http://localhost:3000 to view the application.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Usage

From the home page, click on "Vegetarian Dishes" or "Non-Vegetarian Dishes" to view the respective dishes.
Click on any dish to view its complete recipe, including ingredients and cooking instructions.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.



### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

Output Screenshot:
![image](https://github.com/user-attachments/assets/947c78a8-0c68-422e-b3b6-1a56c685390c)
![image](https://github.com/user-attachments/assets/067eb02a-3e39-449f-851c-69e989d41da1)
![image](https://github.com/user-attachments/assets/880e5a34-466a-4ee8-9ec6-ab5ba3563d17)
![image](https://github.com/user-attachments/assets/809e574c-2a93-4453-8d72-d1a5987ca3d8)
![image](https://github.com/user-attachments/assets/7b39a6ab-5477-44c9-b248-6ea1ecbd2d99)









