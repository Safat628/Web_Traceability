const darkModeToggle = document.getElementById('darkModeToggle');

darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode'); // Toggle dark mode class on the body
    const isDarkMode = document.body.classList.contains('dark-mode');
});

/* Optional: Set up dark mode styles */
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.body.classList.add('dark-mode'); // Apply dark mode if system preference is dark
}
