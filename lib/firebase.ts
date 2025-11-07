// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZ8EbSL3yl5DIrY3qGDJmorlT97xNjFKg",
  authDomain: "portfolio-tracker-d298d.firebaseapp.com",
  projectId: "portfolio-tracker-d298d",
  storageBucket: "portfolio-tracker-d298d.firebasestorage.app",
  messagingSenderId: "742441076021",
  appId: "1:742441076021:web:2b67b28d32efed9a1eb87c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);