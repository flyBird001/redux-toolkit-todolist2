import firebase from "firebase/app";
import "firebase/auth";
import "firebase/storage";

const firebasApp = firebase.initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECTID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGEINGSENDERID,
  appId: process.env.REACT_APP_FIREBASE_APPID,
});

export const auth = firebase.auth;
export const db = firebasApp.firestore;
