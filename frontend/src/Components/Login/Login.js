import React from "react";
import { useState } from "react";
import { useLogin } from "../../hook/useLogin";
import { Link } from "react-router-dom";
import loginImage from "../../img/loginImage.png";
import LoginFooter from "../Footer/LoginFooter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faLock,
  faEye,
  faEyeSlash,
} from "@fortawesome/free-solid-svg-icons";
import { facebook, google, loginIcon, signup as J } from "../../utils/Icons";
import { useSignup } from "../../hook/useSignup";
import { auth, provider, providerf } from "../../FirebaseConfig";
import {
  FacebookAuthProvider,
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
} from "firebase/auth";
import axios from "axios";

const Login = () => {
  const { login, error, isLoading } = useLogin();

  const [user, setUser] = useState(null);
  const { signup } = useSignup();

  const handleFacebookSignIn = () => {
    signInWithPopup(auth, providerf)
      .then((result) => {
        setUser(result.user);
        console.log(result.user.providerData);

        const credential = FacebookAuthProvider.credentialFromResult(result);
        const accessToken = credential.accessToken;
        fetch(
          `https://graph.facebook.com/${result.user.providerData[0].uid}/picture?type=1arge&&access_token=${accessToken}`,
        ).then((response) => response.blob());
        // .then((blob) => {
        //   setProfilePic(URL.createObjectURL(blob));
        // });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const checkUser = async (email) => {
    try {
      const response = await axios.get(
        `http://localhost:8000/api/user/${email}/`,
      );
      console.log(response);

      if (response.status === 200) {
        return true;
      } else {
        console.log("here");
        console.log(response.data);
        return false;
      }
      return true;
    } catch (error) {
      return false;
      console.log(error.message);
    }
  };

  const passwordGenerator = () => {
    return "PasswordForFirebase*123";
  };

  const handleGoogleSignIn = async () => {
    try {
      const auth = getAuth();
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      const isUserRegistered = await checkUser(user.email);
      // console.log(isUserRegistered);
      if (!isUserRegistered) {
        await signup(user.email, passwordGenerator());
      }
      await login(user.email, passwordGenerator());
    } catch (error) {
      console.log(error.message);
    }
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await login(email, password);
  };

  const handleLogout = () => {
    // auth.signOut()
    // .then(() => {
    //   setUser(null);
    // })
    // .catch((error) => {
    //   console.log(error.message);
    // })
    setUser(null);
  };

  return (
    <div
      style={{
        flex: 1,
        backgroundColor: "#2A2746",
        overflow: "auto",
        maxHeight: "100vh",
      }}
    >
      <div
        style={{
          display: "flex",
          height: "100vh",
          backgroundColor: "lightgray",
          overflow: "auto",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", flex: 2 }}>
          <div
            className="h-full flex items-center justify-center"
            style={{ flex: 2, position: "relative" }}
          >
            <h1 className="absolute top-8 left-24 right-24 text-green-950 text-8xl font-bold ">
              <span className="font-serif font-extrabold"> Welcome</span> to
              Personal Finance Tracker
            </h1>
          </div>

          <div style={{ flex: 2, backgroundColor: "lightgray" }}>
            <img
              src={loginImage}
              alt="Sample"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </div>
        </div>

        <div
          style={{
            flex: 1,
            backgroundColor: "#2A2746",
            borderTopLeftRadius: "80px",
            borderBottomLeftRadius: "80px",
          }}
        >
          <div className="flex h-full items-center justify-center">
            <div className="flex-1 max-w-md p-8 bg-transparent shadow-black rounded-lg shadow-2xl">
              <form className="login" onSubmit={handleSubmit}>
                <h3 className="text-6xl font-bold text-white text-center mb-4">
                  Log In
                </h3>
                <p className="text-lg font-light text-white text-center mb-4">
                  Get started with Personal Finance Tracker
                </p>
                <label
                  htmlFor="email"
                  className=" text-white text-2xl mb-8 mt-7"
                >
                  Email
                </label>
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
                <label
                  htmlFor="password"
                  className=" text-white text-2xl mb-8 mt-7"
                >
                  Password
                  <span>
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
          transition-transform transform hover:scale-125
          ${isLoading ? "bg-blue-300 cursor-not-allowed" : "hover:bg-blue-700"}`}
                >
                  {loginIcon} Log in
                </button>
                {error && <div className=" text-red-500">{error}</div>}

                <hr className="my-4" />
                <p className="text-white">or create new account</p>
                <Link to="/signup">
                  <button
                    className="w-full mb-4 mt-4 h-12 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-700
          transition-transform transform hover:scale-125"
                  >
                    {J} Sign Up
                  </button>
                </Link>
              </form>
              <div>
                {user ? (
                  <>
                    <button
                      className="w-full mb-4 mt-4 p-2 bg-red-500 text-white font-bold rounded-md hover:bg-green-700
        transition-transform transform hover:scale-125"
                      onClick={handleLogout}
                    >
                      LOGOUT GOOGLE
                    </button>
                    <h3 className="text-white">Welcome {user.displayName}</h3>
                    <p className="text-white">{user.email}</p>
                    <div className="flex justify-center">
                      <img
                        src={user.photoURL}
                        alt={user.displayName}
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  </>
                ) : (
                  <button
                    className="w-full mb-4 mt-4 p-2 bg-red-500 text-white font-bold rounded-md hover:bg-green-700
          transition-transform transform hover:scale-125"
                    onClick={handleGoogleSignIn}
                  >
                    {google} Continue With Google
                  </button>
                )}
              </div>
              <div className="text-center">
                {user ? (
                  <>
                    {/* <button className='w-full mb-4 mt-4 p-2 bg-red-500 text-white font-bold rounded-md hover:bg-green-700'
        onClick={handleLogout}>
          LOGOUT Facebook
        </button>
        <h3 className='text-white'>Welcome {user.displayName}</h3>
        <p className='text-white'>{user.email}</p>
        <div className='flex justify-center'>
          <img src={user.photoURL} alt={user.displayName} referrerPolicy='no-referrer' />
        </div> */}
                  </>
                ) : (
                  <button
                    className="w-full mb-4 mt-4 p-2 bg-blue-800 text-white font-bold rounded-md hover:bg-green-700
                        transition-transform transform hover:scale-125"
                    onClick={handleFacebookSignIn}
                  >
                    {facebook} Continue With Facebook
                  </button>
                )}
              </div>
              <div>
                <Link
                  to="/GettingStarted"
                  className="bg-blue-500 hover:bg-red-500 text-white font-bold py-2 px-4 rounded inline-block
                    transition-transform transform hover:scale-110"
                >
                  getting started
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <LoginFooter />
    </div>
  );
};

export default Login;
