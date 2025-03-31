<<<<<<< HEAD
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
=======
document.addEventListener("DOMContentLoaded", function () {
    // Toggle mobile menu
    const menuToggle = document.getElementById("menu-toggle");
    const navMenu = document.getElementById("nav-menu");

    if (menuToggle && navMenu) {
        menuToggle.addEventListener("click", function () {
            navMenu.classList.toggle("active");
        });
    }

    // File Upload Handling
    const uploadForm = document.getElementById("upload-form");
    const fileInput = document.getElementById("file-input");
    const uploadStatus = document.getElementById("upload-status");

    if (uploadForm) {
        uploadForm.addEventListener("submit", function (event) {
            event.preventDefault();
            
            const file = fileInput.files[0];
            if (!file) {
                uploadStatus.innerText = "Please select a file to upload.";
                return;
            }

            const formData = new FormData();
            formData.append("file", file);

            fetch("upload.php", {
                method: "POST",
                body: formData
            })
            .then(response => response.text())
            .then(data => {
                uploadStatus.innerText = data;
            })
            .catch(error => {
                uploadStatus.innerText = "Error uploading file.";
            });
        });
    }
>>>>>>> ac19432 (Reinitialized repository and added files)
});
