
// Import necessary dependencies
import React, { useState, useEffect } from "react";

// Define a separate component for displaying user questions and API responses
const QuesAnswer = ({ ques, answer }) => {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < answer.length) {
      setTimeout(() => {
        setText(text + answer[index]);
        setIndex(index + 1);
      }, 20);
    }
  }, [index]);

  return (
    <>
      <div className="media media-chat media-chat-reverse">
        <div className="media-body">
          <p>{ques}</p>
        </div>
      </div>

      <div className="media media-chat">
        <img
          className="avatar"
          src="https://img.icons8.com/color/36/000000/administrator-male.png"
          alt="..."
        />
        <div className="media-body">
          <p>{text}</p>
        </div>
      </div>
    </>
  );
};

export default QuesAnswer;


