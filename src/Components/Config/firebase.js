// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAIGMghsnMwFle2MRbpRghxhg86egHiNVk",
  authDomain: "fir-project-9055.firebaseapp.com",
  projectId: "fir-project-9055",
  storageBucket: "fir-project-9055.firebasestorage.app",
  messagingSenderId: "705371344787",
  appId: "1:705371344787:web:d43543552350cfc3276266",
  measurementId: "G-ZXLWV52TMY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);


export {analytics , auth}