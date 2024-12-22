// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB3Vlr5iZevCqZWvjCCJd9Cz5x56AuVugE",
  authDomain: "my-ecommerce-278ba.firebaseapp.com",
  projectId: "my-ecommerce-278ba",
  storageBucket: "my-ecommerce-278ba.firebasestorage.app",
  messagingSenderId: "72108713887",
  appId: "1:72108713887:web:3be4316a2f56896782bfaa"
};
// const firebaseConfig = {
//     apiKey: process.env.API_KEY,
//     authDomain: process.env.AUTH_DOMAIN,
//     projectId:process.env.PROJECT_ID,
//     storageBucket: process.env.STORAGE_BUCKET,
//     messagingSenderId:process.env.MSG_SENDER_ID,
//     appId: process.env.APP_ID
//   };
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)