const toggle = document.getElementById("theme-toggle");

toggle.addEventListener("click", () => {
  const currentTheme = document.documentElement.getAttribute("data-theme");
  const newTheme = currentTheme === "light" ? "dark" : "light";
  document.documentElement.setAttribute("data-theme", newTheme);
  toggle.textContent = newTheme === "light" ? "🌙" : "☀️";
});

// Portfolio filter logic
const filterButtons = document.querySelectorAll(".filter-btn");
const images = document.querySelectorAll(".gallery-grid img");

filterButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    // Remove active class
    filterButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    const filter = btn.getAttribute("data-filter");

    images.forEach(img => {
      const category = img.getAttribute("data-category");
      if (filter === "all" || category === filter) {
        img.style.display = "block";
      } else {
        img.style.display = "none";
      }
    });
  });
});

// Handle contact form submission
const form = document.getElementById("contactForm");
const popup = document.getElementById("thankYouPopup");

if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const formData = new FormData(form);

    fetch(form.action, {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    }).then((response) => {
      if (response.ok) {
        popup.classList.remove("hidden");

        setTimeout(() => {
          window.location.href = "index.html";
        }, 3000);
      } else {
        alert("Oops! Something went wrong. Please try again.");
      }
    });
  });
}
