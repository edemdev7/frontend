import { useRedditUserData } from '../hooks/usegetUserInfo';

const RedditUserPosts = () => {
  const { posts, loading, error } = useRedditUserData();

  if (loading) return <div className="text-center py-4">Loading posts...</div>;
  if (error) return <div className="text-center py-4 text-red-500">Error: {error}</div>;

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-gray-950 shadow-md rounded-lg">
      <h2 className="text-2xl font-bold text-gray-100 mb-6 text-center">User Posts</h2>
      <ul className="space-y-4">
        {posts.map((post, index) => (
          <li key={index} className="p-4 bg-gray-100 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <a
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-semibold text-blue-600 hover:underline"
            >
              {post.title}
            </a>
            <div className="mt-2 flex justify-between items-center text-gray-600">
              <p className="flex items-center">
                <span className="mr-2 text-xs">
                  <i className="fas fa-arrow-up"></i> {post.score} points
                </span>
                <span className="text-sm">
                  <i className="fas fa-comment"></i> {post.num_comments} comments
                </span>
              </p>
              <p className="text-xs text-gray-400">Posted by {post.author}</p>
            </div>
            
              <div className="mt-3">
                <img src='https://th.bing.com/th/id/OIP.8CqhYk-Xsj377uERoYrMCgHaEK?w=317&h=180&c=7&r=0&o=5&pid=1.7' alt="Post thumbnail" className="w-24 h-auto rounded-md shadow-sm" />
              </div>
            
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RedditUserPosts;
