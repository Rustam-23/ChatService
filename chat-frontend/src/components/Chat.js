import { MessageContainer } from "./MessageContainer";

export const Chat = ({ messages, sendMessage }) => {

  return (
    <div>
      <div className="chat">
        <MessageContainer messages={messages} />
      </div>
    </div>
  );
};