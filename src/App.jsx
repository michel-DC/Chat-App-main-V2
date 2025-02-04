import { useState } from "react";
import "./App.css";
import "./style/InsidePhone.css";

const users = ["User 1", "User 2", "User 3", "User 4", "User 5"];
const userColors = {
  "User 1": "#4CAF50",
  "User 2": "#2196F3",
  "User 3": "#FF9800",
  "User 4": "#9C27B0",
  "User 5": "#FFC107",
};

const ChatApp = () => {
  const [selectedUser1, setSelectedUser1] = useState(users[0]);
  const [selectedUser2, setSelectedUser2] = useState(users[1]);
  const [messages, setMessages] = useState(
    users.reduce((acc, user) => {
      acc[user] = [];
      return acc;
    }, {})
  );
  const [messageInput1, setMessageInput1] = useState("");
  const [messageInput2, setMessageInput2] = useState("");
  const [selectedRecipient1, setSelectedRecipient1] = useState(users[1]);
  const [selectedRecipient2, setSelectedRecipient2] = useState(users[0]);

  const handleSendMessage = (
    sender,
    recipient,
    messageInput,
    setMessageInput
  ) => {
    if (messageInput.trim()) {
      setMessages((prevMessages) => ({
        ...prevMessages,
        [sender]: [...prevMessages[sender], { text: messageInput, sender }],
        [recipient]: [
          ...prevMessages[recipient],
          { text: messageInput, sender },
        ],
      }));
      setMessageInput("");
    }
  };

  const renderPhone = (
    selectedUser,
    setSelectedUser,
    selectedRecipient,
    setSelectedRecipient,
    messageInput,
    setMessageInput
  ) => (
    <div className="phone">
      <div className="phone-header">
        <select
          value={selectedUser}
          onChange={(e) => setSelectedUser(e.target.value)}
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
          value={selectedRecipient}
          onChange={(e) => setSelectedRecipient(e.target.value)}
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
        {selectedUser} à {selectedRecipient}
      </div>
      <div className="chat-box">
        {messages[selectedUser].map((msg, index) => (
          <div
            key={index}
            className={`message ${
              msg.sender === selectedUser ? "sent" : "received"
            }`}
            style={{ backgroundColor: userColors[msg.sender] }}
          >
            {msg.text}
          </div>
        ))}
      </div>
      <div className="input-container">
        <input
          type="text"
          value={messageInput}
          onChange={(e) => setMessageInput(e.target.value)}
          className="message-input"
          placeholder="Tapez votre message ici..."
        />
        <button
          onClick={() =>
            handleSendMessage(
              selectedUser,
              selectedRecipient,
              messageInput,
              setMessageInput
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
  );

  return (
    <div className="chat-app">
      {renderPhone(
        selectedUser1,
        setSelectedUser1,
        selectedRecipient1,
        setSelectedRecipient1,
        messageInput1,
        setMessageInput1
      )}
      {renderPhone(
        selectedUser2,
        setSelectedUser2,
        selectedRecipient2,
        setSelectedRecipient2,
        messageInput2,
        setMessageInput2
      )}
    </div>
  );
};

export default ChatApp;
