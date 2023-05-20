import firebase from "firebase/app";
import "firebase/auth"

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyAz5YAW6cpvTJaBHfKGcOhP86_zPAPLUg8",
    authDomain: "unichat-7f4fc.firebaseapp.com",
    projectId: "unichat-7f4fc",
    storageBucket: "unichat-7f4fc.appspot.com",
    messagingSenderId: "173799199812",
    appId: "1:173799199812:web:0a1c26be62319927839811"
  }).auth();