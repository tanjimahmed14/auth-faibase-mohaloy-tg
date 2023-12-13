// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBD8tEHqMXulBxcgArHu2z4pHRvNS4hcKo",
  authDomain: "auth-faibase-mohaloy-tg.firebaseapp.com",
  projectId: "auth-faibase-mohaloy-tg",
  storageBucket: "auth-faibase-mohaloy-tg.appspot.com",
  messagingSenderId: "891800911517",
  appId: "1:891800911517:web:d74aeffba7f5ff90059e74"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;