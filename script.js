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
function openLightbox(src) {
    document.getElementById("lightbox").style.display = "block";
    document.getElementById("lightbox-img").src = src;
}

function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
}
