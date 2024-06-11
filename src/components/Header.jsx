import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

function Header() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();
   

  useEffect(() => {
    // Check if token exists in cookies
    const token = Cookies.get("token");

    if (token) {
      setIsLoggedIn(true);

    } else {
      setIsLoggedIn(false);
    }
  }, []);

  const handleSignOut = () => {
    // Remove token from cookies
    Cookies.remove("token");
    // Reload the page
    window.location.reload();
  };
  const handleSearch = () => {
    // Do whatever you want with the search term here
    console.log('Search Term:', searchTerm);
    navigate("/search", {
        state: { searchTerm:searchTerm}
    });
  };
  return (
    <div className="bg-gray-800 text-white py-4 px-6 flex justify-between items-center">
      {/* Title on the left */}
      <div className="text-xl font-bold">Recipes</div>
      {/* Search bar and buttons in the middle */}
      <div className="relative w-300">
      <input
        type="text"
        className="w-full px-4 py-2 rounded-lg focus:outline-none focus:ring focus:border-blue-300 text-black"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button
        className="absolute inset-y-0 right-0 px-3 py-2 bg-gray-200 rounded-r-lg focus:outline-none"
        onClick={handleSearch}
      >
        <svg
          className="h-5 w-5 text-gray-600"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M9.757 1.293a1 1 0 0 1 1.414 1.414l-6 6a1 1 0 0 1-1.414-1.414l6-6zM15 7a8 8 0 1 0-1.184 13.419l-4.132-4.132A9.43 9.43 0 0 0 13 8c0-.613-.059-1.217-.171-1.809L15 7zm-4 9a7 7 0 1 1 0-14 7 7 0 0 1 0 14z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </div>
      {/* Buttons on the right */}
      <div>
        <Link to='/add' className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mr-2">
          Add Recipe
        </Link>
        <Link to='/edit-page'
    
      className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
    >
      Edit Recipe
    </Link>
        <Link
      to={isLoggedIn ? "#" : "/signin"}
      onClick={isLoggedIn ? handleSignOut : null}
      className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
    >
      {isLoggedIn ? "Sign Out" : "SignIn/SignUp"}
    </Link>
      </div>
    </div>
  );
}

export default Header;
