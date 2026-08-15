const menuToggle = document.querySelector('.nav__menu-toggle');
const navLinks = document.querySelector('.nav__links');

if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });

  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
    });
  });
}

const pricingSwitchButtons = document.querySelectorAll(
  ".pricing__switch-button"
);

const pricingPlanCards = document.querySelectorAll(
  ".pricing__card"
);

pricingSwitchButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const selectedDuration = button.dataset.duration;

    pricingSwitchButtons.forEach((switchButton) => {
      switchButton.classList.remove(
        "pricing__switch-button--active"
      );

      switchButton.setAttribute("aria-pressed", "false");
    });

    button.classList.add(
      "pricing__switch-button--active"
    );

    button.setAttribute("aria-pressed", "true");

    pricingPlanCards.forEach((card) => {
      const price = card.querySelector(".pricing__amount");
      const duration = card.querySelector(
        ".pricing__duration"
      );

      if (selectedDuration === "yearly") {
        price.textContent = card.dataset.yearlyPrice;
        duration.textContent = "/ year";
      } else {
        price.textContent = card.dataset.monthlyPrice;
        duration.textContent = "/ month";
      }
    });
  });
});