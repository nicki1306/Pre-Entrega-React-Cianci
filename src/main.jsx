import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react'
import './App.css';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
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
const analytics = getAnalytics(app);

createRoot(document.getElementById('root')).render(
  <ChakraProvider>
    <App />
  </ChakraProvider>

)
