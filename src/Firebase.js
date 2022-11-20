
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider, signInWithPopup} from 'firebase/auth'


import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCyvIpXJdiAMoyXnBJcFG_Y7_MHCbe-hCM",
  authDomain: "sportapp-github.firebaseapp.com",
  projectId: "sportapp-github",
  storageBucket: "sportapp-github.appspot.com",
  messagingSenderId: "284180492512",
  appId: "1:284180492512:web:7e4b642c5d3a0821e8a085",
  measurementId: "G-KWBR2EDT9M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export const SignInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
        console.log(result)

        const name = result.user.displayName;
        const email = result.user.email;
        const profilePic = result.user.photoURL;

        localStorage.setItem("name", name);
        localStorage.setItem("email", email);
        localStorage.setItem("profilePic", profilePic);
    }).catch((error) => {
        console.log(error)
    })
}





const analytics = getAnalytics(app);