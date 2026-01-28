const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.nav-dot');
let currentSlide = 0;
const totalSlides = slides.length;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
    dots[i].classList.toggle('active', i === index);
  });
  currentSlide = index;
}

// Auto Slide every 6s
setInterval(() => {
  let nextSlide = (currentSlide + 1) % totalSlides;
  showSlide(nextSlide);
}, 4000);

// Click Navigation
dots.forEach(dot => {
  dot.addEventListener('click', () => {
    showSlide(parseInt(dot.dataset.slide));
  });
});

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
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observers.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

propertyCards.forEach(card => observers.observe(card));

// Animate property cards on scroll
const propertyCardss = document.querySelectorAll('.property-page-card');

const observerss = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observerss.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

function openModal(id) {
  document.getElementById(id).style.display = "block";
}

function closeModal(id) {
  document.getElementById(id).style.display = "none";
}

window.onclick = function (e) {
  document.querySelectorAll('.modal').forEach(modal => {
    if (e.target === modal) modal.style.display = "none";
  });
};
// Detect mobile devices
const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

if (isMobile) {
  // Select all dropdown toggles
  const toggles = document.querySelectorAll('.dropdown-sub-toggle');

  toggles.forEach(toggle => {
    toggle.addEventListener('click', function (e) {
      e.stopPropagation(); // prevent closing when clicking inside

      // Close other open dropdowns
      document.querySelectorAll('.mega-menu').forEach(menu => {
        if (menu !== this.nextElementSibling) {
          menu.style.opacity = 0;
          menu.style.visibility = 'hidden';
        }
      });

      // Toggle current menu
      const menu = this.nextElementSibling;
      if (menu.style.visibility === 'visible') {
        menu.style.opacity = 0;
        menu.style.visibility = 'hidden';
      } else {
        menu.style.opacity = 1;
        menu.style.visibility = 'visible';
      }
    });
  });

  // Close dropdown if clicking outside
  document.addEventListener('click', () => {
    document.querySelectorAll('.mega-menu').forEach(menu => {
      menu.style.opacity = 0;
      menu.style.visibility = 'hidden';
    });
  });
}

const statNumbers = document.querySelectorAll('.stat-number');

function startCounting() {
  statNumbers.forEach(stat => {
    const target = +stat.getAttribute('data-target');
    let current = 0;
    const duration = 3000; // 3 seconds
    const increment = target / (duration / 30); // update every 30ms

    const counter = setInterval(() => {
      current += increment;
      if (current >= target) {
        stat.innerText = target;
        clearInterval(counter);
      } else {
        stat.innerText = Math.ceil(current);
      }
    }, 30);
  });
}

// Intersection Observer for visibility
const statsSection = document.querySelector('.stats-section');

const statsObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      startCounting();
      statsObserver.disconnect(); // only trigger once
    }
  });
}, { threshold: 0.5 });

statsObserver.observe(statsSection);

const tabButtons = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

tabButtons.forEach(btn => {
  btn.addEventListener('mouseenter', activateTab);
  btn.addEventListener('click', activateTab);
});

function activateTab(e) {
  const target = e.currentTarget.dataset.tab;

  tabButtons.forEach(b => b.classList.remove('active'));
  tabContents.forEach(c => c.classList.remove('active'));

  e.currentTarget.classList.add('active');
  document.getElementById(target).classList.add('active');
}