// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {  getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC3lbJmhCWT4vkFUXJFODgXa2oX5ZIynPo",
  authDomain: "podcast-app-778fb.firebaseapp.com",
  projectId: "podcast-app-778fb",
  storageBucket: "podcast-app-778fb.appspot.com",
  messagingSenderId: "737334292637",
  appId: "1:737334292637:web:7a0517efe15c13dfd5a474",
  measurementId: "G-QZ91DJ82P2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };