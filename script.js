document.getElementById('sendBtn').addEventListener('click', function() {
  const userInput = document.getElementById('userInput').value.trim();

  if (userInput) {
      displayMessage('user', userInput);  // Display the user's message in the chatbox
      document.getElementById('userInput').value = '';  // Clear input field
      
      // Send message to chatbot engine
      sendMessageToChatbot(userInput);
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

  // Scroll to the latest message
  chatbox.scrollTop = chatbox.scrollHeight;
}

// Function to send the user's message to the chatbot engine
async function sendMessageToChatbot(userMessage) {
  try {
      const response = await fetch('http://localhost:5000/api/messages', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({ message: userMessage }),
      });

      if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      displayMessage('bot', data.reply || 'No response from the bot');  // Display bot's response
  } catch (error) {
      console.error('Error connecting to the chatbot engine:', error);
      displayMessage('bot', 'Sorry, something went wrong. Please try again later.');
  }
}
