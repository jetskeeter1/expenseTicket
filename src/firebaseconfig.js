// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBvyLYtoIy57fDXqWNw398rQdvuh6x6vMQ",
  authDomain: "expense-tracker-nord.firebaseapp.com",
  projectId: "expense-tracker-nord",
  storageBucket: "expense-tracker-nord.firebasestorage.app",
  messagingSenderId: "1019030667678",
  appId: "1:1019030667678:web:fc9d83b52c00d088eb968f",
  measurementId: "G-SR4QJQ1S1K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);