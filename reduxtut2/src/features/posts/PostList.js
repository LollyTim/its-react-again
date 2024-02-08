import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchPosts, selectAllposts } from "./postsSlice";
import { getPostError } from "./postsSlice";
import { getPostStatus } from "./postsSlice";
import PostsExcert from "./PostsExcert";
// import { selectAllUsers } from "../users/usersSlice";
// import PostAuthot from "./postAuthot";
// import TimeAgo from "./TimeAgo";
// import ReactionButton from "./ReactionButton";

const PostsLists = () => {
  const dispatch = useDispatch();

  const posts = useSelector(selectAllposts);
  const postsStatus = useSelector(getPostStatus);
  const error = useSelector(getPostError);

  useEffect(() => {
    if (postsStatus === "idel") {
      dispatch(fetchPosts());
    }
  }, [postsStatus, dispatch]);

  let content;
  if (postsStatus === "loading") {
    content = <p>Loading .....</p>;
  } else if (postsStatus === "succeeded") {
    const orderPosts = posts
      .slice()
      .sort((a, b) => b.date.localeCompare(a.date));
    content = orderPosts.map((post) => (
      <PostsExcert key={post.id} post={post} />
    ));
  } else if (postsStatus === "failed") {
    content = <p>{error}</p>;
  }

  return (
    <section>
      <h2>Posts</h2>
      {content}
    </section>
  );
};

export default PostsLists;
