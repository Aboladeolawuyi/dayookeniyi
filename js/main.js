document.addEventListener("DOMContentLoaded", () => {
  console.log("Dayo Okeniyi & Co. website loaded successfully");
});
let slides = document.querySelectorAll(".slide");
let index = 0;

setInterval(() => {
  slides[index].classList.remove("active");
  index = (index + 1) % slides.length;
  slides[index].classList.add("active");
}, 2000);
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

// Animate property cards on scroll
const propertyCardss = document.querySelectorAll('.property-page-card');

const observerss = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
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

  window.onclick = function(e) {
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
      toggle.addEventListener('click', function(e) {
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

