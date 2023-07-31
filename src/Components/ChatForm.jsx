import React, { useState } from "react";
import { AiOutlineSend } from 'react-icons/ai';
import axios from "axios";
import { Bars } from 'react-loader-spinner';

const ChatForm = ({ handleAddToStoredValues }) => {
  const [newQuestion, setNewQuestion] = useState('');
  const [loader, setLoader] = useState(false);

  const instance = axios.create({
    baseURL: "https://api.openai.com/v1/",
    headers: {
      "Content-Type": "application/json",
      Authorization: `...`,
    },
  });

  const askGPT = async (prompt) => {
    const response = await instance.post("/chat/completions", {
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: prompt }],
    });
    return response.data.choices[0].message.content;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoader(true);
    const response = await askGPT(newQuestion);
    handleAddToStoredValues(newQuestion, response);
    setLoader(false);
    setNewQuestion("");
  };

  const enterHandle = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };
  
  return (
    <form className="flex publisher bt-1 border-light p-8 pl-6 ml-8  "  >
      <img
        className="avatar avatar-xs p-2"
        src="https://img.icons8.com/color/36/000000/administrator-male.png"
        alt="..."
      />

      <input style={{width: "100%", backgroundColor: "#f2f2f2"}}
        className="publisher-input ml-8 w-80 p-4"
        type="text"
        placeholder="Hey! Ask Me Anything ..."
        value={newQuestion}
        onChange={(e) => setNewQuestion(e.target.value)}
        onKeyDown={enterHandle} // Added keyDown event handler
      />

      {loader === true ? (
        <Bars
          height="36"
          width="36"
          color="#4fa94d"
          ariaLabel="bars-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      ) : (
        <button  
          type="submit"
          className="btn btn-secondary bg-gray-400 rounded-md w-32 ml-6 flex items-center justify-center"
          onClick={handleSubmit}
        >
          <AiOutlineSend className="mr-2" />
          Submit
        </button>
      )}
    </form>
  );
};

export default ChatForm;
