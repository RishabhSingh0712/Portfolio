<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $Name = $_POST['Your_Name'];
    $Email = $_POST['Your_Email'];
    $Subject = $_POST['Message'];
   

    // Database connection
    $conn = new mysqli('localhost','root','','database2');
    if($conn->connect_error){
        echo "$conn->connect_error";
        die("Connection Failed : ". $conn->connect_error);
    } else {
        $stmt = $conn->prepare("INSERT INTO `user` (`Your_Name`, `Your_Email`, `Message`) VALUES (?, ?, ?)");

        // Bind parameters
        $stmt->bind_param("sss", $Your_Name, $Your_Email, $Message);

        // Execute statement
        $execval = $stmt->execute();
        if($execval === FALSE) {
            echo "Error: " . $stmt->error;
        } else {
            // Data added successfully
            echo "<div style='background-color: #dff0d8; color: #3c763d; border: 1px solid #d6e9c6; border-radius: 4px; padding: 15px; margin-bottom: 20px;'>Data added successfully...</div>";
            
            // Close the statement and connection
            $stmt->close();
            $conn->close();
            
            // Redirect to about.php after 2 seconds
            echo "<script>setTimeout(function(){ window.location.href = 'contact.html'; }, 1000);</script>";
        }
    }
}
?>
