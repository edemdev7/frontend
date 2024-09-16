import { useWeather } from '../hooks/useWeather';

const Weather = () => {
  const { weatherData, loading, error } = useWeather();

  if (loading) {
    return <div className="text-center text-gray-500 animate-pulse">Chargement des données météorologiques...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500">Erreur : {error}</div>;
  }

  if (!weatherData) {
    return <div className="text-center text-gray-500">Aucune donnée disponible</div>;
  }

  const {
    city,
    country,
    temperature,
    description,
    icon,
    feelsLike,
    windSpeed,
    humidity,
    pressure,
    windDeg,
    clouds,
  } = weatherData;



  return (
    <div className="flex flex-col items-center justify-center p-6 bg-gradient-to-b from-blue-600 to-indigo-800 shadow-lg rounded-lg w-80 text-white transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
      <div className="text-xl font-semibold tracking-wider">
        {city}, {country}
      </div>

      <img
        className="w-20 h-20 my-4 animate-bounce-slow"
        src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
        alt="Weather Icon"
      />

      <div className="text-4xl font-bold">{temperature}°C</div>
      <div className="capitalize text-lg mt-2">{description}</div>
      <div className="text-sm mt-2">Ressenti : <span className="font-semibold">{feelsLike}°C</span></div>

      <div className="flex justify-between w-full mt-4 text-sm">
        <div className="flex flex-col items-center">
          <span className="font-semibold">Vent</span>
          {windSpeed} m/s
        </div>
        <div className="flex flex-col items-center">
          <span className="font-semibold">Humidité</span>
          {humidity}%
        </div>
        <div className="flex flex-col items-center">
          <span className="font-semibold">Pression</span>
          {pressure} hPa
        </div>
      </div>

      <div className="flex justify-between w-full mt-4 text-sm">
        <div className="flex flex-col items-center">
          <span className="font-semibold">Directon du vent </span>
          {windDeg}°
        </div>
        <div className="flex flex-col items-center">
          <span className="font-semibold">Nuages</span>
          {clouds} Octats
        </div>
      </div>
    </div>
  );
};

export default Weather;
