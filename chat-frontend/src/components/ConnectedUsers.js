import React from "react";

export const ConnectedUsers = ({ users }) => {
  return (
    <div className="user-list">
      <h4>Users</h4>
      {users.map((user, index) => <h6 key={index}>{user}</h6>)}
    </div>
  );
};
