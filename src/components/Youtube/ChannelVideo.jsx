import views from '../../assets/views.png'
// eslint-disable-next-line react/prop-types
const ChannelVideo =  ({ videoCount }) => {
  return (
    <div className="bg-blue-200 p-4 rounded-lg flex items-center space-x-4 h-64 flex ">

            <img src={views} alt="" className="h-32"/>
        <p className="text-sm font-bold"></p>
              <p className="font-semibold"></p>
               <h1 className="text-center"> <strong>VIDEOS COUNT :</strong></h1>
        <p className="text-center">{videoCount}</p>
      </div>
  );
};
export default ChannelVideo;
