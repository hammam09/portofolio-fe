// Mobile Menu
const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Typing Effect
const typingText = document.querySelector(".typing");

const words = [
  "Beginner Developer",
  "Frontend Developer",
  "UI Designer"
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {

  const currentWord = words[wordIndex];

  if (!isDeleting) {
    typingText.textContent =
      currentWord.substring(0, charIndex++);
  } else {
    typingText.textContent =
      currentWord.substring(0, charIndex--);
  }

  if (!isDeleting && charIndex === currentWord.length + 1) {
    isDeleting = true;
    setTimeout(typeEffect, 1000);
    return;
  }

  if (isDeleting && charIndex === 0) {
    isDeleting = false;
    wordIndex = (wordIndex + 1) % words.length;
  }

  setTimeout(typeEffect, isDeleting ? 50 : 100);
}

typeEffect();

// Scroll Reveal
function revealSections() {

  const reveals = document.querySelectorAll(".reveal");

  reveals.forEach((section) => {

    const windowHeight = window.innerHeight;
    const revealTop = section.getBoundingClientRect().top;

    if (revealTop < windowHeight - 100) {
      section.classList.add("active");
    }

  });
}

window.addEventListener("scroll", revealSections);

revealSections();

const form = document.getElementById("contactForm");
const statusText = document.getElementById("status");
const submitBtn = document.getElementById("submitBtn");

form.addEventListener("submit", async (e) => {

  e.preventDefault();

  const data = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value
  };

  // Loading State
  statusText.innerHTML = "Sending message...";
  submitBtn.disabled = true;
  submitBtn.innerHTML = "Sending...";

  try {

    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbzaXysQJjIYZoV5alY720yZZdTU6X93JBIF8H_x-JrQMvSHdwlg5Rdkpk9fy5blGxQO8Q/exec",
      {
        method: "POST",
        body: JSON.stringify(data)
      }
    );

    const result = await response.json();

    // Success State
    statusText.innerHTML = "✅ Message sent successfully!";
    submitBtn.innerHTML = "Message Sent";

    form.reset();

    setTimeout(() => {
      statusText.innerHTML = "";
      submitBtn.innerHTML = "Send Message";
      submitBtn.disabled = false;
    }, 3000);

  } catch (error) {

    // Error State
    statusText.innerHTML = "❌ Failed to send message.";
    submitBtn.innerHTML = "Try Again";

    setTimeout(() => {
      statusText.innerHTML = "";
      submitBtn.innerHTML = "Send Message";
      submitBtn.disabled = false;
    }, 3000);

  }

});

// ===============================
// LOADING SCREEN
// ===============================

window.addEventListener("load", () => {

  const loader =
    document.querySelector(".loader-wrapper");

  setTimeout(() => {

    loader.classList.add("fade-out");

  }, 1500);

}); 