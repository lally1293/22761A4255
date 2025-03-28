import { useEffect, useState } from "react";
import { fetchPosts } from "../services/api";

const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const loadPosts = async () => {
      const newPosts = await fetchPosts();
      setPosts(prev => [...newPosts, ...prev]);
    };

    loadPosts();
    const interval = setInterval(loadPosts, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold">Live Feed</h2>
      {posts.map(post => (
        <div key={post.id} className="border p-2 my-2">
          <h3 className="font-semibold">{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default Feed;
