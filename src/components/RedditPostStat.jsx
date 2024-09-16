import { useRedditUserData } from '../hooks/usegetUserInfo';

const RedditUserPostStats = () => {
  const { postStats, loading, error } = useRedditUserData();

  if (loading) return <div className="text-center py-4">Loading post stats...</div>;
  if (error) return <div className="text-center py-4 text-red-500">Error: {error}</div>;

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-blue-950 shadow-md rounded-lg">
      <h2 className="text-2xl font-bold text-gray-300 mb-6 text-center">Reddit User Post Stats</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Card for Total Posts */}
        <div className="p-4 bg-blue-50 rounded-lg shadow-sm text-center">
          <h3 className="text-lg font-semibold text-blue-600">Total Posts</h3>
          <p className="text-4xl font-bold text-blue-800 mt-2">{postStats.totalPosts}</p>
        </div>

        {/* Card for Average Score */}
        <div className="p-4 bg-green-50 rounded-lg shadow-sm text-center">
          <h3 className="text-lg font-semibold text-green-600">Average Score</h3>
          <p className="text-4xl font-bold text-green-800 mt-2">{postStats.averageScore.toFixed(2)}</p>
        </div>

        {/* Card for Total Comments */}
        <div className="p-4 bg-yellow-50 rounded-lg shadow-sm text-center">
          <h3 className="text-lg font-semibold text-yellow-600">Total Comments</h3>
          <p className="text-4xl font-bold text-yellow-800 mt-2">{postStats.totalComments}</p>
        </div>

        {/* Card for Active Subreddits */}
        <div className="p-4 bg-indigo-50 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold text-indigo-600 text-center">Active Subreddits</h3>
          <ul className="mt-4">
            {Object.entries(postStats.subreddits).map(([subreddit, count], index) => (
              <li key={index} className="flex justify-between py-2 px-4 bg-white shadow-md rounded-md mb-2">
                <span className="font-medium text-gray-800">{subreddit}</span>
                <span className="font-semibold text-gray-600">{count} posts</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RedditUserPostStats;
