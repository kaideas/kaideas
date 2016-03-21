<?php


($_SERVER["REQUEST_METHOD"] == "POST")

$result = CS50::query("INSERT IGNORE INTO messages (message) 
            VALUES(?)", $_POST["message"], 

                $rows = CS50::query("SELECT LAST_INSERT_ID() AS id");
                $id = $rows[0]["id"];
                $_SESSION["id"] = $id;
                redirect("/display.php");
            }

?>