import { MessageContainer } from "./MessageContainer";

export const Chat = ({ messages }) => {

  return (
    <div>
      <div className="chat">
        <MessageContainer messages={messages} />
      </div>
    </div>
  );
};