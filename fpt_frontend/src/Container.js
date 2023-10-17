import React, { useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App'
import Login from './Components/Login/Login'
import Signup from './Components/SignUp/SignUp'
import { useState } from 'react'
import About from './Components/About/About'
export default function Container() {
  //user state
  const [user, setUser] = useState(null)


  useEffect(() => {
    const user2 = JSON.parse(localStorage.getItem('user'))
  
    if (user2) {
      setUser(user2)
    }else{
      setUser(null)
    }
    
  }, [])
  

  return (
    
    <>
      <BrowserRouter>

        <Routes>
          <Route path="/" element={
            user ? <App /> : <Login />
          } />
          <Route path="/login" element={

            user ? <App /> : <Login />
          } />
          <Route path="/signup" element={
            user ? <App /> : <Signup />
          } />
            <Route path="/about" element={<About />} />
        </Routes>
      
      </BrowserRouter>
    </>

  )
}