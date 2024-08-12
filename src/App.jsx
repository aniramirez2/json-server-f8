import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const resultPosts = await axios.get("http://localhost:3000/posts");
      console.log("posts", resultPosts);
      setPosts(resultPosts.data);
    }
    fetchData();
  }, []);

  return (
    <>
      {posts.map((post) => (
        <h1 key={post.id}>{post.title}</h1>
      ))}
    </>
  );
}

export default App;
