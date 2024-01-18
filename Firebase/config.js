import { initializeApp } from 'firebase/app';
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyBWFP5dd24fCS7hdDQV7KYMdaLTi19Vbog",
    authDomain: "fumiko-5b2b5.firebaseapp.com",
    projectId: "fumiko-5b2b5",
    storageBucket: "fumiko-5b2b5.appspot.com",
    messagingSenderId: "925560281514",
    appId: "1:925560281514:web:39e2960422753149a6f3d3",
    measurementId: "G-XH4D1FJ2C1"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export {db}

