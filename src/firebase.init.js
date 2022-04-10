// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import{getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCk1Jus_1kHzzreGcPD241dtWPXKkpevms",
  authDomain: "ema-john-simple-4f2d2.firebaseapp.com",
  projectId: "ema-john-simple-4f2d2",
  storageBucket: "ema-john-simple-4f2d2.appspot.com",
  messagingSenderId: "162433418333",
  appId: "1:162433418333:web:9318563dfca012796239b4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth=getAuth(app);

export default auth;