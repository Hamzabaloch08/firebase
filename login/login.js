import { auth, signInWithEmailAndPassword } from "../firebase.js";

let email = document.getElementById('email')
let password = document.getElementById('password')
let loginBtn = document.querySelector('#login-button')

let login = (e) => {
    e.preventDefault(); // Add this line to prevent form submission
    signInWithEmailAndPassword(auth, email.value, password.value)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user,'login bit aday ')
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage,'error')
        });
}

loginBtn.addEventListener('click', login)