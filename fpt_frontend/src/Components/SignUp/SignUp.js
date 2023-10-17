import React from 'react';
import { useState } from "react"
import { useSignup } from "../../hook/useSignup"
import { Link } from 'react-router-dom';
// import Oathh from "../../context/Oathh"


const Signup = () => {
 
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {signup, error, isLoading} = useSignup()
 

  const handleSubmit = async (e) => {
    e.preventDefault()
    await signup(email, password);
  }

  return (
    <div>
    <form className="signup" onSubmit={handleSubmit}>
      <h3>Sign Up</h3>
      
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

      <button disabled={isLoading}>Sign up</button>
      {error && <div className="error">{error}</div>}
      {/* <Oathh /> */}

    </form>
    <Link to="/login" className="mt-4 text-blue-500 hover:text-blue-700">
        <button className="bg-gray-300 hover:bg-gray-400 text-gray-700 font-bold py-2 px-4 rounded-full shadow-md focus:outline-none focus:ring focus:ring-blue-300">
          Back to Login
        </button>
      </Link>
    </div>
    
  )
}

export default Signup