// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyANaCIGE65ek04vTpHcaFk39ghW4YVFSA0",
  authDomain: "login-f243e.firebaseapp.com",
  projectId: "login-f243e",
  storageBucket: "login-f243e.firebasestorage.app",
  messagingSenderId: "929262282985",
  appId: "1:929262282985:web:bb117a23ffdc287b76a878"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// ✅ Initialize Firebase Authentication and Google Provider
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

export default app;
