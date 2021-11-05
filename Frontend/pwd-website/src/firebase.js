import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAdxUTQ9tv5VBk8bfivljvjHQJZgtjrnVo",
  authDomain: "pwd-firebase.firebaseapp.com",
  projectId: "pwd-firebase",
  storageBucket: "pwd-firebase.appspot.com",
  messagingSenderId: "53649872987",
  appId: "1:53649872987:web:c89196b0daaecb8bd5477e",
  measurementId: "G-JDMCM31KBH",
};


initializeApp(firebaseConfig);
export default getFirestore();