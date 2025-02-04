import { useState } from "react";
import "./App.css";
import "./style/phone.css";

const users = ["User 1", "User 2", "User 3", "User 4", "User 5"];

// Couleurs assignées à chaque utilisateur
const userColors = {
  "User 1": "#4CAF50", // Vert
  "User 2": "#2196F3", // Bleu
  "User 3": "#FF9800", // Orange
  "User 4": "#9C27B0", // Violet
  "User 5": "#FFC107", // Jaune
};

const ChatApp = () => {
  const [selectedUser1, setSelectedUser1] = useState(users[0]);
  const [selectedUser2, setSelectedUser2] = useState(users[1]);
  const [messages, setMessages] = useState({
    [users[0]]: [],
    [users[1]]: [],
    [users[2]]: [],
    [users[3]]: [],
    [users[4]]: [],
  });

  const [messageInput1, setMessageInput1] = useState(""); // Pour le téléphone 1
  const [messageInput2, setMessageInput2] = useState(""); // Pour le téléphone 2

  const [selectedRecipient1, setSelectedRecipient1] = useState(users[1]); // Destinataire pour téléphone 1
  const [selectedRecipient2, setSelectedRecipient2] = useState(users[0]); // Destinataire pour téléphone 2

  const handleSendMessage = (sender, recipient, messageInput) => {
    if (messageInput.trim()) {
      setMessages((prevMessages) => ({
        ...prevMessages,
        [sender]: [...prevMessages[sender], { text: messageInput, sender }],
        [recipient]: [
          ...prevMessages[recipient],
          { text: messageInput, sender },
        ],
      }));
    }
  };

  return (
    <div className="chat-app">
      <div className="phone">
        <div className="phone-header">
          <select
            value={selectedUser1}
            onChange={(e) => setSelectedUser1(e.target.value)}
            className="user-selector"
          >
            {users.map((user) => (
              <option key={user} value={user}>
                {user}
              </option>
            ))}
          </select>
          <p className="Or">à</p>
          <select
            value={selectedRecipient1}
            onChange={(e) => setSelectedRecipient1(e.target.value)}
            className="user-selector"
          >
            {users.map((user) => (
              <option key={user} value={user}>
                {user}
              </option>
            ))}
          </select>
        </div>
        <div className="message-info">
          {selectedUser1} à {selectedRecipient1}
        </div>
        <div className="chat-box">
          {messages[selectedUser1].map((msg, index) => (
            <div
              key={index}
              className={`message ${
                msg.sender === selectedUser1 ? "sent" : "received"
              }`}
              style={{ backgroundColor: userColors[msg.sender] }} // Applique la couleur de l'utilisateur
            >
              {msg.text}
            </div>
          ))}
        </div>
        <div className="input-container">
          <input
            type="text"
            value={messageInput1}
            onChange={(e) => setMessageInput1(e.target.value)}
            className="message-input"
            placeholder="Tapez votre message ici..."
          />
          <button
            onClick={() =>
              handleSendMessage(
                selectedUser1,
                selectedRecipient1,
                messageInput1
              )
            }
            className="send-button"
          >
            <div className="svg-wrapper">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width={24}
                height={24}
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path
                  fill="currentColor"
                  d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                />
              </svg>
            </div>
          </button>
        </div>
      </div>

      <div className="phone">
        <div className="phone-header">
          <select
            value={selectedUser2}
            onChange={(e) => setSelectedUser2(e.target.value)}
            className="user-selector"
          >
            {users.map((user) => (
              <option key={user} value={user}>
                {user}
              </option>
            ))}
          </select>
          <p className="Or">à</p>
          <select
            value={selectedRecipient2}
            onChange={(e) => setSelectedRecipient2(e.target.value)}
            className="user-selector"
          >
            {users.map((user) => (
              <option key={user} value={user}>
                {user}
              </option>
            ))}
          </select>
        </div>
        <div className="message-info">
          {selectedUser2} à {selectedRecipient2}
        </div>
        <div className="chat-box">
          {messages[selectedUser2].map((msg, index) => (
            <div
              key={index}
              className={`message ${
                msg.sender === selectedUser2 ? "sent" : "received"
              }`}
              style={{ backgroundColor: userColors[msg.sender] }} // Applique la couleur de l'utilisateur
            >
              {msg.text}
            </div>
          ))}
        </div>
        <div className="input-container">
          <input
            type="text"
            value={messageInput2}
            onChange={(e) => setMessageInput2(e.target.value)}
            className="message-input"
            placeholder="Tapez votre message ici..."
          />
          <button
            onClick={() =>
              handleSendMessage(
                selectedUser2,
                selectedRecipient2,
                messageInput2
              )
            }
            className="send-button"
          >
            <div className="svg-wrapper-1">
              <div className="svg-wrapper">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width={24}
                  height={24}
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path
                    fill="currentColor"
                    d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                  />
                </svg>
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatApp;
