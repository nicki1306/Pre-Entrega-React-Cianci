// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBWFP5dd24fCS7hdDQV7KYMdaLTi19Vbog",
  authDomain: "fumiko-5b2b5.firebaseapp.com",
  projectId: "fumiko-5b2b5",
  storageBucket: "fumiko-5b2b5.appspot.com",
  messagingSenderId: "925560281514",
  appId: "1:925560281514:web:39e2960422753149a6f3d3",
  measurementId: "G-XH4D1FJ2C1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)

