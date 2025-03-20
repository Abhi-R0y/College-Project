document.addEventListener("DOMContentLoaded", function () {
    const signupForm = document.getElementById("signup-form");

    signupForm.addEventListener("submit", function (e) {
        e.preventDefault();

        let name = document.getElementById("name").value.trim();
        let email = document.getElementById("email").value.trim();
        let password = document.getElementById("password").value.trim();
        let confirmPassword = document.getElementById("confirm-password").value.trim();

        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        let users = JSON.parse(localStorage.getItem("users")) || [];

        let existingUser = users.find(user => user.email === email);
        if (existingUser) {
            alert("Email is already registered! Try logging in.");
            return;
        }

        users.push({ name, email, password });
        localStorage.setItem("users", JSON.stringify(users));

        alert("Signup successful! You can now log in.");
        window.location.href = "login.html";
    });
});
document.addEventListener("DOMContentLoaded", function () {
    // Signup Form Handling
    const signupForm = document.getElementById("signup-form");

    if (signupForm) {
        signupForm.addEventListener("submit", function (e) {
            e.preventDefault();

            let name = document.getElementById("name").value.trim();
            let email = document.getElementById("email").value.trim();
            let password = document.getElementById("password").value.trim();
            let confirmPassword = document.getElementById("confirm-password").value.trim();

            if (password !== confirmPassword) {
                alert("Passwords do not match!");
                return;
            }

            let users = JSON.parse(localStorage.getItem("users")) || [];

            let existingUser = users.find(user => user.email === email);
            if (existingUser) {
                alert("Email is already registered! Try logging in.");
                return;
            }

            users.push({ name, email, password });
            localStorage.setItem("users", JSON.stringify(users));

            alert("Signup successful! You can now log in.");
            window.location.href = "login.html";
        });
    }

    // Redirect Sign Up Button to signup.html
    const signupButton = document.querySelector(".signup-btn");
    if (signupButton) {
        signupButton.addEventListener("click", function (e) {
            if (signupButton.tagName !== "A") { // If it's not an <a> tag
                e.preventDefault();
                window.location.href = "signup.html";
            }
        });
    }
});
