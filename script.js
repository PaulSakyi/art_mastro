document.addEventListener("DOMContentLoaded", function () {
    // Toggle Dark Mode
    const darkModeToggle = document.getElementById("dark-mode-toggle");
    if (darkModeToggle) {
        darkModeToggle.addEventListener("click", function () {
            document.body.classList.toggle("dark-mode");
        });
    }

    // Redirect to Netlify site when running locally
    if (window.location.hostname === "127.0.0.1" || window.location.hostname === "localhost") {
        window.location.href = "https://artmastro.netlify.app/";
    }

    // Section Scroll Animation
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

    // Initialize EmailJS
    emailjs.init("O3F-NJP9akN7CkHWP");

    // LIKE FUNCTIONALITY
    document.querySelectorAll(".like-button").forEach(button => {
        button.addEventListener("click", function () {
            let artworkName = this.getAttribute("data-artwork");
            let figure = this.closest("figure");

            let likeCountSpan = figure.querySelector(".like-count");
            if (!likeCountSpan) {
                likeCountSpan = document.createElement("span");
                likeCountSpan.classList.add("like-count");
                likeCountSpan.textContent = " 0 Likes";
                figure.appendChild(likeCountSpan);
            }

            let currentLikes = parseInt(likeCountSpan.textContent) || 0;
            likeCountSpan.textContent = ` ${currentLikes + 1} Likes`;

            sendNotification("like", artworkName);
        });
    });

    // COMMENT FUNCTIONALITY
    document.querySelectorAll(".comment-button").forEach(button => {
        button.addEventListener("click", function () {
            let artworkName = this.getAttribute("data-artwork");
            let figure = this.closest("figure");

            let commentText = prompt("Enter your comment:");
            if (commentText) {
                let commentSection = figure.querySelector(".comments");
                if (!commentSection) {
                    commentSection = document.createElement("div");
                    commentSection.classList.add("comments");
                    figure.appendChild(commentSection);
                }

                let newComment = document.createElement("p");
                newComment.classList.add("comment");
                newComment.innerHTML = `<strong>Guest:</strong> ${commentText}`;
                commentSection.appendChild(newComment);

                sendNotification("comment", artworkName, commentText);
            }
        });
    });

    // SHARE FUNCTIONALITY
    document.querySelectorAll(".share-button").forEach(button => {
        button.addEventListener("click", function () {
            let artworkName = this.getAttribute("data-artwork");
            let figure = this.closest("figure");
            let imageElement = figure.querySelector("img");

            if (imageElement) {
                let imageUrl = imageElement.src;
                let shareText = `Check out this amazing artwork: ${imageUrl}`;
                navigator.clipboard.writeText(shareText).then(() => {
                    alert("Artwork link copied to clipboard! Share it with your friends.");
                    sendNotification("share", artworkName);
                }).catch(err => {
                    console.error("Error copying link: ", err);
                });
            } else {
                console.error("Image URL not found for sharing.");
            }
        });
    });

    // FUNCTION TO SEND EMAIL NOTIFICATION (EmailJS)
    function sendNotification(action, artworkName, comment = "") {
        let message = `Someone interacted with your artwork: ${artworkName}`;
        if (action === "comment") {
            message += `\nComment: "${comment}"`;
        }

        emailjs.send("service_hxgzttv", "template_nxi00p2", {
            message: message,
            to_email: "paulsak123@gmail.com"
        }).then(response => {
            console.log("Notification sent:", response);
        }).catch(error => {
            console.error("Error sending notification:", error);
        });
    }
});
