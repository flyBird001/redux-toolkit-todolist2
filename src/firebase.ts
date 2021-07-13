import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

// const firebaseConfig = {
//   apiKey: "AIzaSyCBxtzajw-NN06gXgZ4bYDLHZKu7BLXJBQ",
//   authDomain: "react-redux-todolist-b8b00.firebaseapp.com",
//   projectId: "react-redux-todolist-b8b00",
//   storageBucket: "react-redux-todolist-b8b00.appspot.com",
//   messagingSenderId: "662140438233",
//   appId: "1:662140438233:web:526b45b06f6f7a23c560c8",
// };
// const firebasApp = firebase.initializeApp({
//   apiKey: "AIzaSyCBxtzajw-NN06gXgZ4bYDLHZKu7BLXJBQ",
//   authDomain: "react-redux-todolist-b8b00.firebaseapp.com",
//   databaseURL: "https://react-redux-todolist-b8b0.firebaseio.com",
//   projectId: "react-redux-todolist-b8b00",
//   storageBucket: "react-redux-todolist-b8b00.appspot.com",
//   messagingSenderId: "662140438233",
//   appId: "1:662140438233:web:526b45b06f6f7a23c560c8",
// });
const firebasApp = firebase.initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECTID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGEINGSENDERID,
  appId: process.env.REACT_APP_FIREBASE_APPID,
});

export const auth = firebase.auth();
export const db = firebasApp.firestore();
