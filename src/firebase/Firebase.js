import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAO6gxcij9_3gV5zC19BpyiM-kPmAKUuZQ",
  authDomain: "linked-clone.firebaseapp.com",
  projectId: "linked-clone",
  storageBucket: "linked-clone.appspot.com",
  messagingSenderId: "509691343485",
  appId: "1:509691343485:web:4d90bdb698f41b9fb9b714",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth}