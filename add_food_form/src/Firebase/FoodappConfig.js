import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore"
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC0zGLQ4HHCZLoMKrkrHquLSWxdlws7Gyw",
  authDomain: "foodapp-73dd4.firebaseapp.com",
  projectId: "foodapp-73dd4",
  storageBucket: "foodapp-73dd4.appspot.com",
  messagingSenderId: "170800203276",
  appId: "1:170800203276:web:6de8de47a6a78977c09029",
  measurementId: "G-N4QCFWZVRS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = getFirestore(app)
const storage = getStorage(app)

export {db, storage}