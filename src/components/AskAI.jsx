import React, { useState, useEffect } from "react";
import "./AskAI.css";

const AskAI = () => {
  const [question, setQuestion] = useState("");
  const [questions, setQuestions] = useState([]);
  const [reply, setReply] = useState({});

  // Load from localStorage on page load
  useEffect(() => {
    const savedQuestions = JSON.parse(localStorage.getItem("communityPosts")) || [];
    setQuestions(savedQuestions);
  }, []);

  // Save to localStorage whenever questions change
  useEffect(() => {
    localStorage.setItem("communityPosts", JSON.stringify(questions));
  }, [questions]);

  const handlePostQuestion = () => {
    if (question.trim()) {
      const newQuestion = {
        _id: Date.now().toString(), // Unique ID based on timestamp
        text: question,
        replies: [],
      };
      setQuestions([newQuestion, ...questions]);
      setQuestion("");
    }
  };

  const handlePostReply = (id) => {
    if (reply[id]?.trim()) {
      const updatedQuestions = questions.map((q) => {
        if (q._id === id) {
          return {
            ...q,
            replies: [...q.replies, { text: reply[id] }],
          };
        }
        return q;
      });
      setQuestions(updatedQuestions);
      setReply({ ...reply, [id]: "" });
    }
  };

  return (
    <div className="askai-page">
      <h2>Ask Your AI Trainer - Community Hub</h2>
      <p>Post fitness queries, share your journey, and help others!</p>

      <div className="askai-content">
        <textarea
          placeholder="Ask a question..."
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          className="askai-textarea"
        ></textarea>
        <button className="askai-submit" onClick={handlePostQuestion}>
          Post Question
        </button>
      </div>

      <div className="askai-discussions">
        <h3>Community Questions</h3>
        <ul>
          {questions.map((q) => (
            <li key={q._id}>
              🗨️ {q.text}
              <div className="reply-section">
                {q.replies.map((r, index) => (
                  <p key={index} className="reply">💬 {r.text}</p>
                ))}
                <textarea
                  placeholder="Reply..."
                  value={reply[q._id] || ""}
                  onChange={(e) =>
                    setReply({ ...reply, [q._id]: e.target.value })
                  }
                  className="reply-textarea"
                ></textarea>
                <button
                  className="reply-submit"
                  onClick={() => handlePostReply(q._id)}
                >
                  Reply
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AskAI;
