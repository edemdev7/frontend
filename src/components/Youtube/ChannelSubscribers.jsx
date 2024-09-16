import suscribe from '../../assets/suscribe.jpg'
// eslint-disable-next-line react/prop-types
const ChannelSubscribers = ({ subscriberCount }) => {
  return (
    <div className="bg-yellow-100 p-6 rounded-lg flex">
        <img src={suscribe} alt="" className = "h-52 rounded-full"/>
         <h1 className="text-center"> <strong>SUSCRIBER :</strong></h1>
        <p className="text-center">{subscriberCount}</p>
    </div>
  );
};

export default ChannelSubscribers;
