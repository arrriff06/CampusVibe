

    document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('.nav-link');

  function setActiveLink() {
    const fromTop = window.scrollY + 100; // adjust offset
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
    // Wait for DOM to load
document.addEventListener('DOMContentLoaded', () => {
  // Get elements
  const startBtn = document.querySelectorAll('.start-creating');
 
  const getStartedBtn = document.querySelectorAll('.get-started');
  const demoModal = document.getElementById('demoModal');
  const closeBtn = demoModal.querySelector('.close-button');

  // Start Creating button alert
  startBtn.addEventListener('click', () => {
    alert('Start creating your campus events now!');
  });

  // Watch Demo button opens modal
  watchBtn.addEventListener('click', () => {
    demoModal.style.display = 'flex';
  });

  // Close modal when clicking close button
  closeBtn.addEventListener('click', () => {
    demoModal.style.display = 'none';
    // Stop video by resetting src
    const iframe = demoModal.querySelector('iframe');
    const src = iframe.src;
    iframe.src = '';
    iframe.src = src;
  });

  // Close modal if clicking outside the modal content
  window.addEventListener('click', (e) => {
    if (e.target === demoModal) {
      demoModal.style.display = 'none';
      const iframe = demoModal.querySelector('iframe');
      const src = iframe.src;
      iframe.src = '';
      iframe.src = src;
    }
  });

  // Get Started button scrolls smoothly to left content section
  getStartedBtn.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('.left-content').scrollIntoView({ behavior: 'smooth' });
  });
});
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
