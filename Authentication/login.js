const passwordInput = document.getElementById("password");
const toggleIcon = document.querySelector(".toggle-password");

toggleIcon.addEventListener('click', () => {
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        toggleIcon.textContent = "🙈"; // Change icon to the "hide" state
    } else {
        passwordInput.type = "password";
        toggleIcon.textContent = "👁️"; // Change icon to the "show" state
    }
});
