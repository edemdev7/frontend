import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const RedditCallback = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');

    if (code) {
      axios.get(`http://localhost:3000/reddit/callback?code=${code}`)
        .then(response => {
          const token = response.data.accessToken;

          localStorage.setItem('redditAccessToken', token);

          // Rediriger vers la page "about"
          navigate('/about');
        })
        .catch(error => {
          console.error('Error during token exchange:', error);
        });
    }
  }, [navigate]);

  return (
    <div>
      Redirection en cours...
    </div>
  );
};

export default RedditCallback;
