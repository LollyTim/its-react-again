import React from "react";
import PostAuthot from "./postAuthot";
import TimeAgo from "./TimeAgo";
import ReactionButton from "./ReactionButton";

const PostsExcert = ({ post }) => {
  return (
    <article>
      <h3>{post.title}</h3>
      <p>{post.body.substring(0, 10)}</p>
      <p className="postCredit">
        by <PostAuthot userid={post.userid} />
        <TimeAgo timestamp={post.date} />
      </p>
      <ReactionButton post={post} />
    </article>
  );
};

export default PostsExcert;
