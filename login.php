<?php
session_start();

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Assuming you are logging in with a username and password
    // Replace with your own authentication logic
    $username = "admin";
    $password = "yourpassword"; // Change to a secure password!

    if ($_POST['username'] == $username && $_POST['password'] == $password) {
        $_SESSION['logged_in'] = true;
        header("Location: upload.php"); // Redirect to the upload page after successful login
        exit;
    } else {
        $error = "Invalid credentials!";
    }
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
</head>
<body>

<h2>Login</h2>

<?php
if (isset($error)) {
    echo "<p style='color: red;'>$error</p>";
}
?>

<form method="POST" action="login.php">
    <label for="username">Username: </label>
    <input type="text" name="username" id="username" required><br>
    <label for="password">Password: </label>
    <input type="password" name="password" id="password" required><br>
    <button type="submit">Login</button>
</form>

</body>
</html>
