import Header from "./Header";
import Nav from "./Nav";
import Footer from "./Footer";
import Home from "./Home";
// import NewPost from "./NewPost";
import PostPage from "./PostPage";
import About from "./About";
import Missing from "./Missing";
import { Routes, Route } from "react-router-dom";
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

  return (
    <div className="App">
      <Header title={"React js blog"} />
      <Nav search={search} setSearch={setSearch} />
      <Routes>
        <Route path="/" element={<Home posts={posts} setPosts={setPosts} />} />
        <Route path="/posts" element={<ANewPost />} />
        <Route path="/posts/:id" element={<PostPage />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Missing />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
