import likes from '../../assets/likes.png'
// eslint-disable-next-line react/prop-types
const ChannelName = ({ title }) => {
  return (
    <div className="bg-yellow-200 p-6 rounded-lg h-64 flex">
        <img src={likes} alt="" className = "h-36 rounded-full "/> 
       <h1 className="text-center"> <strong>CHANNEL NAME :</strong></h1>
           <p className="text-center">{title}</p>
    </div>
  );
};

export default ChannelName