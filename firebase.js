import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA7zpt9PWbDPzrHEXnahc3h2h9asfqXQa8",
  authDomain: "clone-fe13e.firebaseapp.com",
  projectId: "clone-fe13e",
  storageBucket: "clone-fe13e.appspot.com",
  messagingSenderId: "820996075096",
  appId: "1:820996075096:web:54b15bd0bb70ad8696e42d",
  measurementId: "G-9S6BL2GCW8",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

export default db;
