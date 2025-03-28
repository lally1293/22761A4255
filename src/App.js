import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import TopUsers from "./pages/TopUsers";
import TrendingPosts from "./pages/TrendingPosts";
import Feed from "./pages/Feed";

function App() {
  return (
    <Router>
      <div className="p-4">
        <nav className="mb-4">
          <Link to="/top-users" className="mx-2">Top Users</Link>
          <Link to="/trending-posts" className="mx-2">Trending Posts</Link>
          <Link to="/feed" className="mx-2">Live Feed</Link>
        </nav>
        <Routes>
          <Route path="/top-users" element={<TopUsers />} />
          <Route path="/trending-posts" element={<TrendingPosts />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/" element={<Feed />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
