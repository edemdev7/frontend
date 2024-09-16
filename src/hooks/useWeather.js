import { useEffect, useState } from 'react';
import { fetchWeatherData } from '../api/apiWeather';

export const useWeather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const updateWeatherData = async () => {
    try {
      const data = await fetchWeatherData();
      setWeatherData(data);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    updateWeatherData();
    const interval = setInterval(updateWeatherData, 60000);

    return () => clearInterval(interval);
  }, []);

  return { weatherData, loading, error };
};
