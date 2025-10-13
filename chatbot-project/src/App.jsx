import { useState, useEffect } from "react";
import "./App.css";
import { ChatInput } from "./components/ChatInput";
import { ChatMessages } from "./components/ChatMessages";
import { Chatbot } from "supersimpledev";

function App() {
  // const [chatMessages, setChatMessages] = React.useState([
  //   {
  //     message: "hello chatbot",
  //     sender: "user",
  //     id: "id1",
  //   },
  //   {
  //     message: "Hello! How can I help you?",
  //     sender: "robot",
  //     id: "id2",
  //   },
  //   {
  //     message: "can you get me todays date?",
  //     sender: "user",
  //     id: "id3",
  //   },
  //   {
  //     message: "Today is September 27",
  //     sender: "robot",
  //     id: "id4",
  //   },
  // ]);

  // const [chatMessages, setChatMessages] = array;
  // const chatMessages = array[0];
  // const setChatMessages = array[1];

  useEffect(() => {
    Chatbot.addResponses({
      hi :"Hey Hi it's great to talk with you.. ",
      goodbye: "Goodbye. Have a great day!",
      "give me a unique id": function () {
        return `Sure! Here's a unique ID: ${crypto.randomUUID()}`;
      },
    });
  }, []);

  const [chatMessages, setChatMessages] = useState([]);
  useEffect(() => {
    localStorage.setItem('messages', JSON.stringify(chatMessages));
  }, [chatMessages]);

  return (
    <div className="app-container">
      {chatMessages.length === 0 && (
        <p className="welcome-message">
          Welcome to the chatbot project! Send a message using the textbox
          below.
        </p>
      )}

      <ChatMessages chatMessages={chatMessages} />
      <ChatInput
        chatMessages={chatMessages}
        setChatMessages={setChatMessages}
      />
    </div>
  );
}

export default App;
