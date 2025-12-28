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
    color: { value: "#00bcd4" },
    links: { enable: true, color: "#00bcd4", distance: 150, opacity: 0.4, width: 1 },
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
