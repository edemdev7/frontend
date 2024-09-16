import { useState, useEffect } from 'react';
import { getUserInfo,getUserPosts, getUserPostsStats } from '../api/apiAuthReddit';

export const useRedditUserInfo = () => {
  const [userInfo, setUserInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const data = await getUserInfo();
        setUserInfo(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUserInfo();
  }, []);

  return { userInfo, loading, error };
};


export const useRedditUserData = () => {
  const [posts, setPosts] = useState([]);
  const [postStats, setPostStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const postsData = await getUserPosts();
        const statsData = await getUserPostsStats();
        setPosts(postsData);
        setPostStats(statsData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { posts, postStats, loading, error };
};