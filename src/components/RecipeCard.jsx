import React from 'react';
import { useNavigate } from 'react-router-dom';

function RecipeCard({ imageUrl, name, ingredients, steps }) {
    const navigate = useNavigate();

    const handleClick = () => {
        if (!imageUrl || !name || !ingredients || !steps) {
            console.error("Missing props in RecipeCard component");
            return;
        }
        console.log("Recipe Details:", { imageUrl, name, ingredients, steps });
      
        // Redirect to RecipeDetails page with recipe data
        navigate("/recipe-detail", {
            state: { imageUrl:imageUrl, name:name, ingredients:ingredients, steps:steps }
        });
    };

    return (
        <div onClick={handleClick} className="max-w-xs rounded overflow-hidden shadow-lg bg-blue-900 text-white">
            <img className="w-full h-64 object-cover object-center rounded-t" src={imageUrl} alt={name} />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{name}</div>
            </div>
        </div>
    );
}

export default RecipeCard;
