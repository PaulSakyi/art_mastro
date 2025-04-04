document.getElementById("dark-mode-toggle").addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
});

// Redirect to Netlify site when running locally
if (window.location.hostname === "127.0.0.1" || window.location.hostname === "localhost") {
    window.location.href = "https://artmastro.netlify.app/";
}
document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    }, { threshold: 0.2 });

    sections.forEach(section => {
        observer.observe(section);
    });
});
document.querySelectorAll(".gallery-img").forEach(img => {
    img.addEventListener("click", function () {
        document.getElementById("lightbox").style.display = "flex";
        document.getElementById("lightbox-img").src = this.src;
    });
});

document.getElementById("close-lightbox").addEventListener("click", function () {
    document.getElementById("lightbox").style.display = "none";
});
document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
    let formMessage = document.getElementById("form-message");

    if (name.trim() === "" || email.trim() === "" || message.trim() === "") {
        formMessage.style.color = "red";
        formMessage.textContent = "Please fill in all fields!";
        return;
    }

    formMessage.style.color = "green";
    formMessage.textContent = "Message sent successfully!";
    
    // Clear form fields
    document.getElementById("contact-form").reset();
}); 
document.addEventListener("DOMContentLoaded", function () {
    const lightboxLinks = document.querySelectorAll(".lightbox");
    const lightboxOverlay = document.createElement("div");
    lightboxOverlay.classList.add("lightbox-overlay");

    const lightboxImage = document.createElement("img");
    lightboxOverlay.appendChild(lightboxImage);
    document.body.appendChild(lightboxOverlay);

    lightboxLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const imageSrc = link.getAttribute("href");
            lightboxImage.src = imageSrc;
            lightboxOverlay.classList.add("active");
        });
    });

    lightboxOverlay.addEventListener("click", function () {
        lightboxOverlay.classList.remove("active");
    });
});
document.addEventListener("DOMContentLoaded", () => {
    // Track liked artworks in the current session
    const likedArtworks = JSON.parse(sessionStorage.getItem("likedArtworks")) || {}; // Load liked artworks from sessionStorage or initialize as empty

    document.querySelectorAll(".like-button").forEach(button => {
        const artworkId = button.getAttribute("data-id"); // Get the unique ID of the artwork
        const likeCountSpan = document.getElementById(`like-count-${artworkId}`); // Get the span where like count is displayed

        // Get the initial like count (can be dynamically loaded from a database, here it defaults to 0)
        let currentLikes = parseInt(likeCountSpan.textContent) || 0;

        // Display the initial like count
        likeCountSpan.textContent = currentLikes;

        // Check if the artwork has been liked in the current session
        if (likedArtworks[artworkId]) {
            button.classList.add("liked"); // Mark it as liked visually in this session
        }

        button.addEventListener("click", () => {
            if (!button.classList.contains("liked")) {
                // Increment like count if it's not already liked
                currentLikes++;
                likeCountSpan.textContent = currentLikes;

                // Add liked class to show it's liked visually
                button.classList.add("liked");
                likedArtworks[artworkId] = true; // Mark as liked in the session
            } else {
                // Decrement like count if already liked
                currentLikes--;
                likeCountSpan.textContent = currentLikes;

                // Remove liked class
                button.classList.remove("liked");
                delete likedArtworks[artworkId]; // Unmark as liked in the session
            }

            // Save the updated liked status to sessionStorage
            sessionStorage.setItem("likedArtworks", JSON.stringify(likedArtworks));
        });
    });
});
