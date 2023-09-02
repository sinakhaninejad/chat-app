import { initializeApp } from "firebase/app";
//
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
//
//
const firebaseConfig = {
  apiKey: "AIzaSyBrnaNZw6DZysrvd3wejI_EqaR9muB6eew",
  authDomain: "react-firebase-realtime-db.firebaseapp.com",
  projectId: "react-firebase-realtime-db",
  storageBucket: "react-firebase-realtime-db.appspot.com",
  messagingSenderId: "751677947496",
  appId: "1:751677947496:web:4d42905d2700dc2724c5dd",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;
