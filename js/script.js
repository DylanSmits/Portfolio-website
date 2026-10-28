const menuToggle = document.querySelector("#menu-toggle");
const navLinks = document.querySelector("#nav-links");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("is-open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Menu sluiten" : "Menu openen");
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("is-open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Menu openen");
    });
  });
}

const year = document.querySelector("#year");
if (year) year.textContent = new Date().getFullYear();

const contactForm = document.querySelector("#contact-form");
const feedback = document.querySelector("#form-feedback");


const contactEmail = "df.smits@student.alfa-college.nl";

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!contactForm.reportValidity()) return;

    if (contactEmail === "df.smits@student.alfa-college.nl") {
      feedback.textContent = "Vul eerst je eigen e-mailadres in in index.html en js/script.js.";
      feedback.style.color = "#ffbd8a";
      return;
    }

    const formData = new FormData(contactForm);
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const subject = String(formData.get("subject") || "").trim();
    const message = String(formData.get("message") || "").trim();

    const emailSubject = encodeURIComponent(`[Portfolio] ${subject}`);
    const emailBody = encodeURIComponent(
      `Naam: ${name}\nE-mail: ${email}\n\nBericht:\n${message}`
    );

    feedback.textContent = "Je e-mailprogramma wordt geopend met je bericht. Verstuur de e-mail daar om hem te verzenden.";
    feedback.style.color = "#77e3bf";
    window.location.href = `mailto:${contactEmail}?subject=${emailSubject}&body=${emailBody}`;
  });
}
