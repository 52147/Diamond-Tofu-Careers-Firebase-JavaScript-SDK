import { useCallback, useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import { getDatabase, onValue, ref, update } from "firebase/database";


const firebaseConfig = {
    apiKey: process.env.REACT_APP_apiKey,
    authDomain: "diamond-tofu-career.firebaseapp.com",
    projectId: "diamond-tofu-career",
    storageBucket: "diamond-tofu-career.appspot.com",
    messagingSenderId: "657730990855",
    appId: "1:657730990855:web:2dc941d2e38b5320e30ba2",
    measurementId: "G-30Q73BL49S",
  };
const firebase = initializeApp(firebaseConfig);
const database = getDatabase(firebase);

export const useDbData = (path) => {
  const [data, setData] = useState();
  const [error, setError] = useState(null);

  useEffect(
    () =>
      onValue(
        ref(database, path),
        (snapshot) => {
          setData(snapshot.val());
        },
        (error) => {
          setError(error);
        }
      ),
    [path]
  );

  return [data, error];
};

const makeResult = (error) => {
  const timestamp = Date.now();
  const message =
    error?.message || `Updated: ${new Date(timestamp).toLocaleString()}`;
  return { timestamp, error, message };
};

export const useDbUpdate = (path) => {
  const [result, setResult] = useState();
  const updateData = useCallback(
    (value) => {
      update(ref(database, path), value)
        .then(() => setResult(makeResult()))
        .catch((error) => setResult(makeResult(error)));
    },
    [database, path]
  );

  return [updateData, result];
};