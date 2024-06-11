import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RecipeCard from '../components/RecipeCard';
import { useLocation } from 'react-router-dom';
import Header from '../components/Header';


function SearchResultPage({}) {
    const [recipes, setRecipes] = useState([]);
    const { state } = useLocation();
    const { searchTerm } = state;

    useEffect(() => {
        // Fetch data using Axios
        axios.post('https://assignment-recipe-backend.onrender.com/api/recipe/search', {recipeName:searchTerm})
            .then(response => {
                // Assuming the response data is an array of recipes
                setRecipes(response.data);
            })
            .catch(error => {
                console.error('Error fetching recipes:', error);
            });
    }, []); // Empty dependency array ensures the effect runs only once

    return (
        <div>
            <Header/>
            <div className="min-h-screen bg-gray-100 overflow-y-auto">
            <div className="container mx-auto px-4 py-8">
                {/* Grid layout for cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {/* Map over recipes array and render RecipeCard for each */}
                    {recipes.map(recipe => (
                        <RecipeCard
                            key={recipe._id} // Assuming each recipe has a unique identifier
                            imageUrl={recipe.recipeImage}
                            name={recipe.recipeName}
                            ingredients={recipe.ingredients}
                            steps={recipe.steps}
                        />
                    ))}
                </div>
            </div>
        </div>
        </div>
        
    );
}

export default SearchResultPage;
