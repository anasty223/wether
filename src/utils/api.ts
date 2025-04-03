import axios from 'axios';

const API_KEY = 'your-api-key-here'; // Replace with your OpenWeatherMap API key
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

export interface WeatherData {
  name: string;
  main: { temp: number };
  weather: { description: string; icon: string }[];
  dt: number; // Unix timestamp
}

export const fetchWeather = async (city: string): Promise<WeatherData> => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        q: city,
        appid: API_KEY,
        units: 'metric', // Celsius
      },
    });
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch weather data');
  }
};