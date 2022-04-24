// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAWONKfQgU2sZPHbxERQY7O2VCfKLYTgxI",
    authDomain: "late-assignment.firebaseapp.com",
    projectId: "late-assignment",
    storageBucket: "late-assignment.appspot.com",
    messagingSenderId: "632408202426",
    appId: "1:632408202426:web:c12e545dbb919f818f7683"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;