<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name    = htmlspecialchars($_POST['name']);
  $email   = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
  $message = htmlspecialchars($_POST['message']);

  $to      = "lawalfawazololade@gmail.com"; // 🔁 Replace with your Gmail
  $subject = "New Message from Portfolio";
  $headers = "From: $email\r\n";
  $headers .= "Reply-To: $email\r\n";
  $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

  $body = "Name: $name\nEmail: $email\n\nMessage:\n$message";

  if (mail($to, $subject, $body, $headers)) {
    echo "Message sent successfully.";
  } else {
    echo "Failed to send message.";
  }
} else {
  echo "Invalid request.";
}
?>
