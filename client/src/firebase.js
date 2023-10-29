// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-1129.firebaseapp.com",
  projectId: "mern-auth-1129",
  storageBucket: "mern-auth-1129.appspot.com",
  messagingSenderId: "899031886183",
  appId: "1:899031886183:web:bd419919b935690ec527c2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);