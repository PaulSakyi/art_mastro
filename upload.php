<?php
if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_FILES["image"])) {
    $targetDir = "uploads/";
    $targetFile = $targetDir . basename($_FILES["image"]["name"]);
    $imageFileType = strtolower(pathinfo($targetFile, PATHINFO_EXTENSION));

    // Check if file is an image
    $check = getimagesize($_FILES["image"]["tmp_name"]);
    if ($check === false) {
        die("Error: File is not an image.");
    }

    // Allow only JPG, PNG, JPEG, GIF formats
    $allowedTypes = ["jpg", "jpeg", "png", "gif"];
    if (!in_array($imageFileType, $allowedTypes)) {
        die("Error: Only JPG, JPEG, PNG, and GIF files are allowed.");
    }

    // Move the file to the uploads directory
    if (move_uploaded_file($_FILES["image"]["tmp_name"], $targetFile)) {
        echo "Image uploaded successfully!";
        header("Location: index.html"); // Redirect back to the gallery page
    } else {
        echo "Error uploading file.";
    }
} else {
    echo "No file uploaded.";
}
?>
