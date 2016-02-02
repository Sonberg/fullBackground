<?php

$count = ((int)$_POST["count"]);
$data = array("count" => $count, "date" => $_POST["date"]);
file_put_contents('json/count.json', json_encode($data));

?>