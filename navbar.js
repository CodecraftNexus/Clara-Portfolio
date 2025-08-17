document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll("nav a");
    const sections = document.querySelectorAll("section");

    // Intersection Observer setup
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                const link = document.querySelector(`a[href="#${entry.target.id}"]`);
                if (entry.isIntersecting) {
                    navLinks.forEach((navLink) => navLink.classList.remove("active"));
                    link.classList.add("active");
                }
            });
        },
        { threshold: 0.5 } // Adjust to control how much of the section is in view before it activates
    );

    // Observe each section
    sections.forEach((section) => observer.observe(section));
});



// Back to top functionality
const backToTop = document.querySelector('.back-to-top');
backToTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});