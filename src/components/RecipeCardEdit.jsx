import React from 'react';
import { useNavigate } from 'react-router-dom';

function RecipeCardEdit({ id, imageUrl, name, ingredients, steps }) {
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

    const editHandleClick = () => {
        // Redirect to EditForm page with recipe id
        navigate(`/edit-form/${id}`);
    };

    return (
        <div className="relative">
            <div onClick={handleClick} className="max-w-xs rounded overflow-hidden shadow-lg bg-blue-900 text-white cursor-pointer">
                <img className="w-full h-64 object-cover object-center rounded-t" src={imageUrl} alt={name} />
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{name}</div>
                </div>
            </div>
            <button onClick={editHandleClick} className="absolute top-0 right-0 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mr-2 mt-2">
                Edit
            </button>
        </div>
    );
}

export default RecipeCardEdit;
