// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyBIm0y2QbnvZr_TE5zj4ErZsUqRsO9zBmM",
  authDomain: "quizzi-2c865.firebaseapp.com",
  projectId: "quizzi-2c865",
  storageBucket: "quizzi-2c865.appspot.com",
  messagingSenderId: "99853278527",
  appId: "1:99853278527:web:f93d76a63d6174f046878a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app) 


export { db };