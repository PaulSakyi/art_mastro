<?php
session_start();

// Check if the user is logged in
if (!isset($_SESSION['logged_in']) || $_SESSION['logged_in'] !== true) {
    header("Location: login.php"); // Redirect to login page if not logged in
    exit;
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (isset($_FILES["file"])) {
        $target_dir = "uploads/";  // Make sure the 'uploads' folder exists
        $file = $_FILES["file"];
        $target_file = $target_dir . basename($file["name"]);
        $file_type = strtolower(pathinfo($target_file, PATHINFO_EXTENSION));
        
        // Allow only certain file types
        $allowed_types = ["jpg", "jpeg", "png", "gif"];
        
        if (in_array($file_type, $allowed_types)) {
            // Move the uploaded file to the uploads directory
            if (move_uploaded_file($file["tmp_name"], $target_file)) {
                echo "Upload successful!";
            } else {
                echo "Failed to upload file.";
            }
        } else {
            echo "Invalid file type. Only JPG, JPEG, PNG, and GIF are allowed.";
        }
    } else {
        echo "No file uploaded.";
    }
} else {
    echo "Invalid request.";
}
?>
