import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ProfileCard from '../components/RedditUserProfile';

const AboutPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get('token');

    if (token) {
      localStorage.setItem('redditAccessToken', token);
      navigate('/');
    }
  }, [navigate]);

  return <div><ProfileCard/></div>;
};

export default AboutPage;
