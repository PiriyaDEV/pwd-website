import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB_PkJAmNfQvpp6EfjzIXe8jN1yYJZTgYk",
  authDomain: "pwd-website-94b46.firebaseapp.com",
  databaseURL:
    "https://pwd-website-94b46-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "pwd-website-94b46",
  storageBucket: "pwd-website-94b46.appspot.com",
  messagingSenderId: "819814567037",
  appId: "1:819814567037:web:ceb8ef9da159639a1eb514",
  measurementId: "G-GXS0F2SJYB",
};

firebase.initializeApp(firebaseConfig);
firebase.getAnalytics();

export default firebase;
