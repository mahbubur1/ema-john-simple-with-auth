// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCiZLf67_BNjcaC9cSyWBvryhzy-dU4mgI",
  authDomain: "ema-john-simple-e564a.firebaseapp.com",
  projectId: "ema-john-simple-e564a",
  storageBucket: "ema-john-simple-e564a.appspot.com",
  messagingSenderId: "459074168280",
  appId: "1:459074168280:web:49f4aaaf3c009cb46c7ead"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;