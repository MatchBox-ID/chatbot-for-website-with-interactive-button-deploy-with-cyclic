<!DOCTYPE html>
<html>
<head>
	<title>Chatbox Melayang dengan Chatbot</title>
	<link rel="stylesheet" type="text/css" href="style.css">
</head>
<body>
	<div class="chatbox">
		<div class="header">
			<h2>Chatbox Melayang</h2>
			<button class="close-button">&times;</button>
		</div>
		<div class="messages">
			<!-- Chatbot messages will be displayed here -->
		</div>
		<div class="input-box">
			<input type="text" id="message-input" placeholder="Ketik pesan...">
			<button id="send-button">Kirim</button>
		</div>
	</div>

	<!-- Chatbot script -->
	<script src="chatbot.js"></script>
</body>
</html>
