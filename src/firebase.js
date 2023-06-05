import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCIK1Pi-6tufkHW_T7MRbidMPVDxiJ28L0",
    authDomain: "lineclone-abf44.firebaseapp.com",
    projectId: "lineclone-abf44",
    storageBucket: "lineclone-abf44.appspot.com",
    messagingSenderId: "645581848629",
    appId: "1:645581848629:web:c81cd7bbac73a23a57b17c"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export {db, auth};