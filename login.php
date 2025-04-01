<?php
session_start();

if (isset($_SESSION['logged_in']) && $_SESSION['logged_in'] === true) {
    header("Location: upload.php"); // Redirect to upload page if already logged in
    exit;
}

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Hardcoded credentials (change these for security)
    $username = "Paul Sakyi"; // Your username
    $password = "paulsak123Abd0558#"; // Your password

    if ($_POST['username'] == $username && $_POST['password'] == $password) {
        $_SESSION['logged_in'] = true;
        header("Location: upload.php"); // Redirect to upload page upon successful login
        exit;
    } else {
        $error = "Invalid username or password!";
    }
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login - ArtMastro</title>
</head>
<body>
    <h2>Login to Upload Artwork</h2>
    <form action="login.php" method="POST">
        <input type="text" name="username" placeholder="Username" required>
        <input type="password" name="password" placeholder="Password" required>
        <button type="submit">Login</button>
    </form>

    <?php if (isset($error)) { echo "<p style='color: red;'>$error</p>"; } ?>
</body>
</html>