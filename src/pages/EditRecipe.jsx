import React, { useState } from 'react';
import axios from 'axios';
import Header from '../components/Header';
import Cookies from 'js-cookie';
import { useParams } from 'react-router-dom';


const EditRecipeForm = () => {
  const [recipeName, setRecipeName] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [steps, setSteps] = useState('');
  const { id } = useParams();
  const [recipeImage, setRecipeImage] = useState(null); // State for storing recipe image


  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = Cookies.get('token');
    const userId = Cookies.get('userId');

    const formData = new FormData();
    formData.append('recipeName', recipeName);
    formData.append('ingredients', ingredients);
    formData.append('steps', steps);
    formData.append('file', recipeImage);
    formData.append('userId', userId);

    try {
      const response = await axios.post(`https://assignment-recipe-backend.onrender.com/api/recipe/edit/${id}`, formData, {
        headers: {
        
          'Content-Type': 'multipart/form-data',
           'Authorization': `Bearer ${token}`
        }
      });

      // Redirect or handle success as needed
      window.location.href = '/';
    } catch (err) {
      // Handle errors
      console.error('Error adding recipe:', err);
      // setError(err.response.data.message);
    }
};

  return (
    <div>
      <Header />
      <div className="flex justify-center items-center h-screen">
        <div className="bg-gray-100 p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Edit Recipe</h2>
          {/* Display error messages if any */}
          {/* {error && <p className="text-red-500 mb-4">{error}</p>} */}
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="recipeName" className="block text-gray-700 font-semibold">Recipe Name:</label>
              <input type="text" id="recipeName" value={recipeName} onChange={(e) => setRecipeName(e.target.value)} required className="border border-gray-300 rounded-md px-3 py-2 w-full mt-1" />
            </div>
            <div className="mb-4">
              <label htmlFor="ingredients" className="block text-gray-700 font-semibold">Ingredients:</label>
              <textarea id="ingredients" value={ingredients} onChange={(e) => setIngredients(e.target.value)} required className="border border-gray-300 rounded-md px-3 py-2 w-full mt-1" />
            </div>
            <div className="mb-4">
              <label htmlFor="steps" className="block text-gray-700 font-semibold">Steps:</label>
              <textarea id="steps" value={steps} onChange={(e) => setSteps(e.target.value)} required className="border border-gray-300 rounded-md px-3 py-2 w-full mt-1" />
            </div>
            {/* Add file input for recipe image */}
            <div className="mb-4">
              <label htmlFor="recipeImage" className="block text-gray-700 font-semibold">Recipe Image:</label>
              <input type="file" id="recipeImage" onChange={(e) => setRecipeImage(e.target.files[0])} className="border border-gray-300 rounded-md px-3 py-2 w-full mt-1" />
            </div>
            <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Add Recipe</button>
          </form>
          {/* Link to signup page */}
        
        </div>
      </div>
    </div>
  );
};

export default EditRecipeForm;
