document.addEventListener("DOMContentLoaded", () => {
    // Dark mode toggle
    const darkModeToggle = document.getElementById("dark-mode-toggle");
    if (darkModeToggle) {
        darkModeToggle.addEventListener("click", () => {
            document.body.classList.toggle("dark-mode");
        });
    }

    // Redirect to Netlify site when running locally
    if (window.location.hostname === "127.0.0.1" || window.location.hostname === "localhost") {
        window.location.href = "https://artmastro.netlify.app/";
    }

    // Intersection Observer for animations
    const sections = document.querySelectorAll("section"); 
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    }, { threshold: 0.2 });

    sections.forEach(section => observer.observe(section));

    // Lightbox functionality
    const lightboxLinks = document.querySelectorAll(".lightbox");
    const lightboxOverlay = document.createElement("div");
    lightboxOverlay.classList.add("lightbox-overlay");

    const lightboxImage = document.createElement("img");
    lightboxOverlay.appendChild(lightboxImage);
    document.body.appendChild(lightboxOverlay);

    lightboxLinks.forEach(link => {
        link.addEventListener("click", event => {
            event.preventDefault();
            const imageSrc = link.getAttribute("href");
            lightboxImage.src = imageSrc;
            lightboxOverlay.classList.add("active");
        });
    });

    lightboxOverlay.addEventListener("click", () => {
        lightboxOverlay.classList.remove("active");
    });

    // Contact form validation
    const contactForm = document.getElementById("contact-form");
    if (contactForm) {
        contactForm.addEventListener("submit", event => {
            event.preventDefault();

            let name = document.getElementById("name").value.trim();
            let email = document.getElementById("email").value.trim();
            let message = document.getElementById("message").value.trim();
            let formMessage = document.getElementById("form-message");

            if (!name || !email || !message) {
                formMessage.style.color = "red";
                formMessage.textContent = "Please fill in all fields!";
                return;
            }

            formMessage.style.color = "green";
            formMessage.textContent = "Message sent successfully!";
            
            // Clear form fields
            contactForm.reset();
        });
    }

    // Like button functionality
    document.querySelectorAll(".like-button").forEach(button => {
        button.addEventListener("click", () => {
            let artworkId = button.getAttribute("data-id");
            let likeCountSpan = document.getElementById(`like-count-${artworkId}`);
            let currentLikes = parseInt(likeCountSpan.textContent) || 0;

            if (!button.classList.contains("liked")) {
                likeCountSpan.textContent = currentLikes + 1;
                button.classList.add("liked");
            } else {
                likeCountSpan.textContent = currentLikes - 1; 
                button.classList.remove("liked"); 
            }
        });
    });
});
 