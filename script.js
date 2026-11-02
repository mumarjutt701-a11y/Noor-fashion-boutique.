// Shared JavaScript for Noor Fashion Boutique pages.

// Mobile navigation toggle
const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector(".main-nav");

if (menuToggle && mainNav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = mainNav.classList.toggle("show");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
    menuToggle.textContent = isOpen ? "✕" : "☰";
  });

  // Close the mobile menu after a navigation link is selected.
  mainNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mainNav.classList.remove("show");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Open navigation");
      menuToggle.textContent = "☰";
    });
  });
}

// Update footer year automatically.
document.querySelectorAll(".year").forEach((yearElement) => {
  yearElement.textContent = new Date().getFullYear();
});

// Demo contact form: front-end only; does not send/store data.
const contactForm = document.querySelector("#contact-form");
const formStatus = document.querySelector("#form-status");

if (contactForm && formStatus) {
  const params = new URLSearchParams(window.location.search);
  const subjectInput = contactForm.querySelector("#subject");
  const requestedSubject = params.get("subject");
  if (subjectInput && requestedSubject) subjectInput.value = requestedSubject;

  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!contactForm.checkValidity()) {
      contactForm.reportValidity();
      return;
    }
    const customerName = contactForm.querySelector("#name").value.trim();
    formStatus.textContent = `Thank you, ${customerName}! This demo form has shown a successful submission. No message was sent or stored.`;
    contactForm.reset();
    if (requestedSubject && subjectInput) subjectInput.value = requestedSubject;
  });
}
