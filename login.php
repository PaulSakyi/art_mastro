<!-- login.php -->
<?php
session_start();

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = "Paul Sakyi";
    $password = "paulsak123Abd0558#"; // Change to a secure password!

    if ($_POST['username'] == $username && $_POST['password'] == $password) {
        $_SESSION['logged_in'] = true;
        header("Location: upload.php"); // Redirect to the upload page after successful login
        exit;
    } else {
        $error = "Invalid credentials!";
    }
}
?> 
 