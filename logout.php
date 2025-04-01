<?php
session_start();
session_destroy(); // Log out and destroy session
header("Location: login.php"); // Redirect to login page after logout
exit;
?>
