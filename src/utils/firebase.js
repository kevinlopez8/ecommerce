// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBo5-xzzOArTUDsfEPxDZgxbGkRedeCaJ4",
  authDomain: "digital-madness-9aaed.firebaseapp.com",
  projectId: "digital-madness-9aaed",
  storageBucket: "digital-madness-9aaed.appspot.com",
  messagingSenderId: "966885978686",
  appId: "1:966885978686:web:1c2b6d6e03abc83a5e176f"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
// base de datos
export const db = getFirestore(app)