
import { initializeApp } from "firebase/app";
//import the following services
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"
import {getStorage} from "firebase/storage"


//Firebase Configuration
export const firebaseConfig = {
  apiKey: "AIzaSyC05sddW2WrLomf2WQOtKl8zz0nfVyQcwY",
  authDomain: "business-website-d67d9.firebaseapp.com",
  projectId: "business-website-d67d9",
  storageBucket: "business-website-d67d9.appspot.com",
  messagingSenderId: "723828472811",
  appId: "1:723828472811:web:f957be96746f79b77b37ae",
  measurementId: "G-56HSC10VHJ"
};
// Initialize Firebase services
const app = initializeApp(firebaseConfig);
//console.log(app)
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;

//We will be using the following firebase services for this project: authentication, firestore database, and storage

