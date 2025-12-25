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

// Search Suggestions (Supports Past Activities)
// ============================================
document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("searchInput");
  const suggestionsBox = document.getElementById("searchSuggestions");

  if (!searchInput || !suggestionsBox) return;

  function getAllEvents() {
  return Array.from(
    document.querySelectorAll(".event-card, .memory-card")
  ).map(card => ({
    title:
      card.dataset.title?.toLowerCase() ||
      card.querySelector("h3, p, b")?.innerText.toLowerCase() ||
      card.innerText.toLowerCase(),
    element: card
  }));
}


  searchInput.addEventListener("input", () => {
    const query = searchInput.value.toLowerCase().trim();
    suggestionsBox.innerHTML = "";

    if (!query) {
      suggestionsBox.style.display = "none";
      return;
    }

    const events = getAllEvents();
    const matches = events.filter(e => e.title.includes(query));

    if (matches.length === 0) {
      suggestionsBox.style.display = "none";
      return;
    }

    matches.slice(0, 6).forEach(match => {
      const li = document.createElement("li");
      li.textContent = match.title;

     li.addEventListener("click", () => {
  searchInput.value = match.title;
  suggestionsBox.style.display = "none";

  // Remove highlight from any previously highlighted card
  document.querySelectorAll(".highlight-event").forEach(el => {
    el.classList.remove("highlight-event");
  });

  // Scroll to the matched element
  match.element.scrollIntoView({
    behavior: "smooth",
    block: "center"
  });

  // Force reflow for anchor elements
match.element.classList.remove("highlight-event");
void match.element.offsetWidth;
match.element.classList.add("highlight-event");


  // Remove highlight after 3 seconds
  // Remove previous flash
document.querySelectorAll(".flash-highlight").forEach(el => {
  el.classList.remove("flash-highlight");
});

// Scroll to card
match.element.scrollIntoView({
  behavior: "smooth",
  block: "center"
});

// Force repaint then flash
setTimeout(() => {
  match.element.classList.add("flash-highlight");

  // Remove class after animation
  setTimeout(() => {
    match.element.classList.remove("flash-highlight");
  }, 1300);
}, 400);

});


      suggestionsBox.appendChild(li);
    });

    suggestionsBox.style.display = "block";
  });

  document.addEventListener("click", (e) => {
    if (!e.target.closest(".search-container")) {
      suggestionsBox.style.display = "none";
    }
  });
});
const clearBtn = document.getElementById("clearSearchBtn");

if (clearBtn) {
  clearBtn.addEventListener("click", () => {
    searchInput.value = "";
    suggestionsBox.innerHTML = "";
    suggestionsBox.style.display = "none";

    // Remove any flash highlight if present
    document.querySelectorAll(".flash-highlight").forEach(el => {
      el.classList.remove("flash-highlight");
    });

    searchInput.focus();
  });
}
