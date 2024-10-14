// Event listener for the send button
document.getElementById('sendBtn').addEventListener('click', function() {
    const userInput = document.getElementById('userInput').value.trim();
  
    // Check if user input is not empty
    if (userInput) {
      displayMessage('user', userInput);  // Display the user's message
      document.getElementById('userInput').value = '';  // Clear input field
      
      // Simulate sending message to the chatbot engine
      setTimeout(function() {
        getBotReply(userInput);  // Simulate bot reply based on user input
      }, 1000);
    }
  });
  
  // Function to display messages in the chatbox
  function displayMessage(sender, message) {
    const chatbox = document.getElementById('chatbox');
    
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message');
    
    if (sender === 'user') {
      messageDiv.classList.add('user-message');
    } else {
      messageDiv.classList.add('bot-message');
    }
  
    messageDiv.textContent = message;
    chatbox.appendChild(messageDiv);
  
    // Automatically scroll to the latest message
    chatbox.scrollTop = chatbox.scrollHeight;
  }
  
  // Simulated bot reply based on user input
  function getBotReply(userMessage) {
    let botReply = "I'm not sure how to respond to that.";
  
    // Simple bot logic (you can replace this with an actual API call to your chatbot engine)
    if (userMessage.toLowerCase().includes('hello')) {
      botReply = 'Hello! How can I help you today?';
    } else if (userMessage.toLowerCase().includes('bye')) {
      botReply = 'Goodbye! Have a great day!';
    }
  
    displayMessage('bot', botReply);
  }
  