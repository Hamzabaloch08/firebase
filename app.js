
const passwordInput = document.querySelector('#password');
const toggleIcon = document.querySelector('.toggle-password');

toggleIcon.addEventListener('click', () => {
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        toggleIcon.textContent = '🙈';
    } else {
        passwordInput.type = 'password';
        toggleIcon.textContent = '👁️';
    }
})

