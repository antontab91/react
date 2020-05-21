import React from "react";

const UserAvatr = (props) => {
  return (
    <img
      className="avatar"
      src={props.avatarUrl}
      alt={props.name}
    />
  );
}

export default UserAvatr;