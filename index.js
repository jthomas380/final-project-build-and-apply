const navButton = document.querySelector(".nav__button");
const menuToggle = document.querySelector(".nav__menu-toggle");
const navLinks = document.querySelector(".nav__links");

if (navButton) {
  navButton.addEventListener("click", function () {
    window.location.href = "https://www.google.com";
  });
}

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
    });
  });
}

// First section //

const fsecButtonRight = document.querySelector(".fsec__button--right");
const fsecButtonLeft = document.querySelector(".fsec__button--left");

if (fsecButtonRight) {
  fsecButtonRight.addEventListener("click", function () {
    window.location.href = "https://www.google.com";
  });
}

if (fsecButtonLeft) {
  fsecButtonLeft.addEventListener("click", function () {
    window.location.href = "https://www.google.com";
  });
}
