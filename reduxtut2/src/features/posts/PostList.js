import React from "react";
import { useSelector } from "react-redux";
import { selectAllposts } from "./postsSlice";
// import { selectAllUsers } from "../users/usersSlice";
import PostAuthot from "./postAuthot";

const PostsLists = () => {
  const posts = useSelector(selectAllposts);

  const renderedPosts = posts.map((post) => (
    <article key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content.substring(0, 100)}</p>
      <p className="postCredit">
        by <PostAuthot userid={post.userid} />
      </p>
    </article>
  ));
  return (
    <section>
      <h2>Posts</h2>
      {renderedPosts}
    </section>
  );
};

export default PostsLists;
