document.addEventListener("DOMContentLoaded", () => {
  console.log("Dayo Okeniyi & Co. website loaded successfully");
});
let slides = document.querySelectorAll(".slide");
let index = 0;

setInterval(() => {
  slides[index].classList.remove("active");
  index = (index + 1) % slides.length;
  slides[index].classList.add("active");
}, 5000);
document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");

  // Stop execution if elements do not exist
  if (!menuToggle || !navLinks) return;

  menuToggle.addEventListener("click", () => {
    menuToggle.classList.toggle("active");
    navLinks.classList.toggle("active");
  });

  document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
      menuToggle.classList.remove("active");
      navLinks.classList.remove("active");
    });
  });
});

document.querySelectorAll(".service-summary").forEach(button => {
  button.addEventListener("click", () => {
    button.closest(".service-item").classList.toggle("active");
  });
});
const serviceItems = document.querySelectorAll(".services-detail-item");

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.2 }
);

serviceItems.forEach(item => observer.observe(item));


const propertyCards = document.querySelectorAll('.property-card');

const observers = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('visible');
      observers.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

propertyCards.forEach(card => observers.observe(card));

