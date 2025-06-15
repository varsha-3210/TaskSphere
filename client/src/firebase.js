// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "import.meta.env.VITE_APP_FIREBASE_API_KEY",
  authDomain: "taskspherefyp.firebaseapp.com",
  projectId: "taskspherefyp",
  storageBucket: "taskspherefyp.firebasestorage.app",
  messagingSenderId: "636609994296",
  appId: "1:636609994296:web:912fa2dc75c2ea9a1d90cd",
  measurementId: "G-1LHLTXB9XZ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);