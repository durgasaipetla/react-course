import { useState } from 'react'
import LoadingPicture from '../assets/loading-spinner.gif'
import {Chatbot} from 'supersimpledev'
import './ChatInput.css';
import dayjs from 'dayjs';

export function ChatInput({ chatMessages, setChatMessages }) {
        const [inputText, setInputText] = useState("");
        const [isLoading, setIsLoading] = useState(false);

        function saveInputText(event) {
          setInputText(event.target.value);
        }

       // function sendMessage() {
        async function sendMessage() {
          if (isLoading || inputText === "") {
            return;
          }
          setIsLoading(true);
          // we can put this at the top of the function or
          // after the first setChatMessages(). Both work
          setInputText("");
          const newChatMessages = [
            ...chatMessages,
            {
              message: inputText,
              sender: "user",
              id: crypto.randomUUID(),
              time: dayjs().valueOf()


            },
          ];

          setChatMessages([
            ...newChatMessages,
            {
              message: <img src={LoadingPicture} className="loading-spinner" /> ,
              sender: "robot",
              id: crypto.randomUUID(),
              time: dayjs().valueOf()
            },
          ]);

          //const response = Chatbot.getResponse(inputText);
          const response = await Chatbot.getResponseAsync(inputText);

          setChatMessages([
            ...newChatMessages.filter((msg) => msg.id !== "loading"),
            {
              message: response,
              sender: "robot",
              id: crypto.randomUUID(),
              time: dayjs().valueOf()

            },
          ]);

          setIsLoading(false);
        }
        
        function handleKeyDown(event) {
          if (event.key === "Enter") {
            sendMessage();
          } else if (event.key === "Escape") {
            setInputText("");
          }
        }

        return (
          <div className="chat-input-container">
            <input
              placeholder="Send a message to Chatbot"
              size="30"
              onChange={saveInputText}
              onKeyDown={handleKeyDown}
              value={inputText}
              className="chat-input"
            />
            <button onClick={sendMessage} className="send-button">
              Send
            </button>
          </div>
        );
      }