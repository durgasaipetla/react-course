 import dayjs from 'dayjs'
import RobotProfileImage from '../assets/robot.png'
import UserProfileImage from '../assets/sAI.png'
import './ChatMessage.css'
 
 export function ChatMessage({ message, sender,time }) {
        // const message = props.message;
        // const sender = props.sender;
        // const { message, sender } = props;

        /*
        if (sender === 'robot') {
          return (
            <div>
              <img src="robot.png" width="50" />
              {message}
            </div>
          );
        }
        */

        return (
          <div
            className={sender === "user" ? "chat-msg-user" : "chat-msg-robot"}
          >
            {sender === "robot" && (
               <img  className="chat-msg-profile" src={RobotProfileImage} /> 
               )}
            <div className="chat-msg-text">
              {message}
               { /* The "time && (" check is optional. I added it just to be safe. */}
                {time && ( 
                  <div className = 'chat-msg-time'>
                     {dayjs(time).format('h:mma')}
                </div>
                )}
                </div>
            {sender === "user" && ( 
              <img className="chat-msg-profile" src={UserProfileImage} />
            )}
          </div>
        );
      }