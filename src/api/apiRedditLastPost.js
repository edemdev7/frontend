export const fetchRedditPosts = async (subreddit) => {
   const baseUrl = 'https://www.reddit.com';
   const limit = 20;
    try {
      const response = await fetch(`${baseUrl}/r/${subreddit}/new.json?limit=${limit}`);
      if (!response.ok) {
        throw new Error(`Error fetching posts from subreddit: ${response.statusText}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching Reddit posts:', error);
      throw error;
    }
  };
 