// Dark Mode Toggle
const darkModeToggle = document.getElementById("darkModeToggle");
darkModeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Dropdown Toggle
const dropdown = document.querySelector(".dropdown");
const traceabilityContent = document.getElementById("traceability-content");

dropdown.addEventListener("click", (event) => {
  event.preventDefault();
  dropdown.classList.toggle("active");
});

// Handle option selection and dynamic content
document.querySelectorAll(".dropdown-content a").forEach((option) => {
  option.addEventListener("click", (event) => {
    event.preventDefault();

    const selectedOption = event.target.getAttribute("data-option");

    // Update content dynamically
    if (selectedOption === "1") {
      traceabilityContent.innerHTML = `
        <h1>Option 1 Content</h1>
        <p>This is the content for Traceability - Option 1.</p>`;
    } else if (selectedOption === "2") {
      traceabilityContent.innerHTML = `
        <h1>Option 2 Content</h1>
        <p>This is the content for Traceability - Option 2.</p>`;
    }

    // Close the dropdown after selecting
    dropdown.classList.remove("active");
  });
});

// Slider Functionality
let currentSlide = 0;
const slides = document.querySelectorAll(".slide");
setInterval(() => {
  slides[currentSlide].classList.remove("active");
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add("active");
}, 3000);

// Back to Top Button Functionality
const backToTop = document.querySelector(".back-to-top");

// Show the Back to Top button when the user scrolls down
window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    document.body.classList.add("scrolled");
  } else {
    document.body.classList.remove("scrolled");
  }
});

// Smooth scroll to the top when the Back to Top button is clicked
backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
