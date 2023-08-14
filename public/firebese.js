import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getFirestore } from "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://support.google.com/firebase/answer/7015592
const firebaseConfig = {
    apiKey: "AIzaSyBdOItYr2urN_GzmBFNPUU2wmOLo2y8Iz0",
    authDomain: "card-8fde2.firebaseapp.com",
    projectId: "card-8fde2",
    storageBucket: "card-8fde2.appspot.com",
    messagingSenderId: "989695387951",
    appId: "1:989695387951:web:410d0b4bcf2a29cf5459da",
    measurementId: "G-T4SVWD8LLB"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const database = getDatabase(app);
export const fireStoreDb = getFirestore(app);
