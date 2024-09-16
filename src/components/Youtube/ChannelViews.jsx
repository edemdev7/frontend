import likes from '../../assets/likes.png'
// eslint-disable-next-line react/prop-types
const ChannelViews =  ({ viewCount }) => {
  return (
    <div className="bg-blue-200 p-4 rounded-lg flex items-center space-x-4 h-64 flex">

        <img src={likes} alt="" className="h-32" />
        <h1 className="text-center"> <strong>VIEWS :</strong></h1>
        <p className="text-center">{viewCount}</p>

    </div>
  );
};
export default ChannelViews;
