import React from 'react';
import { Link } from 'react-router-dom';
import { loginIcon } from '../../utils/Icons';

const GettingStarted = () => {
  return (
    <div className="getting-started p-8 bg-blue-100 min-h-screen flex flex-col justify-center items-center">
    <h2 class="text-6xl font-bold text-blue-800 mb-4 transition-transform transform hover:scale-110">
  Welcome to Your Personal Finance Tracker!
</h2>

      <p className="text-lg text-blue-600 mb-4 transition-transform transform hover:scale-150" >
        Get started by following these simple steps to manage your finances more effectively:
      </p>
      <ol className="text-lg text-purple-500 transition-transform transform hover:scale-110 list-decimal list-inside mb-6">
      <ul class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
  <li class="p-4 bg-white shadow-md rounded-md">
    <div class="flex items-center space-x-2">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
      </svg>
      <span class="text-lg font-semibold">Record your income and expenses</span>
    </div>
  </li>
  <li class="p-4 bg-white shadow-md rounded-md">
    <div class="flex items-center space-x-2">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2 10l6 6m6-6l6-6"/>
      </svg>
      <span class="text-lg font-semibold">Set a budget</span>
    </div>
  </li>
  <li class="p-4 bg-white shadow-md rounded-md">
    <div class="flex items-center space-x-2">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
      </svg>
      <span class="text-lg font-semibold">Track your financial progress</span>
    </div>
  </li>
  <li class="p-4 bg-white shadow-md rounded-md">
    <div class="flex items-center space-x-2">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 13l-7 7-7-7m14-8l-7 7-7-7"/>
      </svg>
      <span class="text-lg font-semibold">View Your Summary</span>
    </div>
  </li>
</ul>

        
      </ol>
      <Link to="/login">
        <button className="bg-blue-500 hover:bg-blue-600
         text-white text-xl font-bold py-2 px-4 rounded-full focus:outline-none focus:ring focus:ring-blue-300
         transition-transform transform hover:scale-125">
          Getting Started
        </button>
      </Link>
      <p className="text-lg text-blue-600 mt-6">
        It's easy to use and will help you keep an eye on your financial health.
      </p>
      <Link to="/login" className="text-blue-500 hover:text-blue-700 mt-4">
        <button className="w-full bg-gray-300 hover:bg-gray-400
         text-gray-700 font-bold py-2 px-4 rounded-full shadow-md focus:outline-none 
         focus:ring focus:ring-blue-300 transition-transform transform hover:scale-125">
          {loginIcon} Click to Login
        </button>
      </Link>
    </div>
  );
};



export default GettingStarted;
