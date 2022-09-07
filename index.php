<?php
$encryption_iv = '0744641209477128'; // random 16 digit number
$encryption_key = "Goncermor-Fancy-Login"; // here a password for the cookie data (something secure)

if (isset($_COOKIE['data'])) {
    $cookieJson = json_decode(openssl_decrypt($_COOKIE['data'], "AES-128-CTR", $encryption_key, 0, $encryption_iv));
if (ProcessInfo($cookieJson->username, $cookieJson->password) === true) {
  http_response_code(303);
  header("Location: https://goncermor.com/");
  die;
} else {
  http_response_code(403);
  unset($_COOKIE['data']); 
  setcookie('data', null, -1, '/'); 
}}
if ($_SERVER['REQUEST_METHOD'] === "POST") {
  $input = file_get_contents("php://input");
  $json = json_decode($input);
  if (ProcessInfo($json->username, $json->password) === true) {
    http_response_code(201);
    $encryption = openssl_encrypt($input, "AES-128-CTR", $encryption_key, 0, $encryption_iv);
    echo json_encode(array('status' => true, 'data' => $encryption));
  } else {
    http_response_code(403);
    echo json_encode(array('status' => false));
  }
  die;
}
function ProcessInfo($user, $password) {
 
  // place here the code to check if the user exists in your database
  // return true to save the login and continue
  // return false to send invalid password

}
echo file_get_contents("login.html");
?>