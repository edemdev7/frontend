import axios from 'axios';

const BASE_URL = 'https://reddit-iv19.onrender.com/reddit';

export const getUserInfo = async () => {
  const accessToken = localStorage.getItem('redditAccessToken');
  if (!accessToken) {
    throw new Error('Access token is missing');
  }

  try {
    const response = await axios.get(`${BASE_URL}/me`, {
      headers: {
        Authorization: `${accessToken}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching user info:', error.message);
    throw new Error('Failed to fetch user info');
  }
};

// Fonction pour obtenir les posts de l'utilisateur
export const getUserPosts = async () => {
    const accessToken = localStorage.getItem('redditAccessToken');
    if (!accessToken) {
      throw new Error('Access token is missing');
    }
  
    try {
      const response = await axios.get(`${BASE_URL}/me/posts`, {
        headers: {
            Authorization: `${accessToken}`,
        },
      });
      return response.data; 
    } catch (error) {
      console.error('Error fetching user posts:', error.message);
      throw new Error('Failed to fetch user posts');
    }
};
  

// Fonction pour obtenir les statistiques des posts de l'utilisateur
export const getUserPostsStats = async () => {
    const accessToken = localStorage.getItem('redditAccessToken');
    if (!accessToken) {
      throw new Error('Access token is missing');
    }
  
    try {
      const response = await axios.get(`${BASE_URL}/me/postStat`, {
        headers: {
          Authorization: `${accessToken}`,
        },
      });
      return response.data; // retourne les statistiques des posts
    } catch (error) {
      console.error('Error fetching user posts stats:', error.message);
      throw new Error('Failed to fetch user posts stats');
    }
  };
  