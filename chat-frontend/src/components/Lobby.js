import { Button, Form, FormControl } from "react-bootstrap";
import { useState } from "react";

export const Lobby = ({ joinRoom }) => {
  const [user, setUser] = useState("");
  const [room, setRoom] = useState("");

  return <Form
    className=".lobby"
    onSubmit={e => {
      e.preventDefault();
      joinRoom(user, room);
    }}
  >
    <Form.Group>
      <FormControl placeholder="name" onChange={e => setUser(e.target.value)} />
      <FormControl placeholder="room" onChange={e => setRoom(e.target.value)} />
    </Form.Group>
    <Button variant="success" type="submit" disabled={!user || !room}>Join</Button>
  </Form>;
};