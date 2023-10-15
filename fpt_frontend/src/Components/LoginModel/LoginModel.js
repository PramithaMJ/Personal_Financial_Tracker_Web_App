// import React, { useState } from 'react';
// import Modal from 'react-modal';
// import styled from 'styled-components';

// Modal.setAppElement('#root'); // Set the root element for accessibility

// const LoginModal = ({ isOpen, onRequestClose, onLoginSuccess }) => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = (e) => {
//     e.preventDefault();
//     // Add authentication logic here (e.g., API call)
//     const isAuthenticated = true; // Replace with your authentication logic
//     if (isAuthenticated) {
//       onLoginSuccess();
//     }
//   };

//   return (
//     <Modal
//       isOpen={isOpen}
//       onRequestClose={onRequestClose}
//       contentLabel="Login Modal"
//     >
//       <ModalContent>
//         <h2>Login</h2>
//         <form onSubmit={handleLogin}>
//           <input
//             type="email"
//             placeholder="Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//           <button type="submit">Login</button>
//         </form>
//       </ModalContent>
//     </Modal>
//   );
// };

// const ModalContent = styled.div`
//   /* Styling for the modal content */
// `;

// export default LoginModal;
