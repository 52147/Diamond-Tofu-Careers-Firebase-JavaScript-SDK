import { useCallback, useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import { getDatabase, onValue, ref, update } from "firebase/database";
import {  getFirestore, collection, addDoc, getDocs } from "firebase/firestore";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";


export const firebaseConfig = {
    // apiKey: process.env.REACT_APP_apiKey,
    apiKey: "AIzaSyBU3h0sxwRtCttbizkG5lSMvw6For0Wd6A",
    authDomain: "diamond-tofu-career.firebaseapp.com",
    projectId: "diamond-tofu-career",
    storageBucket: "diamond-tofu-career.appspot.com",
    messagingSenderId: "657730990855",
    appId: "1:657730990855:web:2dc941d2e38b5320e30ba2",
    measurementId: "G-30Q73BL49S",
  };
console.log(process.env.REACT_APP_apiKey);
export const firebaseApp = initializeApp(firebaseConfig);
export const db = getFirestore(firebaseApp);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

