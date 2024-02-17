<?php
// Sample data (you can replace it with your own data or fetch from a database)
$data = array(
    array(
        'id' => 1,
        'userId' => 1,
        'title' => 'Sample Title 1',
        'body' => 'Sample Body 1'
    ),
    array(
        'id' => 2,
        'userId' => 2,
        'title' => 'Sample Title 2',
        'body' => 'Sample Body 2'
    )
);

// Set the content type to JSON
header('Content-Type: application/json');

// Encode the data array to JSON and output it
echo json_encode($data);
?>
