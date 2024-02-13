/* TOGGLE ICON NAVBAR */
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

/* TOGGLE LIGHT MODE*/
document.addEventListener("DOMContentLoaded", () => {
  const switcherTheme = document.querySelector(".header__check");
  const root = document.documentElement;

  if (root.getAttribute("data-theme") === "dark") {
    switcherTheme.checked = true;
  }
  switcherTheme.addEventListener("click", toggleTheme);

  function toggleTheme() {
    const setTheme = switcherTheme.checked ? "dark" : "light";
    root.setAttribute("data-theme", setTheme);
    localStorage.setItem("theme", setTheme);
  }
});

/* READING THEME FROM LOCAL STORAGE AND SYSTEM COLOR SCHEME */

const storageTheme = localStorage.getItem("theme");
const systemColorScheme = window.matchMedia("(prefers-color-scheme: dark)")
  .matches
  ? "dark"
  : "light";

const newTheme = storageTheme ?? systemColorScheme;
document.documentElement.setAttribute("data-theme", newTheme);

/* CHANGE LANGUAGE */
const langSwitch = document.querySelector("#lang-switch");
langSwitch.addEventListener("click", changeLanguage);

function changeLanguage() {
  const setLanguage = langSwitch.checked;
  if (setLanguage === true) {
    location.href = "../es.html";
  } else {
    location.href = "../index.html";
  }
}

/* SCROLL SECTION ACTIVE LINK */
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
  /* STICKY NAVBAR */
  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 100);

  /* REMOVE TOGGLE ICON AND NAVABAR WHEN CLICKED */
  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};

/* SCROLL REVEAL */
ScrollReveal({
  /* reset: true, */
  distance: "80px",
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal(".home-content, .heading", { origin: "top" });
ScrollReveal().reveal(
  ".home-img, .services-container, .portfolio-box, .contact form",
  { origin: "bottom" }
);
ScrollReveal().reveal(".home-content h1, .about-img", { origin: "left" });
ScrollReveal().reveal(".home-content p, .about-content", { origin: "right" });

/* TYPED JS */
const typed = new Typed(".multiple-text", {
  strings: ["Full Stack Developer"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});
