<?php

include "connection.php";

if ($_SERVER["REQUEST_METHOD"] == "POST")
if(isset($_POST["Submit"])) {


    $Your_Name = $_POST['Your_Name'];
    $Your_Email = $_POST['Your_Email'];
    $Message= $_POST['Message'];


    $query = "INSERT INTO `get_in_touch` (`Your_Name`, `Your_Email`, `Message`) VALUES ('$Your_Name', '$Your_Email', '$Message')";
     $sol = mysqli_query($con, $query);
     
     if ($sol > 0) {
      include "form.php";
    }
    }
    else
    {
      $data=array("status"=>"failed");
      echo json_encode($data);
    }
    mysqli_close($con)
    ?>