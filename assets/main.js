document.addEventListener("DOMContentLoaded", () => {
  // Contact form validation
  const form = document.getElementById("hubForm");
  const status = document.getElementById("hubStatus");

  if (form && status) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      status.textContent = "";
      status.className = "form-status-u5bn";

      const name = document.getElementById("hubName").value.trim();
      const email = document.getElementById("hubEmail").value.trim();
      const message = document.getElementById("hubMessage").value.trim();
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!name || !email || !message) {
        status.textContent = "Please fill in all fields before submitting.";
        status.classList.add("status-err-k0nq");
        return;
      }
      if (!emailPattern.test(email)) {
        status.textContent = "Please enter a valid email address.";
        status.classList.add("status-err-k0nq");
        return;
      }

      form.reset();
      status.textContent = "Message sent successfully! We’ll reply within 48 hours.";
      status.classList.add("status-ok-ps4v");

      setTimeout(() => {
        status.textContent = "";
        status.className = "form-status-u5bn";
      }, 4000);
    });
  }

  // Scroll to top
  const scrollBtn = document.getElementById("hubScrollTop");
  if (scrollBtn) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) scrollBtn.classList.add("is-visible-h2cb");
      else scrollBtn.classList.remove("is-visible-h2cb");
    });
    scrollBtn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
  }

  // Footer year
  document.querySelectorAll("[data-year]").forEach((el) => {
    el.textContent = new Date().getFullYear();
  });
});
