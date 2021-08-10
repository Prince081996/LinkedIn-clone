import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyCjsF2vhpXUEC2M-cWP90Y6CdkQF1lF7Zw",
    authDomain: "linkedin-clone-1c55d.firebaseapp.com",
    projectId: "linkedin-clone-1c55d",
    storageBucket: "linkedin-clone-1c55d.appspot.com",
    messagingSenderId: "281854804934",
    appId: "1:281854804934:web:94052c48b8c62203dae8c7",
    measurementId: "G-RPV8KDH7EY"
  };
const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()

export { db,auth }


