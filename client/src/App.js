import { useState } from "react";
import React from "react";

import Posts from "./components/createPost.component";
import PostList from "./components/postList.component";

function App() {
const [initalPosts,setPosts] = useState({})
  return (
    <div>
      <Posts setPosts={setPosts}/>
      <hr />
      <PostList initalPosts={initalPosts}/>
    </div>
  );
}

export default App;
