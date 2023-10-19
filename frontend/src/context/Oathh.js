// import React from 'react'
// import { GoogleAuthProvider, signInWithPopup,getAuth } from 'firebase/auth';
// import app from '../firebase';
// import { useDispatch } from 'react-redux';
// import { signInSuccess } from '../redux/userSlice';


// export default function Oathh() {
//     const dispatch = useDispatch();

//     const handleGoogleClicked = async () => {
//         try {
//             const provider = new GoogleAuthProvider();
//             const auth = getAuth(app);
//             const result = await signInWithPopup(auth, provider);
//             console.log(result);
//             const res = await  fetch('http://localhost:8000/api/auth/google', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify({ 
//                     token: result.credential.idToken,
//                     email: result.user.email,
//                     name: result.user.displayName,
//                     avatar: result.user.photoURL,
//                  }),
//             });
//             const data = await res.json();

//             // if (data.success) {
//             //     dispatch({ type: 'LOGIN', payload: data.user });
//             // }
//             dispatch(signInSuccess(data));
//             navigate('/');
            
//         } catch (error) {
//             console.log("Could not login with google", error);
//         }
//     }


//   return (
//     <button type='button' 
//     onClick={handleGoogleClicked}
//     className='bg-red-700 text-white rounded-lg p-3 uppercase hover:opacity-80'>Continue with google</button>
//   )
// }
