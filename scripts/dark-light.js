// Retrieve saved theme from LocalStorage on page load
document.addEventListener("DOMContentLoaded", function () {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
        document.body.classList.add(savedTheme);
        document.querySelector("header").classList.add(savedTheme);
        // Set toggle state based on the saved theme
        document.getElementById("themeToggle").checked = savedTheme === "dark-theme";
    } else {
        // Default to light theme if no theme is saved
        document.body.classList.add("light-theme");
        document.querySelector("header").classList.add("light-theme");
    }
});

// Theme toggle functionality
document.getElementById("themeToggle").addEventListener("change", function () {
    if (this.checked) {
        // Apply dark theme and save it in LocalStorage
        document.body.classList.remove("light-theme");
        document.body.classList.add("dark-theme");
        document.querySelector("header").classList.remove("light-theme");
        document.querySelector("header").classList.add("dark-theme");
        localStorage.setItem("theme", "dark-theme");
    } else {
        // Apply light theme and save it in LocalStorage
        document.body.classList.remove("dark-theme");
        document.body.classList.add("light-theme");
        document.querySelector("header").classList.remove("dark-theme");
        document.querySelector("header").classList.add("light-theme");
        localStorage.setItem("theme", "light-theme");
    }
});
