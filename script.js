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
function sendNotification(action, artworkId, comment = '') {
    const templateParams = {
        action: action,            // This will be "like", "comment", etc.
        artworkId: artworkId,      // ID or name of the artwork
        comment: comment,          // The comment left by the user (if any)
    };

    // Send the email using your service and template IDs
    emailjs.send("gmail", "Artwork Interaction Notification", templateParams)
        .then((response) => {
            console.log("Email sent successfully", response);
        })
        .catch((error) => {
            console.log("Failed to send email", error);
        });
}
emailjs.init(service_hxgzttv);
function sendNotification(event) {
    // Data you want to send, replace with dynamic values based on user interaction
    const formData = {
      name: event.target.dataset.name, // Assuming you have the name as a data attribute
      email: event.target.dataset.email, // Same for email
      artwork: event.target.dataset.artwork // Assuming artwork identifier
    };
  
    // Sending the email through EmailJS
    emailjs.send("gmail", "Artwork Interaction Notification", formData)
      .then(function(response) {
        console.log("SUCCESS", response);
      }, function(error) {
        console.log("FAILED", error);
      });
  }
  // Example for a "Like" button
const likeButton = document.querySelector('.like-button');
likeButton.addEventListener('click', sendNotification);

// Do the same for comment or share buttons as well

