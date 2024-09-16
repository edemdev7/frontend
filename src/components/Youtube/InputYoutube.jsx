import useYoutubeChannel from '../../api/useYoutube';
import ChannelName from './ChannelName';
import ChannelDescription from './ChannelDescription';
import ChannelSubscribers from './ChannelSubscribers';
import ChannelVideo from './ChannelVideo';
import ChannelViews from './ChannelViews';
import WidgetSelector from './WidgetSelector';
import Icon from '../../assets/icon1PNG.png';

const InputYoutube = () => {
  const {
    youtubeLink,
    channelInfo,
    selectedWidgets,
    handleInputChange,
    handleSubmitVideoLink,
    handleWidgetChange
  } = useYoutubeChannel();

  return (
    <div className="input-youtube">
      <form onSubmit={handleSubmitVideoLink} className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">YouTube Channel Info</h2>
        <img src={Icon} alt="Icon" className="h-32 mx-auto" />
        <div className="mb-4">
          <label htmlFor="youtube-link" className="block text-gray-700 text-sm font-bold mb-2">
            Lien YouTube :
          </label>
          <input
            type="text"
            id="youtube-link"
            value={youtubeLink}
            onChange={handleInputChange}
            placeholder="Entrez le lien YouTube"
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 px-4 rounded-md shadow hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
        >
          Soumettre
        </button>
      </form>
      
      <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg mt-6">
        <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">Sélection des Widgets</h2>
        <WidgetSelector selectedWidgets={selectedWidgets} onWidgetChange={handleWidgetChange} />
      </div>

      <br />
      <br />
      <h1 className="text-center text-2xl font-bold">STATISTIQUES</h1>
      <div className="mx-auto p-4 space-y-6">
        {selectedWidgets.includes('description') && <ChannelDescription description={channelInfo.description} />}
        <div className="grid grid-cols-2 gap-4">
          {selectedWidgets.includes('name') && <ChannelName title={channelInfo.title} />}
          {selectedWidgets.includes('subscribers') && <ChannelSubscribers subscriberCount={channelInfo.subscriberCount} />}
        </div>
        <div className="grid grid-cols-2 gap-4">
          {selectedWidgets.includes('video') && <ChannelVideo videoCount={channelInfo.videoCount} />}
          {selectedWidgets.includes('views') && <ChannelViews viewCount={channelInfo.viewCount} />}
        </div>
      </div>
    </div>
  );
};

export default InputYoutube;