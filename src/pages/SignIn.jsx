import React, { useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';// Importing js-cookie library for handling cookies
import Header from '../components/Header';
import { Link } from 'react-router-dom';





const SignInForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://assignment-recipe-backend.onrender.com/api/signin', { username, password });
      const { token, userId } = response.data;
      // Storing token in cookies
      Cookies.set('token', token, { expires: 7 }); 
      Cookies.set('userId', userId, {expires: 7});
      // Expires in 7 days
      // You can also set HttpOnly and Secure flags for more security
      // Cookies.set('token', token, { expires: 7, httpOnly: true, secure: true });

      // Redirect to another page or do any other action upon successful login
       window.location.href = '/';
    } catch (err) {
      setError(err.response.data.message);
    }
  };

  return (
    <div>
        <Header/>
         <div className="flex justify-center items-center h-screen">
      <div className="bg-gray-100 p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">Sign In</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-semibold">Email:</label>
            <input type="email" id="email" value={username} onChange={(e) => setUsername(e.target.value)} required className="border border-gray-300 rounded-md px-3 py-2 w-full mt-1" />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 font-semibold">Password:</label>
            <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required className="border border-gray-300 rounded-md px-3 py-2 w-full mt-1" />
          </div>
          <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Sign In</button>
          <Link
          to="/signup"
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
        >
         SignUp
        </Link>
        </form>
      </div>
    </div>

    </div>
   
  );
};

export default SignInForm;
