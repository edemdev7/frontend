
// eslint-disable-next-line react/prop-types
const ChannelDescription = ({description}) => {
   return (
     <div className="bg-blue-200 p-4 rounded-lg flex items-center space-x-4 flex">
        <h1 className="text-center"> <strong>DESCRIPTION :</strong></h1>
           <p>{description}</p>
    </div>
  );
};

export default ChannelDescription;