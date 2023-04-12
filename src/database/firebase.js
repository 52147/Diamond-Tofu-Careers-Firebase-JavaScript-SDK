import { useCallback, useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import { getDatabase, onValue, ref, update } from "firebase/database";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut as signOutAuth,
} from "firebase/auth";

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

export const firebaseApp = initializeApp(firebaseConfig);
export const db = getFirestore(firebaseApp);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();

export const signInWithGooglePopup = async (setUid, navigate) => {
  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;
    const uid = user.uid;
    localStorage.setItem("uid", uid);
    localStorage.setItem("isLoggedIn", true);

    const email = user.email;

    const querySnapshot = await getDocs(collection(db, "access"));
    const documents = querySnapshot.docs;
    const matchingDocument = documents.find(
      (doc) => doc.data().email === email
    );

    if (matchingDocument) {
      console.log("Email is authorized.");
      // setUid(uid);
      // navigate("/table");
    } else {
      console.log("Email is not authorized. Checking UID...");
      const resumesCollection = collection(db, "resumes");
      const resumesSnapshot = await getDocs(resumesCollection);
      const resumes = resumesSnapshot.docs;
      const matchingResume = resumes.find(
        (resume) => resume.data().uid === uid
      );

      if (matchingResume) {
        console.log("UID is authorized.");
        setUid(uid);
        navigate("/user");
      } else {
        console.log("UID is not authorized.");
        // do something if UID is not authorized
      }
    }

    return user;
  } catch (error) {
    console.log(error.message);
  }
};

export const signOut = async (setAuthenticated) => {
  try {
    await signOutAuth(auth);
    localStorage.removeItem("uid");
    localStorage.removeItem("isLoggedIn");
    setAuthenticated(false);
  } catch (error) {
    console.log(error.message);
  }
};

export const isLoggedIn = () => {
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  return isLoggedIn === "true";
};
