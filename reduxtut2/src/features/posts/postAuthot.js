import { useSelector } from "react-redux";
import { selectAllUsers } from "../users/usersSlice";
import React from "react";

const PostAuthot = ({ userid }) => {
  const users = useSelector(selectAllUsers);
  const author = users.find((user) => user.id === userid);

  return <span>{author ? author.name : "Unknown Author"}</span>;
};

export default PostAuthot;
