document.addEventListener("DOMContentLoaded", () => {
    console.log("Website geladen!");

    const animatedSections = document.querySelectorAll(".animated-section");
    window.addEventListener("scroll", () => {
        animatedSections.forEach((section) => {
            const sectionTop = section.getBoundingClientRect().top;
            const triggerPoint = window.innerHeight - 100;
            if (sectionTop < triggerPoint) {
                section.classList.add("visible");
            }
        });
    });
});