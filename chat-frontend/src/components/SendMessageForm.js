import { Button, Form, FormControl, InputGroup } from "react-bootstrap";
import { useState } from "react";

export const SendMessageForm = ({ sendMessage }) => {
  const [message, setMessage] = useState("");

  return (
    <div>
      <Form>
        <InputGroup>
          <FormControl
            placeholder="message..."
            onChange={e => setMessage(e.target.value)} value={message} />
        </InputGroup>
        <InputGroup.Append>
          <Button
            variant="primary"
            type="submit"
          >Send</Button>
        </InputGroup.Append>
      </Form>
    </div>
  );
};