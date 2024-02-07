import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { postAdded } from "./postsSlice";

const AddPostForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [show, setShow] = useState(false);

  const onTitleChanged = (e) => setTitle(e.target.value);
  const onContentChanged = (e) => setContent(e.target.value);

  const onSavePostClick = () => {
    if (title && content) {
      dispatch(postAdded(title, content));
      setContent("");
      setTitle("");
      setShow(true);
    }
  };
  return (
    <section>
      <h2>Add a new post </h2>
      <form>
        <label htmlFor="postTitle">Post Title:</label>
        <input
          type="text"
          name="postTitle"
          id="postTitle"
          value={title}
          onChange={onTitleChanged}
        />
        <label htmlFor="postContent">Post Title:</label>
        <textarea
          name="postContent"
          id="postContent"
          value={content}
          onChange={onContentChanged}
        />
        <button type="button" onClick={onSavePostClick}>
          {" "}
          Save Post
        </button>
      </form>
      {show ? (
        <div
          className=""
          style={{
            position: "absolute",
            backgroundColor: "white",
            borderRadius: "20px",
            width: "150px",
            height: "150px",
            zIndex: "300",
            justifyContent: "center",
            alignItems: "center",
            color: "black",
          }}
        >
          <h4 style={{ justifyContent: "center", alignItems: "center" }}>
            Post Saved
          </h4>
          <button onClick={() => setShow(false)}>close</button>
        </div>
      ) : null}
    </section>
  );
  //   return <div>AddPostForm</div>;
};

export default AddPostForm;
