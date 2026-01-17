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
   Hambuger Menu Toggle
================================ */
// Toggle hamburger menu
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navLinks.classList.toggle("active");
});

// Smooth scroll considering fixed header
document.querySelectorAll('#nav-links a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    const headerOffset = document.querySelector('header').offsetHeight;
    const elementPosition = target.offsetTop;
    const offsetPosition = elementPosition - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });

    // Close menu on click
    hamburger.classList.remove("active");
    navLinks.classList.remove("active");
  });
});


/* ===============================
   PROJECT
================================ */
  // Read More toggle
  document.querySelectorAll(".read-more-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const card = btn.closest(".project-content");
      card.querySelector(".short").style.display = "none";
      card.querySelector(".full").style.display = "block";
      btn.style.display = "none";
    });
  });

  // View More Projects
  const viewMoreBtn = document.getElementById("viewMoreBtn");
  const hiddenProjects = document.querySelectorAll(".project-card.hidden");
  let index = 0;

  viewMoreBtn.addEventListener("click", () => {
    for (let i = index; i < index + 3 && i < hiddenProjects.length; i++) {
      hiddenProjects[i].style.display = "flex";
    }
    index += 3;

    if (index >= hiddenProjects.length) {
      viewMoreBtn.style.display = "none";
    }
  });


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
