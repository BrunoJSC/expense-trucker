// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDl6WVzucrpvHKcva3j5z1Np2GloOnUx74",
  authDomain: "expense-tracker-15367.firebaseapp.com",
  projectId: "expense-tracker-15367",
  storageBucket: "expense-tracker-15367.appspot.com",
  messagingSenderId: "841962339542",
  appId: "1:841962339542:web:b459f76bb6d3119e9ddd77",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
