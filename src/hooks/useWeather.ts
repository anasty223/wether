import { useState } from 'react';
import { fetchWeather, WeatherData } from '../utils/api';
import { getCachedWeather, setCachedWeather } from '../utils/cache';

export const useWeather = () => {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const getWeather = async (city: string) => {
    setLoading(true);
    setError(null);

    const cached = getCachedWeather(city);
    if (cached) {
      setWeather(cached);
      setLoading(false);
      return;
    }

    try {
      const data = await fetchWeather(city);
      setWeather(data);
      setCachedWeather(city, data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'City not found');
    } finally {
      setLoading(false);
    }
  };

  return { weather, error, loading, getWeather };
};