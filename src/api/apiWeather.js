export const fetchWeatherData = async () => {
    try {
      const response = await fetch('https://weather-api-l2bs.onrender.com/weather');
      if (!response.ok) {
        throw new Error('Error fetching weather data');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching weather data:', error);
      throw error;
    }
  };
  