  // Navbar scroll
const header = document.getElementById("header");

window.addEventListener("scroll", () => {
  header.classList.toggle("scrolled", window.scrollY > 50);
});

// Counters animés
const counters = document.querySelectorAll(".counter");
const options = { threshold: 0.5 };

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const counter = entry.target;
      const target = parseInt(counter.getAttribute("data-target")) || 0;

      const update = () => {
        const currentText = counter.innerText.replace("+", "").trim();
        const count = parseInt(currentText) || 0;
        const increment = Math.max(1, Math.ceil(target / 100));

        if (count < target) {
          const nextCount = Math.min(count + increment, target);
          counter.innerText = nextCount;
          setTimeout(update, 20);
        } else {
          counter.innerText = target + "+";
        }
      };

      update();
      observer.unobserve(counter);
    }
  });
}, options);

counters.forEach((counter) => observer.observe(counter));

// Menu mobile
const menu = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav");
const menuClose = document.querySelector(".menu-close");

menu.addEventListener("click", () => {
  nav.classList.toggle("active");
});

menuClose.addEventListener("click", () => {
  nav.classList.remove("active");
});

// Smooth scroll pour tous les liens internes (navbar)
document.querySelectorAll("nav a").forEach((link) => {
  const href = link.getAttribute("href");

  if (href.startsWith("#")) {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const id = href.substring(1);
      document.getElementById(id).scrollIntoView({ behavior: "smooth" });
      nav.classList.remove("active");
    });
  }
});

// Effet lumineux et interaction pour les liens de navigation
const navLinks = document.querySelectorAll("nav a");

navLinks.forEach((link) => {
  link.addEventListener("touchstart", () => {
    link.style.transition = "0.3s";
    link.style.textShadow = "0 0 10px rgba(230,0,35,0.8), 0 0 20px rgba(230,0,35,0.5)";
    link.style.color = "#e60023";
    link.style.transform = "scale(1.1)";
  });

  link.addEventListener("touchend", () => {
    link.style.textShadow = "none";
    link.style.color = "inherit";
    link.style.transform = "scale(1)";
  });
});

// Effet flottant et lumineux pour les horaires de cours
document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".filter-btn");
  const cards = document.querySelectorAll(".schedule-card");

  // Logique de filtrage
  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      buttons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      const filterValue = btn.getAttribute("data-filter");

      cards.forEach((card) => {
        if (
          filterValue === "all" ||
          card.getAttribute("data-category") === filterValue
        ) {
          card.style.display = "block";
          setTimeout(() => {
            card.style.opacity = "1";
          }, 10);
        } else {
          card.style.opacity = "0";
          setTimeout(() => {
            card.style.display = "none";
          }, 300);
        }
      });
    });
  });

  // Effet flottant et lumineux
  cards.forEach((card) => {
    card.addEventListener("touchstart", () => {
      card.style.transition = "0.4s ease";
      card.style.transform = "translateY(-10px)";
      card.style.boxShadow =
        "0 0 30px rgba(230,0,35,0.6), 0 15px 25px rgba(0,0,0,0.15)";
      card.style.background =
        "linear-gradient(135deg, rgba(230,0,35,0.1), rgba(255,255,255,1))";
    });

    card.addEventListener("touchend", () => {
      card.style.transform = "translateY(0)";
      card.style.boxShadow = "0 5px 15px rgba(0,0,0,0.1)";
      card.style.background = "white";
    });
  });
});

let mybutton = document.getElementById("btnTop");

// Détection du scroll
window.onscroll = function() {
  if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
    mybutton.classList.add("show");
  } else {
    mybutton.classList.remove("show");
  }
};

// Remontée fluide
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

