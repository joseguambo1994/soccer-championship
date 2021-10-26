import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD73QttMe3Xg7TkZxyUAEzspnMZQUbylOo",
  authDomain: "campeonato-80849.firebaseapp.com",
  projectId: "campeonato-80849",
  storageBucket: "campeonato-80849.appspot.com",
  messagingSenderId: "1004036081786",
  appId: "1:1004036081786:web:e9b48eb73d9341740a13c3"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();

export { auth, db } 