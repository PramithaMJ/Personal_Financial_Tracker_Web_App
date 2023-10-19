import { initializeApp } from "firebase/app"; 
import {getAuth,GoogleAuthProvider,FacebookAuthProvider} from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyCwLPtQVJKPWi1fWQIs_wHD8b-OBB81S7E",
  authDomain: "personal-finance-tracker-auth.firebaseapp.com",
  projectId: "personal-finance-tracker-auth",
  storageBucket: "personal-finance-tracker-auth.appspot.com",
  messagingSenderId: "309556974083",
  appId: "1:309556974083:web:53d56405660169d1deb436"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const providerf = new FacebookAuthProvider();

export {auth,provider,providerf};