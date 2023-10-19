import React, { useState } from "react";
import { useSignup } from "../../hook/useSignup";
import { Link, Route } from 'react-router-dom';
import LoginFooter from '../Footer/LoginFooter';
import Login from "../Login/Login";
import { email2, facebook, google, loginIcon, password2, signout, signup2 } from "../../utils/Icons";

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signup, error, isLoading } = useSignup();
  const [passwordMatchError, setPasswordMatchError] = useState('');
  const [reenteredPassword, setReenteredPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== reenteredPassword) {
      setPasswordMatchError("Passwords do not match");
    } else {
      await signup(email, password);
      window.location.reload();
    }
    
  }

  return (
    <div style={{
      flex: 1,
      backgroundColor: '#2A2746',
      overflow: 'auto',
      maxHeight: '100vh', 
    }}>
    <div className="flex flex-col min-h-screen  " style={{ backgroundColor: '#2A2746' }}>
      <div className="flex justify-center items-center h-full mt-28">
        <div className="bg-transparent shadow-2xl p-18 rounded-lg w-full max-w-lg border border-black ">
          <form className="signup p-5 m-4" onSubmit={handleSubmit}>
          <div className="mb-4 flex justify-center items-center h-full">
            <h2 className="text-4xl font-bold text-white" m-6 >Create Account</h2>
            </div>
            <div className="mb-4 flex justify-center items-center h-full">
            <h3 className="text-2xl font-bold text-white">Sign Up</h3>
          </div>


            <div className="mb-4">
              <label className=" text-white text-2xl mb-8 mt-7">{email2} Email address:</label>
              <input
                type="email"
                placeholder="Email or Username"
                className="mt-1 p-2 rounded border w-full text-black"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </div>

            <div className="mb-4">
              <label className=" text-white text-2xl mb-8 mt-7">{password2} Password:</label>
              <input
                type="password"
                placeholder="Password"
                className="mt-1 p-2 rounded border w-full text-black"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
            </div>

            <div className="mb-4">
              <label className=" text-white text-2xl mb-8 mt-7"> {password2} Password:</label>
              <input
                type="password"
                placeholder="Re-enter Password"
                className="mt-1 p-2 rounded border w-full text-black"
                onChange={(e) => setReenteredPassword(e.target.value)}
                value={reenteredPassword}
              />

            </div>
             {passwordMatchError && <div className="text-red-500 mt-4">{passwordMatchError}</div>}

             <button
        disabled={isLoading}
        className="w-full bg-blue-500 text-white font-bold p-2 rounded hover:bg-blue-700"
        onClick={handleSubmit} 
      >
        {signup2} Sign up
      </button>

            {error && <div className="text-red-500 mt-4">{error}</div>}
          <hr className="m-6"/>
          <div className="mt-4 mb-4 ">
            <p className="text-white m-5">Already have an account?</p>
            <Link to="/login" className="text-blue-500 hover:text-blue-700">
          <button className="w-full bg-gray-300 hover:bg-gray-400 text-gray-700 font-bold p-5 rounded-full shadow-md focus:outline-none focus:ring focus:ring-blue-300">
          {loginIcon}  Back to Login
              </button>
              <div className="text-white text-center mt-4"> - or - </div>
              <hr className="mt-3"/>
              <button className="w-full mb-4 mt-4 p-2 bg-red-800 text-white font-bold rounded-md hover:bg-green-700"
                        >
                        {google} Continue With Google
                        </button>
              <button className="w-full mb-4 mt-4 p-2 bg-blue-800 text-white font-bold rounded-md hover:bg-green-700"
                        >
                        {facebook} Continue With Facebook
                        </button>
            </Link>
          </div>
          </form>
        </div>
      </div>

      <div className="mt-28 overflow-scroll">
        <LoginFooter />
      </div>
    </div>
    </div>
  );
}

export default Signup;
