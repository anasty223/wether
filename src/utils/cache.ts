interface CacheEntry {
    data: WeatherData;
    timestamp: number;
  }
  
  const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes in milliseconds
  
  export const getCachedWeather = (city: string): WeatherData | null => {
    const cached = localStorage.getItem(`weather_${city}`);
    if (!cached) return null;
  
    const { data, timestamp }: CacheEntry = JSON.parse(cached);
    if (Date.now() - timestamp > CACHE_DURATION) {
      localStorage.removeItem(`weather_${city}`);
      return null;
    }
    return data;
  };
  
  export const setCachedWeather = (city: string, data: WeatherData) => {
    const entry: CacheEntry = { data, timestamp: Date.now() };
    localStorage.setItem(`weather_${city}`, JSON.stringify(entry));
  };