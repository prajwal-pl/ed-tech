// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDbGUkv3HAqk5QZJTStZOMEG7fA-kRXFIk",
  authDomain: "ed-tech-cd1b4.firebaseapp.com",
  projectId: "ed-tech-cd1b4",
  storageBucket: "ed-tech-cd1b4.appspot.com",
  messagingSenderId: "838242082423",
  appId: "1:838242082423:web:91cd27c3a867d9ec8f3072",
  measurementId: "G-CF8XQFVF5L",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
