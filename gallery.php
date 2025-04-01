<?php
$files = scandir("uploads/");
foreach ($files as $file) {
    if ($file !== "." && $file !== "..") {
        echo "<img src='uploads/$file' alt='$file' class='gallery-item'>";
    }
}
?>
