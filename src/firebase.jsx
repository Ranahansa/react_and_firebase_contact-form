import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDlHND7xjBPxz2NtW72WF8cW2D87VX9T_w",
    authDomain: "react-contact-form-c0d89.firebaseapp.com",
    projectId: "react-contact-form-c0d89",
    storageBucket: "react-contact-form-c0d89.appspot.com",
    messagingSenderId: "277298122700",
    appId: "1:277298122700:web:e0ceb20df909f412ab9769"
};
const app = initializeApp(firebaseConfig);
// Export firestore database
// It will be imported into your react app whenever it is needed
export const db = getFirestore(app);