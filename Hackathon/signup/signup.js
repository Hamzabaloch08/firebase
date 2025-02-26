import { auth,createUserWithEmailAndPassword } from "../firebase.js";

let email = document.getElementById('email')
let password = document.getElementById('password')
let signupBtn = document.querySelector('#signup-button')

let signup = (e) => {
  e.preventDefault(); // Add this line to prevent form submission
  createUserWithEmailAndPassword(auth, email.value, password.value)
  .then((userCredential) => {
      const user = userCredential.user;
      console.log(user, 'sign up successfully');
  })
  .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log('Error: ' + errorMessage);
  });
}


signupBtn.addEventListener('click',signup)

console.log('shahsdas')