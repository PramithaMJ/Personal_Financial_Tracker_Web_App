import React from 'react';
import { useState } from "react";
import { useLogin } from "../../hook/useLogin";
import { Link } from 'react-router-dom';
import loginImage from '../../img/loginImage.png';
import LoginFooter from '../Footer/LoginFooter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser ,faLock, faEye, faEyeSlash} from '@fortawesome/free-solid-svg-icons';


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  
  const { login, error, isLoading } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await login(email, password);
  };
  

  return (
   
    <div style={{ display: 'flex', height: '100vh', backgroundColor: 'lightgray', overflow: "auto"}}>
  

    <div style={{ display: 'flex', flexDirection: 'column', flex: 2 }}>
        <div className="h-full flex items-center justify-center"
        style={{flex: 2, position: 'relative' }}>
          <h1 className="absolute top-8 left-24 right-24 text-green-950 text-8xl font-bold ">
           <span className='font-serif font-extrabold'> Welcome</span>  to Personal Finance Tracker
            </h1>
         
        </div>

        <div style={{ flex: 2, backgroundColor: 'lightgray' }}>
          <img
          src={loginImage}
          alt="Sample"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
        </div>
        
      </div>
 
  

<div style={{ 
  flex: 1, 
  backgroundColor: '#2A2746',
  borderTopLeftRadius: '80px',
  borderBottomLeftRadius: '80px'
}}>
  <div className="flex h-full items-center justify-center">
    <div className="flex-1 max-w-md p-8 bg-transparent shadow-black rounded-lg shadow-2xl">
      <form className="login" onSubmit={handleSubmit}>
        <h3 className="text-6xl font-bold text-white text-center mb-4">Log In</h3>
        <p className="text-lg font-light text-white text-center mb-4">Get started with Personal Finance Tracker</p>
        <label htmlFor="email" className=' text-white text-2xl mb-8 mt-7'>Email</label>
      <div className="relative">
        <input
          type="email"
          id="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          className="w-full p-2 pl-10 border rounded-md  mb-4 mt-4 text-black"
          placeholder="Email"
        />
        <div className="absolute inset-y-0 left-0 pl-2 flex items-center pointer-events-none">
          <FontAwesomeIcon icon={faUser} className="text-gray-400" />
        </div>
      </div>
      <label htmlFor="password" className=" text-white text-2xl mb-8 mt-7">
        Password
        <span >

        <FontAwesomeIcon
      icon={showPassword ? faEye : faEyeSlash}
      className="text-gray-400 cursor-pointer"
      onClick={togglePasswordVisibility}
    />
        </span>
        </label>
      <div className="relative">
  <input
    type={showPassword ? "text" : "password"}
    id="password"
    onChange={(e) => setPassword(e.target.value)}
    value={password}
    className="w-full mt-4 mb-6 p-2 pl-10 border rounded-md text-black"
    placeholder="Password"
  />
  <div className="absolute inset-y-0 left-0 pl-2 flex items-center pointer-events-none">
    <FontAwesomeIcon
      icon={faLock}
      className="text-gray-400 cursor-pointer"
    />
  </div>
</div>

        <button
          disabled={isLoading}
          className={`w-full mb-4 mt-4 p-2 bg-blue-500 text-white font-bold rounded-md
          ${isLoading ? 'bg-blue-300 cursor-not-allowed' : 'hover:bg-blue-700'}`}>
          Log in
        </button>
        {error && <div className=" text-red-500">{error}</div>}

        <button className="w-full mb-4 mt-4 p-2 bg-red-500 text-white font-bold rounded-md hover:bg-green-700">
          Continue With Google
        </button>

        <button className="w-full mb-4 mt-4 p-2 bg-blue-800 text-white font-bold rounded-md hover:bg-green-700">
          Continue With Facebook
        </button>
        
        <hr className="my-4" />
        <p className='text-white'>or create new account</p>
        <Link to="/signup">
          <button className="w-full mb-4 mt-4 h-12 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-700">
           Sign Up
          </button>
        </Link>
      </form>
    </div>
  </div>

 
</div>
  </div>
  );
}

export default Login;
