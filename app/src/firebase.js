// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCvmNPH1tfaSdnF8aQtFtfG4BvAkTGOAo0",
  
  authDomain: "mern-estate-7e29c.firebaseapp.com",
  projectId: "mern-estate-7e29c",
  storageBucket: "mern-estate-7e29c.appspot.com",
  messagingSenderId: "518801776210",
  appId: "1:518801776210:web:64c72c108cbbab3184498b",
  measurementId: "G-YBVHDQPH7X"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
