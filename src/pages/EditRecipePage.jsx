import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Cookies from 'js-cookie';
import Header from '../components/Header';
import RecipeCardEdit from '../components/RecipeCardEdit';

function EditRecipePage() {
    const [recipes, setRecipes] = useState([]);
    const userId = Cookies.get('userId');
    const token = Cookies.get('token');

    useEffect(() => {
        if (!userId) {
            console.error("User ID is not available.");
            return;
        }
        
        // Fetch data using Axios
        axios.post('https://assignment-recipe-backend.onrender.com/api/recipe/user', { userId }, {
            headers: {
                Authorization: `Bearer ${token}`
            }})
            .then(response => {
                // Assuming the response data is an array of recipes
                setRecipes(response.data);
            })
            .catch(error => {
                console.error('Error fetching recipes:', error);
            });
    }, [userId]); // Add userId to the dependency array

    return (
        <div>
            <Header/>
             <div className="min-h-screen bg-gray-100 overflow-y-auto">
            <div className="container mx-auto px-4 py-8">
                {/* Grid layout for cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {/* Map over recipes array and render RecipeCard for each */}
                    {recipes.map(recipe => (
                        <RecipeCardEdit
                            key={recipe._id} // Assuming each recipe has a unique identifier
                            imageUrl={recipe.recipeImage}
                            name={recipe.recipeName}
                            ingredients={recipe.ingredients}
                            id={recipe._id}
                            steps={recipe.steps}
                        />
                    ))}
                </div>
            </div>
        </div>

        </div>
       
    );
}

export default EditRecipePage;
