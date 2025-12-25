document.addEventListener("DOMContentLoaded", () => {

    // PASSWORD TOGGLE
    const passwordInput = document.getElementById("password");
    const passwordToggle = document.querySelector(".password-toggle");

    if (passwordToggle) {
        passwordToggle.addEventListener("click", () => {
            const icon = passwordToggle.querySelector("i");

            if (passwordInput.type === "password") {
                passwordInput.type = "text";
                icon.classList.replace("fa-eye", "fa-eye-slash");
            } else {
                passwordInput.type = "password";
                icon.classList.replace("fa-eye-slash", "fa-eye");
            }
        });
    }

    // REGISTER API CALL
    const registerForm = document.getElementById("registerForm");

    if (registerForm) {
        registerForm.addEventListener("submit", async (e) => {
            e.preventDefault();

            const fullname = document.getElementById("fullname").value;
            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;
            const confirmPassword = document.getElementById("confirm-password").value;

            if (password !== confirmPassword) {
                alert("Passwords do not match!");
                return;
            }

            try {
                const res = await fetch("http://localhost:5000/api/auth/register", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ name: fullname, email, password })
                });

                const data = await res.json();
                console.log("REGISTER RESPONSE:", data);

                if (!res.ok) {
                    alert(data.error || "Registration failed");
                    return;
                }

                alert("Account created successfully!");
                window.location.href = "sign-in.html";

            } catch (err) {
                alert("Server error. Please try again later.");
                console.error(err);
            }
        });
    }

});
