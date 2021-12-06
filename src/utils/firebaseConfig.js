// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBBv3Q9LvkfS7n-DVyxdyByGy00Jr8UeEw",
  authDomain: "flowgames-ad14c.firebaseapp.com",
  projectId: "flowgames-ad14c",
  storageBucket: "flowgames-ad14c.appspot.com",
  messagingSenderId: "766330753485",
  appId: "1:766330753485:web:13485dc104322391b9b484"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
//Connecting to Firestore
const db = getFirestore(app);



export default db;