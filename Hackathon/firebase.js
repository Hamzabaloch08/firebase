// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-auth.js";


const firebaseConfig = {
    apiKey: "AIzaSyD3apjMA0JnH2gNOQolZP0GQAR_G4GxOPM",
    authDomain: "fir-learning-e1aba.firebaseapp.com",
    projectId: "fir-learning-e1aba",
    storageBucket: "fir-learning-e1aba.appspot.com",
    messagingSenderId: "627452201110",
    appId: "1:627452201110:web:2b605133c37b46b82a5ab7"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);  
const auth = getAuth(app);

export {
    auth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword
};