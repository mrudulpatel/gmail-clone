import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCQWdFZ1uO_Fx9W0KtcjqP7Bed_wEZy960",
  authDomain: "clone-4e29d.firebaseapp.com",
  projectId: "clone-4e29d",
  storageBucket: "clone-4e29d.appspot.com",
  messagingSenderId: "948261787818",
  appId: "1:948261787818:web:4b7fdf5e7e2fae969c58d3",
  measurementId: "G-V8NFL24T34",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
