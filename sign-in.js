document.addEventListener("DOMContentLoaded", () => {

  // Password toggle
  const passwordInput = document.getElementById("password");
  const passwordToggle = document.querySelector(".password-toggle");

  if (passwordToggle && passwordInput) {
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

  // ✅ SINGLE LOGIN HANDLER
  document.getElementById("loginForm").addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
      });

      const data = await res.json();
      console.log("LOGIN RESPONSE:", data);

      if (!res.ok) {
        alert(data.error || "Invalid credentials");
        return;
      }

      // Save auth data
      localStorage.setItem("token", data.token);
      localStorage.setItem("role", data.user.role);

      // Role-based redirect
      if (data.user.role === "admin") {
        window.location.href = "admin-dashboard.html";
      } else {
        window.location.href = "index.html";
      }

    } catch (err) {
      console.error(err);
      alert("Server error");
    }
  });

});


  