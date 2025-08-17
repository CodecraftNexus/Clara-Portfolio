function openDrawer() {
    document.getElementById("myDrawer").classList.add("open");
    document.getElementById("overlay").style.display = "block";
}



document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll(".drawer-content a");
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

function closeDrawer() {
    document.getElementById("myDrawer").classList.remove("open");
    document.getElementById("overlay").style.display = "none";
}

function handleNavClick(link) {
    closeDrawer();
    
    const sectionId = link.getAttribute('href');
    const section = document.querySelector(sectionId);
    const headerOffset = 20;
    const elementPosition = section.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
    });
}


