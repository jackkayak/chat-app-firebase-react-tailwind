// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore} from 'firebase/firestore';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAgkVT-PmrSTx3X6iXSjTBhdzqzhaII25U",
  authDomain: "chat-app-react-925d3.firebaseapp.com",
  projectId: "chat-app-react-925d3",
  storageBucket: "chat-app-react-925d3.appspot.com",
  messagingSenderId:"188936359820",
  appId: "1:188936359820:web:1bf3ed6ee59dccf42d50a9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)