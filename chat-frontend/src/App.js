import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Lobby } from "./components/Lobby";
import { HubConnectionBuilder, LogLevel } from "@microsoft/signalr";
import { useState } from "react";
import { Chat } from "./components/Chat";

export const App = () => {
  const [connection, setConnection] = useState({});
  const [messages, setMessages] = useState([]);

  const joinRoom = async (user, room) => {
    try {
      const connection = new HubConnectionBuilder()
        .withUrl("https://localhost:5001/chat")
        .configureLogging(LogLevel.Information)
        .build();

      connection.on("ReceiveMessage", (user, message) => {
        setMessages(messages => [...messages, { user, message }]);
      });

      await connection.start();
      await connection.invoke("JoinRoom", { user, room });
      setConnection(connection);
    } catch (e) {
      console.log(e);
    }
  };

  const sendMessage = async (message) => {
    try {
      await connection.invoke("SendMessage", message);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="app">
      <h2>Chat</h2>
      <hr className="line" />
      {!connection
        ? <Lobby joinRoom={joinRoom} />
        : <Chat messages={messages} />
      }
    </div>
  );
};