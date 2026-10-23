
// =====================================================
// KCL PRINTING AND PHOTOCOPY SHOP
// Midterm Project - Commit 3
// Stage: GSAP Animations
// =====================================================

// B1: DARK MODE TOGGLE
const darkModeToggle = document.querySelector("#darkModeToggle");

if (darkModeToggle) {
    darkModeToggle.addEventListener("click", function () {
        const isDark = document.documentElement.classList.toggle("dark");

        darkModeToggle.textContent = isDark ? "☀️ Light Mode" : "🌙 Dark Mode";
        darkModeToggle.setAttribute("aria-pressed", String(isDark));
    });
}

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// D1 + D2: INTRO ANIMATION TIMELINE
const introTimeline = gsap.timeline({
    defaults: {
        duration: 0.6,
        ease: "power2.out" // Smoothly slows down at the end for a natural entrance.
    }
});

introTimeline
    .from("#introLabel", {
        y: 15,
        opacity: 0
    })
    .from("#introTitle", {
        y: 35,
        opacity: 0
    }, "-=0.3") // Overlaps the title animation with the label animation.
    .from("#introText", {
        y: 20,
        opacity: 0
    }, "-=0.3")
    .fromTo("#introButtons .hero-button",
        {
            y: 20,
            opacity: 0
        },
        {
            y: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.15, // Animates each button one after another.
            clearProps: "transform,opacity"
        },
        "-=0.2"
    )
    .from("#introCard", {
        x: 35,
        opacity: 0
    }, "-=0.4");

// D3: REPLAY INTRO BUTTON
const replayBtn = document.querySelector("#replayBtn");

if (replayBtn) {
    replayBtn.addEventListener("click", function () {
        introTimeline.restart();
    });
}

// E1: SCROLL REVEALS
document.querySelectorAll(".reveal").forEach(function (section) {
    gsap.from(section, {
        y: 40,
        opacity: 0,
        duration: 0.7,
        ease: "power2.out", // Gives each section a smooth entrance.
        scrollTrigger: {
            trigger: section,
            start: "top 85%",
            toggleActions: "play none none reverse"
        }
    });
});
