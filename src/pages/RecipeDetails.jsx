import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../components/Header';

const RecipeDetailsPage = () => {
  // Access location state to get recipe details
  const { state } = useLocation();
  const { imageUrl, name, ingredients, steps } = state;

  return (
    <div>
      <Header />
      <div className="bg-gray-100 min-h-screen py-8">
        <div className="max-w-lg mx-auto bg-white rounded-lg overflow-hidden shadow-lg">
          <img className="w-full h-64 object-cover object-center" src={imageUrl} alt="Recipe" />
          <div className="p-6">
            <h2 className="text-2xl font-semibold mb-4">{name}</h2>
            <div className="mb-4">
              <h3 className="text-lg font-semibold mb-2">Ingredients</h3>
              <p className="text-gray-700">{ingredients}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Steps</h3>
              <p className="text-gray-700">{steps}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecipeDetailsPage;
