import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAk4xEqEvy8poTkyMmcojLKcBoUzBJnJS4",
    authDomain: "malik-s-portfolio-1b5bb.firebaseapp.com",
    projectId: "malik-s-portfolio-1b5bb",
    storageBucket: "malik-s-portfolio-1b5bb.firebasestorage.app",
    messagingSenderId: "1073168404048",
    appId: "1:1073168404048:web:e5c56c78c013a5bf27cb55",
    measurementId: "G-745M1ZW9KV"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);