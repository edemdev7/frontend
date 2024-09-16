import { useState } from 'react';

const useYoutubeChannel = () => {
  const [youtubeLink, setYoutubeLink] = useState('');
  const [channelInfo, setChannelInfo] = useState({
    title: '',
    description: '',
    subscriberCount: '',
    viewCount: '',
    videoCount: ''
  });

    console.log('channelInfo:', channelInfo);
  const [selectedWidgets, setSelectedWidgets] = useState([]);


  const handleInputChange = (e) => {
    setYoutubeLink(e.target.value);
  };

  const handleSubmitVideoLink = async (e) => {
    e.preventDefault();

    if (youtubeLink) {
      try {
        const response = await fetch(`https://youtube-service-n9jf.onrender.com/youtube/channel-info?url=${encodeURIComponent(youtubeLink)}`);
        if (response.ok) {
          const info = await response.json();
          setChannelInfo({
            title: info.snippet.title,
            description: info.snippet.description,
            subscriberCount: info.statistics.subscriberCount,
            viewCount: info.statistics.viewCount,
            videoCount: info.statistics.videoCount
          });
          console.log('Informations de la chaîne récupérées:', info);
        } else {
          alert('Erreur lors de la récupération des informations de la chaîne.');
        }
      } catch (error) {
        console.error('Erreur lors de la communication avec l\'API backend:', error);
      }
    } else {
      alert('Veuillez entrer un lien YouTube valide.');
    }
  };

  const handleWidgetChange = (widget) => {
    if (selectedWidgets.includes(widget)) {
      setSelectedWidgets(selectedWidgets.filter((w) => w !== widget));
    } else {
      setSelectedWidgets([...selectedWidgets, widget]);
    }
  };

  return {
    youtubeLink,
    channelInfo,
    selectedWidgets,
    handleInputChange,
    handleSubmitVideoLink,
    handleWidgetChange
  };
};

export default useYoutubeChannel;