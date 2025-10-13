 import { useRef, useEffect } from 'react'
 import { ChatMessage } from '../components/ChatMessage';
 import './ChatMessages.css';
  export function ChatMessages({chatMessages }) {
           const chatMessageRef = useRef(null);


          useEffect(() => {
          const containerElem = chatMessageRef.current;
          if(containerElem) {
          containerElem.scrollTop= containerElem.scrollHeight;
          }
          }, [chatMessages]);

        return (
          <div className="chat-messages-container"
            ref={chatMessageRef}
            >
            {chatMessages.map((chatMessage) => {
              return (
                <ChatMessage
                  message={chatMessage.message}
                  sender={chatMessage.sender}
                  time ={chatMessage.time}
                  key={chatMessage.id}
                />
              );
            })}
          </div>
        );
      }

