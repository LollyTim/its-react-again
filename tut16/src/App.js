import Header from "./Header";
import Nav from "./Nav";
import Footer from "./Footer";
import Home from "./Home";
// import NewPost from "./NewPost";
import PostPage from "./PostPage";
import About from "./About";
import Missing from "./Missing";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import ANewPost from "./ANewPost";

function App() {
  const [search, setSearch] = useState("");
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "My First Post ",
      datrtime: "july 01, 2023 11:17:34 AM",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam sint expedita ad temporibus esse quidem distinctio quos, quaerat totam nam perferendis. Vero, suscipit.",
    },
    {
      id: 2,
      title: "My second Post ",
      datrtime: "july 20, 2023 11:17:34 AM",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam sint expedita ad temporibus esse quidem distinctio quos, quaerat totam nam perferendis. Vero, suscipit.",
    },
    {
      id: 3,
      title: "My third Post ",
      datrtime: "july 22, 2023 11:17:34 AM",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam sint expedita ad temporibus esse quidem distinctio quos, quaerat totam nam perferendis. Vero, suscipit.",
    },
    {
      id: 4,
      title: "My best Post ",
      datrtime: "july 12, 2023 11:17:34 AM",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam sint expedita ad temporibus esse quidem distinctio quos, quaerat totam nam perferendis. Vero, suscipit.",
    },
  ]);

  const [searchResult, setSearchResult] = useState([]);
  const [postTitle, setPostTitle] = useState("");
  const [postBody, setPostBody] = useState("");

  const handleSubmit = () => {};

  const navigate = useNavigate();
  const handleDelete = (id) => {
    const postsList = posts.filter((post) => post.id !== id);
    setPosts(postsList);
    navigate("/");
  };

  return (
    <div className="App">
      <Header title={"React js blog"} />
      <Nav search={search} setSearch={setSearch} />
      <Routes>
        <Route path="/" element={<Home posts={posts} setPosts={setPosts} />} />
        <Route
          path="/posts"
          element={
            <ANewPost
              handleSubmit={handleSubmit}
              postTitle={postTitle}
              setPostTitle={setPostTitle}
              setPostBody={setPostBody}
              postBody={postBody}
            />
          }
        />
        <Route
          path="/posts/:id"
          element={<PostPage posts={posts} handleDelete={handleDelete} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Missing />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
