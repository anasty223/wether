import axios from "axios";

const API_KEY = import.meta.env.VITE_API_KEY; 
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";


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
        units: "metric",
      },
    });
    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      if (error.response) {
        if (error.response.status === 404) {
          throw new Error("City not found. Please enter a valid city.");
        }
        throw new Error(`Error: ${error.response.data.message || "Something went wrong."}`);
      } else if (error.request) {
        throw new Error("No response from the server. Check your connection.");
      }
    }
    throw new Error("An unknown error occurred.");
  }
};
