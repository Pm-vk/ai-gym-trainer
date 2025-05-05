import React, { useState } from "react";
import "./Chatbot.css"; // Ensure you have the matching CSS

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(false); // Start closed by default

  const API_KEY = "YOUR_OPENAI_API_KEY"; // Replace with your actual API key
  const API_URL = "https://api.openai.com/v1/chat/completions";

  const sendMessage = async () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { text: input, sender: "user" }];
    setMessages(newMessages);
    setInput("");

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${API_KEY}`,
        },
        body: JSON.stringify({
          model: "gpt-3.5-turbo",
          messages: [{ role: "user", content: input }],
        }),
      });

      const data = await response.json();
      const botReply = data.choices?.[0]?.message?.content || "I couldn't process that.";

      setMessages([...newMessages, { text: botReply, sender: "bot" }]);
    } catch (error) {
      console.error("Error fetching response:", error);
      setMessages([...newMessages, { text: "Error getting response.", sender: "bot" }]);
    }
  };

  return (
    <>
      {/* Floating Chat Icon */}
      <button className="chatbot-toggle" onClick={() => setIsOpen(!isOpen)}>
        💬
      </button>

      {/* Chatbot Window */}
      <div className={`chatbot ${isOpen ? "active" : ""}`}>
        <div className="messages">
          {messages.map((msg, index) => (
            <div key={index} className={msg.sender}>
              {msg.text}
            </div>
          ))}
        </div>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          placeholder="Ask me anything..."
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </>
  );
};

export default Chatbot;
