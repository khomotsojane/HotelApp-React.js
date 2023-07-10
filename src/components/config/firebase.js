// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional


import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyCTSFarDaAysCybz6xJnqEqTKE6p_EZ0Yo",
  authDomain: "hotel-app-34855.firebaseapp.com",
  projectId: "hotel-app-34855",
  storageBucket: "hotel-app-34855.appspot.com",
  messagingSenderId: "52752817742",
  appId: "1:52752817742:web:10468d3f3d648b53e36d1f",
  measurementId: "G-72C3E1MDHB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);
const db = getFirestore(app);

export {auth, db}