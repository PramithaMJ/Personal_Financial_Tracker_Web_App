// import { useState } from "react";
// import { useLogin } from "../../hook/useLogin";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const { login, error, isLoading } = useLogin();

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     await login(email, password);
//   };

//   return (
    // <form className="login" onSubmit={handleSubmit}>
    //   <h3 className="text-xl font-medium text-black">Log In</h3>

    //   <label>Email address:</label>
    //   <input
    //     type="email"
    //     onChange={(e) => setEmail(e.target.value)}
    //     value={email}
    //   />
    //   <label>Password:</label>
    //   <input
    //     type="password"
    //     onChange={(e) => setPassword(e.target.value)}
    //     value={password}
    //   />

    //   <button disabled={isLoading}>Log in</button>
    //   {error && <div className="error">{error}</div>}
    // </form>
//   );
// };

import React from 'react';
import { useState } from "react";
import { useLogin } from "../../hook/useLogin";
import { Link } from 'react-router-dom';


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, error, isLoading } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await login(email, password);
  };

  
  const imageUrl = 'https://example.com/your-image.jpg';
  

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <div style={{ flex: 2, backgroundColor: 'lightgray' }}>
        <img src={imageUrl} alt="Sample" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </div>
      <div style={{ flex: 1, padding: '20px' }}>
      <form className="login" onSubmit={handleSubmit}>
      <h3 className="text-xl font-medium text-black">Log In</h3>

      <label>Email address:</label>
      <input
        type="email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <label>Password:</label>
      <input
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />

      <button disabled={isLoading}
      className={`bg-blue-500 
      ${isLoading ? 'bg-blue-300 cursor-not-allowed' : 'hover:bg-blue-700'}
       text-white font-bold py-2 px-4 rounded-full shadow-md focus:outline-none 
       focus:ring focus:ring-blue-300`}>
        Log in
      </button>
      {error && <div className="error">{error}</div>}
      <div>
        __________
      </div>
    <Link to="/signup"> 
        <button className="bg-blue-500 hover:bg-blue-700
         text-white font-bold py-2 px-4 rounded-full shadow-md focus:outline-none focus:ring
          focus:ring-blue-300">
          Sign Up
          </button>
      </Link>
    </form>
      </div>
    </div>
  );
}

export default Login;
