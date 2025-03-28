import { useEffect, useState } from "react";
import { fetchUsers, fetchPosts } from "../services/api";

const TopUsers = () => {
  const [topUsers, setTopUsers] = useState([]);

  useEffect(() => {
    const loadUsers = async () => {
      const users = await fetchUsers();
      const posts = await fetchPosts();

      const userPostCounts = users.map(user => ({
        ...user,
        postCount: posts.filter(post => post.userId === user.id).length,
      }));

      userPostCounts.sort((a, b) => b.postCount - a.postCount);
      setTopUsers(userPostCounts.slice(0, 5));
    };

    loadUsers();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold">Top Users</h2>
      <ul>
        {topUsers.map(user => (
          <li key={user.id} className="border p-2 my-2">
            {user.name} - {user.postCount} Posts
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TopUsers;
