// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { FacebookAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDJrJC1Jig6CjTdoPIQjsKt_6zgS3dcPZk",
  authDomain: "prueba-tecnica-1993.firebaseapp.com",
  projectId: "prueba-tecnica-1993",
  storageBucket: "prueba-tecnica-1993.appspot.com",
  messagingSenderId: "8897205913",
  appId: "1:8897205913:web:ed52141a7f3cb1c55d0a08"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const google = new GoogleAuthProvider();
const facebook = new FacebookAuthProvider();
const db = getFirestore();

export {
  app,
  google,
  facebook,
  db
}