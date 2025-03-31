<?php
$files = scandir("uploads/");
foreach ($files as $file) {
    if ($file !== "." && $file !== "..") {
        echo "<img src='uploads/$file' width='200px' style='margin: 10px;'>";
    }
}
?>
