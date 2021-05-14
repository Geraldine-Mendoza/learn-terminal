import firebase from "firebase/app"
import "firebase/auth"

console.log(process.env.REACT_APP_API_KEY);

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "learn-terminal.firebaseapp.com",
  projectId: "learn-terminal",
  storageBucket: "learn-terminal.appspot.com",
  messagingSenderId: "1067084965880",
  appId: "1:1067084965880:web:ce0b2680cd0f005a89180d",
  measurementId: "G-P90TMT8V2Q"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
export { auth, firebase };
