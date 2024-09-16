import { useState } from 'react';
import { fetchRedditPosts } from '../api/apiRedditLastPost';

export const useReddit = () => {
  const [subreddit, setSubreddit] = useState('');
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchPosts = async () => {
    setLoading(true);
    setError(null);

    try {
      const data = await fetchRedditPosts(subreddit);
      setPosts(data);
    } catch (err) {
      setError(err.message);
    }

    setLoading(false);
  };

  return {
    subreddit,
    setSubreddit,
    posts,
    loading,
    error,
    fetchPosts,
  };
};