import { useEffect, useState } from "react";
import { fetchPosts, fetchComments } from "../services/api";

const TrendingPosts = () => {
  const [trendingPosts, setTrendingPosts] = useState([]);

  useEffect(() => {
    const loadTrending = async () => {
      const posts = await fetchPosts();
      const comments = await fetchComments();

      const postCommentCounts = posts.map(post => ({
        ...post,
        commentCount: comments.filter(comment => comment.postId === post.id).length,
      }));

      const minComments = Math.min(...postCommentCounts.map(p => p.commentCount));
      setTrendingPosts(postCommentCounts.filter(p => p.commentCount === minComments));
    };

    loadTrending();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold">Trending Posts</h2>
      {trendingPosts.map(post => (
        <div key={post.id} className="border p-2 my-2">
          <h3 className="font-semibold">{post.title}</h3>
          <p>{post.body}</p>
          <p className="text-sm text-gray-500">Comments: {post.commentCount}</p>
        </div>
      ))}
    </div>
  );
};

export default TrendingPosts;
