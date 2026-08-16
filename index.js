/* ========================================
   MOBILE NAVIGATION
======================================== */

const menuToggle = document.querySelector(".site-header__menu-toggle");
const navigationLinks = document.querySelector(".site-header__links");

if (menuToggle && navigationLinks) {
  const closeMenu = () => {
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation menu");
    navigationLinks.classList.remove("is-open");
    document.body.classList.remove("menu-open");
  };

  menuToggle.addEventListener("click", () => {
    const isOpen = menuToggle.getAttribute("aria-expanded") === "true";

    menuToggle.setAttribute("aria-expanded", String(!isOpen));
    menuToggle.setAttribute(
      "aria-label",
      isOpen ? "Open navigation menu" : "Close navigation menu"
    );

    navigationLinks.classList.toggle("is-open", !isOpen);
    document.body.classList.toggle("menu-open", !isOpen);
  });

  navigationLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 1024) {
      closeMenu();
    }
  });
}

/* ========================================
   HERO FORM
======================================== */

const heroForm = document.querySelector(".hero-section__form");
const heroFormMessage = document.querySelector(".hero-section__form-message");

if (heroForm && heroFormMessage) {
  heroForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const emailInput = heroForm.querySelector("input[type='email']");

    if (!emailInput.checkValidity()) {
      heroFormMessage.textContent = "Please enter a valid email address.";
      emailInput.focus();
      return;
    }

    heroFormMessage.textContent = "Thanks! Your request has been received.";
    heroForm.reset();
  });
}

/* ========================================
   TESTIMONIAL SLIDER
======================================== */

const testimonials = [
  {
    title: "Amazing User Experience",
    quote:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
    name: "Charlotte Hale",
    role: "Director, Delos Inc.",
    image: "assets/charlotte-hale.jpg"
  },
  {
    title: "Love the Developer Experience and Design Principles!",
    quote:
      "Sinor Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. The components are thoughtfully organized, responsive, and easy for our team to customize.",
    name: "Adam Cuppy",
    role: "Founder, EventsNYC",
    image: "assets/adam-cuppy.jpeg"
  }
];

const testimonialTitle = document.querySelector(".testimonials-section__quote-title");
const testimonialText = document.querySelector(".testimonials-section__quote-text");
const testimonialName = document.querySelector(".testimonials-section__name");
const testimonialRole = document.querySelector(".testimonials-section__role");
const testimonialAvatar = document.querySelector(".testimonials-section__avatar");
const testimonialControls = document.querySelectorAll(".testimonials-section__control");
let testimonialIndex = 0;

const renderTestimonial = () => {
  const testimonial = testimonials[testimonialIndex];

  testimonialTitle.textContent = testimonial.title;
  testimonialText.textContent = testimonial.quote;
  testimonialName.textContent = testimonial.name;
  testimonialRole.textContent = testimonial.role;
  testimonialAvatar.src = testimonial.image;
  testimonialAvatar.alt = testimonial.name;
};

if (
  testimonialTitle &&
  testimonialText &&
  testimonialName &&
  testimonialRole &&
  testimonialAvatar &&
  testimonialControls.length
) {
  testimonialControls.forEach((control) => {
    control.addEventListener("click", () => {
      const direction = control.dataset.direction;
      const offset = direction === "next" ? 1 : -1;

      testimonialIndex =
        (testimonialIndex + offset + testimonials.length) % testimonials.length;

      renderTestimonial();
    });
  });
}

/* ========================================
   FAQ ACCORDION
======================================== */

const faqItems = document.querySelectorAll(".faq-section__item");

faqItems.forEach((item) => {
  const question = item.querySelector(".faq-section__question");
  const answer = item.querySelector(".faq-section__answer");

  question.addEventListener("click", () => {
    const isOpen = question.getAttribute("aria-expanded") === "true";

    faqItems.forEach((otherItem) => {
      const otherQuestion = otherItem.querySelector(".faq-section__question");
      const otherAnswer = otherItem.querySelector(".faq-section__answer");

      otherItem.classList.remove("is-open");
      otherQuestion.setAttribute("aria-expanded", "false");
      otherAnswer.hidden = true;
    });

    if (!isOpen) {
      item.classList.add("is-open");
      question.setAttribute("aria-expanded", "true");
      answer.hidden = false;
    }
  });
});

/* ========================================
   DEMONSTRATION BUTTONS
======================================== */

document.querySelectorAll("button[aria-disabled='true']").forEach((button) => {
  button.addEventListener("click", (event) => {
    event.preventDefault();
  });
});