// Scroll-triggered fade-in effect
function handleScrollFade() {
  const elements = document.querySelectorAll('.fade-in-on-scroll');
  const windowBottom = window.innerHeight + window.scrollY;

  elements.forEach(el => {
    const elementTop = el.offsetTop + 100; // adjust 100px to trigger earlier/later
    if (windowBottom > elementTop) {
      el.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', handleScrollFade);
window.addEventListener('load', handleScrollFade);


/* ===============================
   PROJECT TAB SWITCHING
================================ */
function showTab(tabId, event) {
  const allTabs = document.querySelectorAll('.tab-content');
  const allButtons = document.querySelectorAll('.tab-button');

  allTabs.forEach(tab => tab.classList.remove('active'));
  allButtons.forEach(btn => btn.classList.remove('active'));

  document.getElementById(tabId).classList.add('active');
  event.target.classList.add('active');
}

/* ===============================
   SMOOTH SCROLL FOR NAVBAR
================================ */
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    const targetSection = document.querySelector(targetId);

    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  });
});

/* ===============================
   CONTACT FORM
================================ */
const contactForm = document.getElementById("contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Thank you for your message! I'll get back to you soon.");
    this.reset();
  });
}

/* ===============================
   PARTICLES CONFIG
================================ */
const particlesOptionsLight = {
  background: { color: { value: "#f8f9fa" } },
  fpsLimit: 60,
  interactivity: {
    events: { onHover: { enable: true, mode: "repulse" }, resize: true },
    modes: { repulse: { distance: 100, duration: 0.4 } }
  },
  particles: {
    color: { value: "#6d00d4" },
    links: { enable: true, color: "#6d00d4", distance: 150, opacity: 0.4, width: 1 },
    move: { enable: true, speed: 2, outModes: "bounce" },
    number: { value: 60, density: { enable: true, area: 800 } },
    opacity: { value: 0.5 },
    shape: { type: "circle" },
    size: { value: { min: 1, max: 5 } }
  },
  detectRetina: true
};

const particlesOptionsDark = {
  ...particlesOptionsLight,
  background: { color: { value: "#000000" } }
};

/* ===============================
   LOAD PARTICLES
================================ */
tsParticles.load("particles-js", particlesOptionsLight);

/* ===============================
   DARK MODE TOGGLE
================================ */
const darkToggle = document.getElementById("darkToggle");
if (darkToggle) {
  darkToggle.addEventListener("change", function () {
    document.body.classList.toggle("dark-mode");

    tsParticles.load(
      "particles-js",
      document.body.classList.contains("dark-mode")
        ? particlesOptionsDark
        : particlesOptionsLight
    );
  });
}

/* ===============================
   Typing Effects
================================ */
const typingElement = document.getElementById('typing-effect');
const statuses = [
  "Software Engineer",
  "Web Developer",
  "App Developer",
  "Fullstack Developer",
];
let statusIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeStatus() {
  const currentStatus = statuses[statusIndex];

  if (!isDeleting) {
    // Typing
    typingElement.textContent = currentStatus.slice(0, charIndex + 1);
    charIndex++;

    if (charIndex === currentStatus.length) {
      isDeleting = true;
      setTimeout(typeStatus, 2000); // Pause before deleting
    } else {
      setTimeout(typeStatus, 100); // Typing speed
    }
  } else {
    // Deleting
    typingElement.textContent = currentStatus.slice(0, charIndex - 1);
    charIndex--;

    if (charIndex === 0) {
      isDeleting = false;
      statusIndex = (statusIndex + 1) % statuses.length; // Move to next status
      setTimeout(typeStatus, 500); // Pause before typing next status
    } else {
      setTimeout(typeStatus, 50); // Deleting speed
    }
  }
}

// Initialize Typing Effect
typeStatus();
