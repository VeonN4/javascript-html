const chatBox = document.getElementById("chat-box");
const messageInput = document.getElementById("message-input");
const sendBtn = document.getElementById("send-button");

let socket;

function initWebSocket() {
  socket = new WebSocket("ws://localhost:8080");

  socket.addEventListener("open", (event) => {
    socket.send("Hello")
    console.log("WebSocket connection opened:", event)
  });

  socket.addEventListener("message", (event) => {
    console.log("WebSocket recieved a new message!")

    const message = JSON.parse(event.data)
    displayMessage(message)
  });

  socket.addEventListener("close", (event) => {
    console.log("WebScoket connection closed:", event)
  });
};

function displayMessage(message) {
  if (typeof(message) !== "string") {
    console.error("Message is not a string!");
    return
  };

  const messageElement = document.createElement("div");
  messageElement.textContent = message;
  chatBox.appendChild(messageElement);
  chatBox.scrollTop = chatBox.scrollHeight;
};

function sendMessage() {
  const message = messageInput.value;
  if (message.trim() !== "") {
    socket.send(JSON.stringify({ text: message }));
    displayMessage(message)
    messageInput.value = "";
  }
}

sendBtn.addEventListener("click", sendMessage);

document.addEventListener("DOMContentLoaded", () => {
  initWebSocket();
})