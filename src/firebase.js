import firebase from "firebase";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyBTbXb1EGnlglil_gOTJ-T8EmnzR9i1QRs",
  authDomain: "todos-c0845.firebaseapp.com",
  projectId: "todos-c0845",
  storageBucket: "todos-c0845.appspot.com",
  messagingSenderId: "856261000438",
  appId: "1:856261000438:web:2fae67ec90e7cf3ea580d7"
};

const firebaseApp = firebase.initializeApp(config);

const firestore = firebaseApp.firestore();
firestore.settings({ timestampsInSnapshots: true });

export default firestore;
