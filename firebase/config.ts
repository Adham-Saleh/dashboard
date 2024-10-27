// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD-sfzfEiTY9-8Zcc_tCvzMSPSwT3TGUkU",
  authDomain: "dashboard-45544.firebaseapp.com",
  projectId: "dashboard-45544",
  storageBucket: "dashboard-45544.appspot.com",
  messagingSenderId: "212602314981",
  appId: "1:212602314981:web:61a2c7ede86bf208f3740c",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const projectAuth = getAuth(firebaseApp);

export { firebaseApp, projectAuth };
