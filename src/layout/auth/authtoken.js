import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // ✅ For authentication

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional 
//Generated config
const firebaseConfig = {
  apiKey: "AIzaSyBvyLYtoIy57fDXqWNw398rQdvuh6x6vMQ",
  authDomain: "expense-tracker-nord.firebaseapp.com",
  projectId: "expense-tracker-nord",
  storageBucket: "expense-tracker-nord.firebasestorage.app",
  messagingSenderId: "1019030667678",
  appId: "1:1019030667678:web:fc9d83b52c00d088eb968f",
  measurementId: "G-SR4QJQ1S1K"
};

// Initialize Firebase connections
const app = initializeApp(firebaseConfig);

// Export Auth to send authorization request
export const auth = getAuth(app);
