// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA7vvwPnqKK6ngL7uq-w3ABmFZTWZnl9cs",
  authDomain: "fir-react-auth-1f31e.firebaseapp.com",
  projectId: "fir-react-auth-1f31e",
  storageBucket: "fir-react-auth-1f31e.appspot.com",
  messagingSenderId: "133248057536",
  appId: "1:133248057536:web:417763b4acfaeaab9cad25",
  measurementId: "G-BZH3GERHRJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);