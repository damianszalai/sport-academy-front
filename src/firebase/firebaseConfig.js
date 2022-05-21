// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


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

const db = getFirestore(app)

export default db;