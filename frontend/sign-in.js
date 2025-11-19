document.addEventListener('DOMContentLoaded', () => {
  const badge = document.querySelector('.js-animate-badge');
  const highlight = document.querySelector('.js-animate-highlight');

  function checkVisibility() {
    const windowBottom = window.innerHeight;
    
    [badge, highlight].forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < windowBottom - 100) {
        el.classList.add('visible');
      }
    });
  }

  window.addEventListener('scroll', checkVisibility);
  checkVisibility(); // Check on load
});

// Add any future interactivity here
console.log("Cards loaded successfully!");
document.addEventListener('DOMContentLoaded', () => {
    // 1. Password Visibility Toggle
    const passwordInput = document.getElementById('password');
    const passwordToggle = document.querySelector('.password-toggle');

    if (passwordToggle && passwordInput) {
        passwordToggle.addEventListener('click', () => {
            const icon = passwordToggle.querySelector('i');

            if (passwordInput.type === 'password') {
                passwordInput.type = 'text';
                icon.classList.remove('fa-eye');
                icon.classList.add('fa-eye-slash'); // Change icon to 'eye-slash'
            } else {
                passwordInput.type = 'password';
                icon.classList.remove('fa-eye-slash');
                icon.classList.add('fa-eye'); // Change icon back to 'eye'
            }
        });
    }

    // 2. Basic Form Submission Handler (Prevents default action)
 // --- LOGIN API CALL ---
document.getElementById("loginForm").addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    try {
        const res = await fetch("http://localhost:5000/api/auth/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password })
        });

        const data = await res.json();

        if (!res.ok) {
            alert(data.message || "Invalid login credentials");
            return;
        }

        // Save JWT
        localStorage.setItem("token", data.token);

        alert("Login successful!");

        // Redirect to your home page
        window.location.href = "main.html";  // ← change if needed
    } 
    catch (err) {
        alert("Server error. Please try again later.");
        console.error(err);
    }
});


    // 3. Auth Toggle Button Click Handler (For demonstration, to show functionality)
    const signInButton = document.querySelector('.auth-toggle .btn-primary-filled');
    const signUpButton = document.querySelector('.auth-toggle .btn-secondary-outline');

    if (signInButton && signUpButton) {
        signInButton.addEventListener('click', () => {
            console.log('Switched to Sign In view.');
            // In a real app, this would switch the form/content
            signInButton.style.backgroundColor = 'var(--color-purple-primary)';
            signUpButton.style.backgroundColor = 'transparent';
        });

        signUpButton.addEventListener('click', () => {
            console.log('Switched to Sign Up view (not fully implemented in HTML/CSS).');
            // In a real app, this would switch the form/content
            signUpButton.style.backgroundColor = 'var(--color-purple-primary)';
            signInButton.style.backgroundColor = 'transparent';
        });
    }
});
