// =====================================================
// KCL PRINTING AND PHOTOCOPY SHOP
// Midterm Project - Commit 1
// Stage: Basic Static Website
//
// This file is reserved for JavaScript functionality.
// Dark mode and GSAP features will be added in later commits.
// =====================================================


// =====================================================
// KCL PRINTING AND PHOTOCOPY SHOP
// Midterm Project - Commit 2
// Stage: Dark Mode Toggle
//
// B1: Toggle dark mode by adding or removing the
// "dark" class on the HTML element.
// =====================================================


const darkModeToggle = document.querySelector("#darkModeToggle");

darkModeToggle.addEventListener("click", function () {
    document.documentElement.classList.toggle("dark");

    if (document.documentElement.classList.contains("dark")) {
        darkModeToggle.textContent = "☀️ Light Mode";
    } else {
        darkModeToggle.textContent = "🌙 Dark Mode";
    }
});