<?php
session_start();

// Check if the user is logged in (you can replace 'admin' with your session variable name)
if (!isset($_SESSION['logged_in']) || $_SESSION['logged_in'] !== true) {
    // If not logged in, redirect to login page
    header("Location: login.php");
    exit;
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (isset($_FILES["file"])) {
        $target_dir = "uploads/";
        $file = $_FILES["file"];
        $target_file = $target_dir . basename($file["name"]);
        $file_type = strtolower(pathinfo($target_file, PATHINFO_EXTENSION));
        
        // Allow only images and videos
        $allowed_types = ["jpg", "jpeg", "png", "gif", "mp4", "mov", "avi"];
        
        if (in_array($file_type, $allowed_types)) {
            if (move_uploaded_file($file["tmp_name"], $target_file)) {
                echo json_encode(["status" => "success", "message" => "Upload successful!"]);
            } else {
                echo json_encode(["status" => "error", "message" => "Failed to upload file."]);
            }
        } else {
            echo json_encode(["status" => "error", "message" => "Invalid file type."]);
        }
    } else {
        echo json_encode(["status" => "error", "message" => "No file uploaded."]);
    }
} else {
    echo json_encode(["status" => "error", "message" => "Invalid request."]);
}
?>
