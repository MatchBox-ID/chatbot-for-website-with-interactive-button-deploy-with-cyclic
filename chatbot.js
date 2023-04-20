// Define chatbot responses
const responses = {
  "hai": "Hai juga!",
  "halo": "Halo! Ada yang bisa dibantu?",
  "apa kabar?": "Alhamdulillah baik. Bagaimana dengan Anda?",
  "baik": "Bagus! Ada yang bisa dibantu?",
  "tidak": "Baiklah. Apakah ada yang bisa dibantu?",
  "terima kasih": "Sama-sama!",
  "sudah cukup": "Baiklah. Jangan ragu untuk menghubungi kami lagi jika ada yang bisa dibantu!"
};

// Get DOM elements
const chatbox = document.querySelector('.chatbox');
const messages = document.querySelector('.messages');
const messageInput = document.querySelector('#message-input');
const sendButton = document.querySelector('#send-button');
const closeButton = document.querySelector('.close-button');

// Add event listeners
sendButton.addEventListener('click', sendMessage);
messageInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    sendMessage();
  }
});
closeButton.addEventListener('click', closeChatbox);

// Function to send a message
function sendMessage() {
  const messageText = messageInput.value;
  if (messageText.trim() !== '') {
    const message = createMessage(messageText, 'user');
    messages.appendChild(message);
    messageInput.value = '';
    scrollToBottom();
    sendBotMessage(messageText);
  }
}

// Function to create a message element
function createMessage(text, sender) {
  const message = document.createElement('p');
  message.textContent = text;
  message.classList.add('message', sender);
  return message;
}

// Function to send a message from the chatbot
function sendBotMessage(messageText) {
  setTimeout(() => {
    const responseText = getResponse(messageText);
    const message = createMessage(responseText, 'chatbot');
    messages.appendChild(message);
    scrollToBottom();
  }, 500);
}

// Function to get a response from the chatbot
function getResponse(messageText) {
  const message = messageText.toLowerCase();
  for (const [key, value] of Object.entries(responses)) {
    if (message.includes(key)) {
      return value;
    }
  }
  return "Maaf, saya tidak mengerti pertanyaan Anda.";
}

// Function to scroll to the bottom of the messages
function scrollToBottom() {
  messages.scrollTop = messages.scrollHeight;
}

// Function to open the chatbox
function openChatbox() {
  chatbox.classList.add('open');
  messageInput.focus();
  scrollToBottom();
}

// Function to close the chatbox
function closeChatbox() {
  chatbox.classList.remove('open');
}

// Open the chatbox by default
openChatbox();
