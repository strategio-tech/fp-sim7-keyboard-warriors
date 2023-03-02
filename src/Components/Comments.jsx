import React from "react";

const Comments = ({ user, comment }) => {
  return (
    <div className="square border">
      <h4>{user}</h4>
      <p>{comment}</p>
    </div>
  );
};

export default Comments;
