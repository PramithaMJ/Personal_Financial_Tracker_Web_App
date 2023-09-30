
import React, { useState } from 'react';
import styled from 'styled-components';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = (e) => {
    e.preventDefault();
    // Add user registration logic here (e.g., API call)
  };

  return (
    <SignupForm>
      <h2>Create an Account</h2>
      <form onSubmit={handleSignup}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Sign Up</button>
      </form>
    </SignupForm>
  );
};

const SignupForm = styled.div`
  /* Styling for the signup form */
`;

export default Signup;
