// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { connectAuthEmulator, getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth"
import {  onValue, ref, set, connectDatabaseEmulator } from 'firebase/database';
import { useEffect, useState } from "react";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_apiKey,
    authDomain: "diamond-tofu-career.firebaseapp.com",
    projectId: "diamond-tofu-career",
    storageBucket: "diamond-tofu-career.appspot.com",
    messagingSenderId: "657730990855",
    appId: "1:657730990855:web:2dc941d2e38b5320e30ba2",
    measurementId: "G-30Q73BL49S",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getFirestore();

export const useData = (path, transform) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    const dbRef = ref(database, path);
    const devMode = !process.env.NODE_ENV || process.env.NODE_ENV === 'development';
    if (devMode) { console.log(`loading ${path}`); }
    return onValue(dbRef, (snapshot) => {
      const val = snapshot.val();
      if (devMode) { console.log(val); }
      setData(transform ? transform(val) : val);
      setLoading(false);
      setError(null);
    }, (error) => {
      setData(null);
      setLoading(false);
      setError(error);
    });
  }, [path, transform]);

  return [data, loading, error];
};

export const updateData = (path, value) => {
  set(ref(database, path), value);
  console.log(ref(database, path));

}

// export  const auth = getAuth(app);

// const provider = new GoogleAuthProvider();
// export const signInWithGoogle = () => {
//     signInWithPopup(auth, provider)
//         .then((result) => {
//           localStorage.setItem("userId", result.user.uid);
//           localStorage.setItem("userName", result.user.displayName);
//         })
//         .then(() => {
//           window.location.reload(false);
//         })
//         .catch((err) => {
//           console.log(err); 
//         })
// };

// export const signOutWithGoogle = () => {
//     localStorage.removeItem("userName");
//     signOut(auth)
//         .then(() => {
//             window.location.reload(false);
//         })
// }
  
// if (!windows.EMULATION && import.meta.env.REACT_APP_EMULATE) {
//   connectAuthEmulator(auth, "http://127.0.0.1:9099");
//   connectDatabaseEmulator(database, "127.0.0.1", 9000);

//   signInWithCredential(auth, GoogleAuthProvider.credential(
//     '{"sub": "qEvli4msW0eDz5mSVO6j3W7i8w1k", "email": "tester@gmail.com", "displayName":"Test User", "email_verified": true}'
//   ));
  
//   windows.EMULATION = true;
// }