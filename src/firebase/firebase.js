// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDGL2_ZJs_YzrD24eV6ghIdqfLLpJWBFL4",
  authDomain: "forms-e4fb1.firebaseapp.com",
  projectId: "forms-e4fb1",
  storageBucket: "forms-e4fb1.appspot.com",
  messagingSenderId: "794971817232",
  appId: "1:794971817232:web:e2f019f29f88fa16c91195"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db=getDatabase(app);