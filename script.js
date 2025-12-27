function showTab(tabId, event) {
  const allTabs = document.querySelectorAll('.tab-content');
  const allButtons = document.querySelectorAll('.tab-button');

  // Hide all tab contents
  allTabs.forEach(tab => tab.classList.remove('active'));

  // Remove active class from all buttons
  allButtons.forEach(btn => btn.classList.remove('active'));

  // Show selected tab and highlight active button
  document.getElementById(tabId).classList.add('active');
  event.target.classList.add('active');
}

// Contact form message
document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Thank you for your message! I'll get back to you soon.");
  this.reset();
});

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
    collisions: { enable: true },
    move: { enable: true, speed: 2, direction: "none", outModes: "bounce" },
    number: { value: 60, density: { enable: true, area: 800 } },
    opacity: { value: 0.5 },
    shape: { type: "circle" },
    size: { value: { min: 1, max: 5 } }
  },
  detectRetina: true
};

const particlesOptionsDark = {
  background: { color: { value: "#000000" } }, // black background for dark mode
  fpsLimit: 60,
  interactivity: {
    events: { onHover: { enable: true, mode: "repulse" }, resize: true },
    modes: { repulse: { distance: 100, duration: 0.4 } }
  },
  particles: {
    color: { value: "#00bcd4" },
    links: { enable: true, color: "#00bcd4", distance: 150, opacity: 0.4, width: 1 },
    collisions: { enable: true },
    move: { enable: true, speed: 2, direction: "none", outModes: "bounce" },
    number: { value: 60, density: { enable: true, area: 800 } },
    opacity: { value: 0.5 },
    shape: { type: "circle" },
    size: { value: { min: 1, max: 5 } }
  },
  detectRetina: true
};

// Initial load with light options
tsParticles.load("particles-js", particlesOptionsLight);

document.getElementById('darkToggle').addEventListener('change', function () {
  document.body.classList.toggle('dark-mode');
  
  if(document.body.classList.contains('dark-mode')) {
    tsParticles.load("particles-js", particlesOptionsDark);
  } else {
    tsParticles.load("particles-js", particlesOptionsLight);
  }
});
