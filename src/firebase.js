import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore/lite';
const firebaseConfig = {
    apiKey: "AIzaSyDkOrKfirjVwuaz2oJTWzQ7Z41sn2dcdCc",
    authDomain: "react-portfolio-dashboar-e32dd.firebaseapp.com",
    projectId: "react-portfolio-dashboar-e32dd",
    storageBucket: "react-portfolio-dashboar-e32dd.appspot.com",
    messagingSenderId: "445705217003",
    appId: "1:445705217003:web:2b21f9a440a3237e80afae"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);

export const signInWithGoogle = () => signInWithPopup(auth, provider);
