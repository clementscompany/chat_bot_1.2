<?php
////cors permitions 
header("Access-Control-Allow-Origin:*");
header("Access-Control-Allow-Methods: POST, PUT, GET");
header("Access-Control-Allow-Headers:Content-Type");

require "./backend/php/class/chatbot.php";

$chatBot = new ChatBot;
$response = [];
$question = filter_input(INPUT_POST, "pergunta", FILTER_DEFAULT);
$response['chatBot'] = $chatBot->getResponse($question);
echo json_encode($response);

?>