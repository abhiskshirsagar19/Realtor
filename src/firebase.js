// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB_BWyog1_BRB3wKwxXwjPq2opUP9rCxF0",
  authDomain: "realtor-bd4e0.firebaseapp.com",
  projectId: "realtor-bd4e0",
  storageBucket: "realtor-bd4e0.appspot.com",
  messagingSenderId: "409557920668",
  appId: "1:409557920668:web:696df20aec10e2e2ddf659",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
