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
<h2>Login</h2>

<?php
if (isset($error)) {
    echo "<p style='color: red;'>$error</p>";
}
?>

<div class="login-form">
    <form method="POST" action="login.php">
        <label for="username">Username: </label>
        <input type="text" name="username" id="username" required><br>
        <label for="password">Password: </label>
        <input type="password" name="password" id="password" required><br>
        <button type="submit">Login</button>
    </form>
</div>

</body>
</html> 