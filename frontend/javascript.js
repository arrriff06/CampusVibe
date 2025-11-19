// ============================================
// Highlight active navbar links on scroll
// ============================================
document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('.nav-link');

  function setActiveLink() {
    const fromTop = window.scrollY + 100;

    navLinks.forEach(link => {
      const section = document.querySelector(link.hash);
      if (!section) return;

      if (
        section.offsetTop <= fromTop &&
        section.offsetTop + section.offsetHeight > fromTop
      ) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }

  window.addEventListener('scroll', setActiveLink);
  setActiveLink();
});

// ============================================
// Hero page buttons & modal
// ============================================
document.addEventListener('DOMContentLoaded', () => {
  const startBtn = document.querySelector('.start-creating');
  const getStartedBtn = document.querySelector('.get-started');
  const demoModal = document.getElementById('demoModal');
  const closeBtn = demoModal?.querySelector('.close-button');
  const watchBtn = document.querySelector('.watch-demo'); // FIXED ERROR

  if (startBtn) {
    startBtn.addEventListener('click', () => {
      alert('Start creating your campus events now!');
    });
  }

  if (watchBtn) {
    watchBtn.addEventListener('click', () => {
      demoModal.style.display = 'flex';
    });
  }

  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      demoModal.style.display = 'none';

      const iframe = demoModal.querySelector('iframe');
      const src = iframe.src;
      iframe.src = '';
      iframe.src = src;
    });
  }

  window.addEventListener('click', (e) => {
    if (e.target === demoModal) {
      demoModal.style.display = 'none';

      const iframe = demoModal.querySelector('iframe');
      const src = iframe.src;
      iframe.src = '';
      iframe.src = src;
    }
  });

  if (getStartedBtn) {
    getStartedBtn.addEventListener('click', (e) => {
      e.preventDefault();
      document.querySelector('.left-content').scrollIntoView({ behavior: 'smooth' });
    });
  }
});

// ============================================
// Login Check — Hide/Show Sign In / Logout Buttons
// ============================================
document.addEventListener("DOMContentLoaded", () => {
    const token = localStorage.getItem("token");

    const signInBtn = document.getElementById("signInBtn");
    const logoutBtn = document.getElementById("logoutBtn");

    if (token) {
        // User is logged in
        if (signInBtn) signInBtn.style.display = "none";
        if (logoutBtn) logoutBtn.style.display = "inline-block";
    }

    // Logout functionality
    if (logoutBtn) {
        logoutBtn.addEventListener("click", () => {
            localStorage.removeItem("token");
            alert("Logged out!");
            window.location.href = "sign-in.html";
        });
    }
});
