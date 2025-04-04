import axios from 'axios';

const API_KEY = import.meta.env.VITE_API_KEY; // Replace with your OpenWeatherMap API key
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

export interface WeatherData {
  name: string;
  main: { temp: number };
  weather: { description: string; icon: string }[];
  dt: number; 
}

export const fetchWeather = async (city: string): Promise<WeatherData> => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        q: city,
        appid: API_KEY,
        units: 'metric', 
      },
    });
    return response.data;
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      throw new Error('An unknown error occurred');
    }
  }
};