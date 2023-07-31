import React, { useState } from "react";
import ChatForm from "./ChatForm";
import QuesAnswer from "./QuesAnswer";

const ChatWindow = () => {
  // State to store the user questions and API responses
  const [storedValues, setStoredValues] = useState([]);

  // Function to handle adding a new question and answer to the stored values
  const handleAddToStoredValues = (question, answer) => {
    setStoredValues([
      {
        question: question,
        answer: answer,
      },
      ...storedValues,
    ]);
  };

  return (
    <div className="page-content page-container bg-color-lite" id="page-content">
      <div className="padding polaroid">
        <div className="row container d-flex justify-content-center">
          <div className="offset-md-3 col-md-6">
            <div className="card card-bordered">
              <div className="ps-container ps-theme-default ps-active-y overflow" id="chat-content">
                {/* Render the user questions and API responses using the QuesAnswer component */}
                {storedValues.map((value, i) => {
                  return <QuesAnswer ques={value.question} answer={value.answer} key={i} />;
                })}
                {/* Scrollbars */}
                <div className="ps-scrollbar-x-rail" style={{ left: "0px", bottom: "0px" }}>
                  <div className="ps-scrollbar-x" tabIndex="0" style={{ left: "0px", width: "0px" }}></div>
                </div>
                <div className="ps-scrollbar-y-rail" style={{ top: "0px", height: "0px", right: "2px" }}>
                  <div className="ps-scrollbar-y" tabIndex="0" style={{ top: "0px", height: "2px" }}></div>
                </div>
              </div>
              {/* ChatForm component to allow users to input new questions */}
              <div className="pt-6 w-600">
                <ChatForm handleAddToStoredValues={handleAddToStoredValues} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatWindow;
