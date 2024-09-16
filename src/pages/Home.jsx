import RedditLastPost from '../components/RedditLastPost';
import RedditUserPosts from '../components/RedditPost';
import RedditUserPostStats from '../components/RedditPostStat';
import ProfileCard from '../components/RedditUserProfile';

const HomePage = () => {
  const handleLoginClick = () => {
    window.location.href = 'https://reddit-iv19.onrender.com/reddit/login';
  };
  
    return (
      <>
      <div className="">
          <RedditLastPost />
          <RedditUserPosts/>
          <RedditUserPostStats/>
          <ProfileCard/>
      
        <button
          onClick={handleLoginClick}
          className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded"
        >
          Login with Reddit
        </button>
      </div>
      </>
      
    );
  };
  
  export default HomePage;
  
  