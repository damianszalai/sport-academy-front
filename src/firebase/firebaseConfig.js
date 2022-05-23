import 'firebase/auth'
// Import the functions you need from the SDKs you need
import { getFirestore } from "firebase/firestore";
import   { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { GoogleAuthProvider } from 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyB5iPMjbwCLllEQrHxFCjkfMQgSJ5M0ZVw",
  authDomain: "sport-academy-162cd.firebaseapp.com",
  projectId: "sport-academy-162cd",
  storageBucket: "sport-academy-162cd.appspot.com",
  messagingSenderId: "69140950916",
  appId: "1:69140950916:web:abc71fb780acf8595c77d1"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
//base de datos
const db = getFirestore(app)

const storage = getStorage(app);

const googleAuthProvider = new GoogleAuthProvider();
export {db, storage, googleAuthProvider};