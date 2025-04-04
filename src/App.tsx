
import { WeatherForm } from './components/WeatherForm';
import { WeatherDisplay } from './components/WeatherDisplay';
import { ErrorMessage } from './components/ErrorMessage';
import { useWeather } from './hooks/useWeather';
import { ChakraProvider } from '@chakra-ui/react';

function App() {
  const { weather, error, loading, getWeather } = useWeather();

  return (
    <ChakraProvider>
      <div style={{ maxWidth: 400, margin: '0 auto', padding: '20px' }}>
        <WeatherForm onSubmit={getWeather} />
        {loading && <p>Loading...</p>}
        {error && <ErrorMessage message={error} />}
        {weather && <WeatherDisplay weather={weather} />}
      </div>
    </ChakraProvider>
  );
}

export default App;