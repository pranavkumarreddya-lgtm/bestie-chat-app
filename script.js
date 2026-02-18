function sendMessage() {
  var input = document.getElementById("message-input");
  var message = input.value;

  if (message !== "") {
    var chatBox = document.getElementById("chat-box");
    var newMessage = document.createElement("p");
    newMessage.textContent = message;
    chatBox.appendChild(newMessage);
    input.value = "";
  }
}
