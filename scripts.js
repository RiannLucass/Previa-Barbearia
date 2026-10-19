/* =========================================
   NAVALHA 013 — INTERAÇÕES
========================================= */

document.documentElement.classList.add("js-ready");

// =========================================
// MENU MOBILE
// =========================================

const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");
const navLinks = document.querySelectorAll(".nav-menu a");

function closeMenu() {
  if (!menuToggle || !navMenu) return;

  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Abrir menu");

  navMenu.classList.remove("active");
  document.body.classList.remove("menu-open");
}

function toggleMenu() {
  if (!menuToggle || !navMenu) return;

  const isOpen = menuToggle.getAttribute("aria-expanded") === "true";

  menuToggle.setAttribute("aria-expanded", String(!isOpen));

  menuToggle.setAttribute("aria-label", isOpen ? "Abrir menu" : "Fechar menu");

  navMenu.classList.toggle("active", !isOpen);
  document.body.classList.toggle("menu-open", !isOpen);
}

if (menuToggle && navMenu) {
  menuToggle.addEventListener("click", toggleMenu);

  navLinks.forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMenu();
    }
  });

  document.addEventListener("click", (event) => {
    const clickedInsideMenu = navMenu.contains(event.target);
    const clickedToggle = menuToggle.contains(event.target);

    if (!clickedInsideMenu && !clickedToggle) {
      closeMenu();
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 760) {
      closeMenu();
    }
  });
}

// =========================================
// ANIMAÇÕES AO ROLAR A PÁGINA
// =========================================

const revealElements = document.querySelectorAll(".reveal");

const prefersReducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)",
).matches;

if ("IntersectionObserver" in window && !prefersReducedMotion) {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.12,
      rootMargin: "0px 0px -35px 0px",
    },
  );

  revealElements.forEach((element) => {
    revealObserver.observe(element);
  });
} else {
  revealElements.forEach((element) => {
    element.classList.add("visible");
  });
}

// =========================================
// ANO AUTOMÁTICO NO RODAPÉ
// =========================================

const currentYear = document.querySelector("#current-year");

if (currentYear) {
  currentYear.textContent = new Date().getFullYear();
}

// =========================================
// WHATSAPP
// =========================================

// NÚMERO FICTÍCIO PARA DEMONSTRAÇÃO.
// Substitua pelo número real do cliente antes de publicar.

const whatsappNumber = "5511999999999";

const whatsappMessage =
  "Olá! Gostaria de saber mais sobre os serviços da NAVALHA 013.";

const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
  whatsappMessage,
)}`;

document.querySelectorAll(".whatsapp-link").forEach((link) => {
  link.href = whatsappURL;
});

// =========================================
// FIM DO SCRIPT
// =========================================
