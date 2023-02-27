import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCziBpY7rIKzmqesGhL_N1BtiGh1Zm5qG4",
  authDomain: "chatgpt-messenger-a030e.firebaseapp.com",
  projectId: "chatgpt-messenger-a030e",
  storageBucket: "chatgpt-messenger-a030e.appspot.com",
  messagingSenderId: "473776808652",
  appId: "1:473776808652:web:fd175d0f7a47e25474d869"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);

export { db };
