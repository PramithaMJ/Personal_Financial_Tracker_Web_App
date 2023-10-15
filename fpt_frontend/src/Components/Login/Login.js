// import React, { useState } from 'react';
// import styled from 'styled-components';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = (e) => {
//     e.preventDefault();
//     // Add authentication logic here (e.g., API call)
//   };

//   return (
//     <LoginForm>
//       <h2>Login</h2>
//       <form onSubmit={handleLogin}>
//         <input
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />
//         <button type="submit">Login</button>
//       </form>
//     </LoginForm>
//   );
// };

// const LoginForm = styled.div`
//   /* Styling for the login form */
// `;

// export default Login;
