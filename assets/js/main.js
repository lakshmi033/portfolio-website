// Typing effect
const TYPE_TEXTS = [
  "Aspiring CSE Engineer",
  "Adaptive & Collaborative",
  "Tech-driven Learner"
];

(function () {
  const el = document.getElementById("typewrite");
  if (!el) return;

  let textIndex = 0;
  let charIndex = 0;
  let forward = true;
  const typingSpeed = 80;
  const erasingSpeed = 40;
  const delayAfter = 1000;

  function tick() {
    const current = TYPE_TEXTS[textIndex];
    if (forward) {
      charIndex++;
      if (charIndex > current.length) {
        forward = false;
        setTimeout(tick, delayAfter);
        return;
      }
    } else {
      charIndex--;
      if (charIndex < 0) {
        forward = true;
        textIndex = (textIndex + 1) % TYPE_TEXTS.length;
        setTimeout(tick, 300);
        return;
      }
    }
    el.textContent = current.slice(0, Math.max(0, charIndex));
    setTimeout(tick, forward ? typingSpeed : erasingSpeed);
  }
  tick();
})();

// Fade-in on scroll
const faders = document.querySelectorAll(".fade-in, .fade-up");
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

faders.forEach(fader => observer.observe(fader));

// Contact form
const CONTACT_EMAIL = "your@email.com"; // change to your email
const form = document.getElementById("contact-form");
if (form) {
  form.addEventListener("submit", e => {
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const subject = encodeURIComponent(`Portfolio message from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  });
}

// Signup form validation
const signupForm = document.getElementById("signup-form");
if (signupForm) {
  signupForm.addEventListener("submit", e => {
    e.preventDefault();
    const pwd = document.getElementById("password").value.trim();
    const confirm = document.getElementById("confirm").value.trim();
    if (pwd !== confirm) {
      alert("Passwords do not match!");
      return;
    }
    alert("Signup successful! (Demo for assignment)");
    signupForm.reset();
  });
}

// Footer year
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();
