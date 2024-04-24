// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-ever.firebaseapp.com",
  projectId: "mern-ever",
  storageBucket: "mern-ever.appspot.com",
  messagingSenderId: "1092790754474",
  appId: "1:1092790754474:web:7bb12edb9008217adbc4d3"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

