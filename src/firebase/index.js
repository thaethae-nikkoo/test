// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAaZ4mVktTgClGPKht1TZ98RK_EMF1IMUs",
  authDomain: "been-love-dadcc.firebaseapp.com",
  projectId: "been-love-dadcc",
  storageBucket: "been-love-dadcc.appspot.com",
  messagingSenderId: "966458242888",
  appId: "1:966458242888:web:238117e9e372ae9821e57d",
  measurementId: "G-4S4949RE1G",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

let db = getFirestore(app);
let auth = getAuth(app);
let storage = getStorage(app);

export { db, auth, storage };
