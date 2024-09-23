// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDQq0fZlM7MnpKxfosVDRKxt5tmCjVF_tQ",
  authDomain: "netflix-916bf.firebaseapp.com",
  projectId: "netflix-916bf",
  storageBucket: "netflix-916bf.appspot.com",
  messagingSenderId: "983930849640",
  appId: "1:983930849640:web:3eecb46338f00eb550eedd",
  measurementId: "G-YZN6TZ4WJF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const firebaseAuth = getAuth(app);