// src/firebase/index.js

import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore";
import { getStorage } from 'firebase/storage';
import { getAuth, onAuthStateChanged } from "firebase/auth"
import { getDatabase } from "firebase/database"; // Import the getDatabase function
import { LocalStorage } from 'quasar'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCuxtiW31DQwsu9On6d__ZmRYaRy1C5jiw",
  authDomain: "baasproject1-2ce32.firebaseapp.com",
  projectId: "baasproject1-2ce32",
  storageBucket: "baasproject1-2ce32.appspot.com",
  messagingSenderId: "161080995123",
  appId: "1:161080995123:web:4920d00008f3d56470a246",
  measurementId: "G-EJE0DPCGGR"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage();
export const rtdb = getDatabase(app); // Initialize the Realtime Database


onAuthStateChanged(auth, (user) => {
 if (user) {
  LocalStorage.set('user', user)
 } else {
  LocalStorage.remove('user')
 }
});