import { useState } from 'react';
import { useReddit } from '../hooks/useLastRedditPost';

function RedditLastPost() {
  const { subreddit, setSubreddit, posts, loading, fetchPosts } = useReddit();
  const [showResults, setShowResults] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (subreddit.trim()) {
      fetchPosts();
      setShowResults(true);
    }
  };

  return (
    <div className="flex flex-col p-6 bg-gray-950 shadow-md rounded-lg w-full h-100 ">
    <form onSubmit={handleSubmit} className="w-full mb-4">
      <input
        type="text"
        placeholder="Enter subreddit"
        value={subreddit}
        onChange={(e) => setSubreddit(e.target.value)}
        className="p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 w-full"
        required
      />
      <button
        type="submit"
        className="mt-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 w-full"
      >
        Get Last Posts
      </button>
    </form>
  
    {loading && <p className="text-gray-500">Loading...</p>}
    {/* {error && <p className="text-red-500">{error}</p>} */}
  
    {showResults && (
      <div className="mt-4 w-full h-64 overflow-y-auto bg-gray-50 p-4 rounded-lg shadow-md">
        {posts.length > 0 ? (
          <div className="space-y-4">
            {posts.map((post, index) => (
              <div key={index} className="p-4 bg-gray-100 rounded-lg shadow-md flex gap-4">
                <img
                  src='https://th.bing.com/th/id/OIP.8CqhYk-Xsj377uERoYrMCgHaEK?w=315&h=180&c=7&r=0&o=5&pid=1.7'
                  alt="thumbnail"
                  className="w-16 h-16 object-cover rounded-md"
                />
                <div className="flex-1">
                  <a
                    href={post.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 font-semibold hover:underline block truncate"
                  >
                    {post.title}
                  </a>
                  <p className="text-sm text-gray-600">Posted by: {post.author}</p>
                  {post.selftext && (
                    <p className="text-sm text-gray-700 mt-2 line-clamp-2 overflow-hidden">
                      {post.selftext}
                    </p>
                  )}
                  <p className="text-sm text-gray-600 mt-2">
                    Comments: {post.num_comments} | Score: {post.score}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          !loading && <p className="text-gray-900">No posts found</p>
        )}
      </div>
    )}
  </div>
  
  );
}

export default RedditLastPost;