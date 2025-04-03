import { MantineProvider } from '@mantine/core';
import { WeatherForm } from './components/WeatherForm';
import { WeatherDisplay } from './components/WeatherDisplay';
import { ErrorMessage } from './components/ErrorMessage';
import { useWeather } from './hooks/useWeather';

function App() {
  const { weather, error, loading, getWeather } = useWeather();

  return (
    <MantineProvider>
      <div style={{ maxWidth: 400, margin: '0 auto', padding: '20px' }}>
        <WeatherForm onSubmit={getWeather} />
        {loading && <p>Loading...</p>}
        {error && <ErrorMessage message={error} />}
        {weather && <WeatherDisplay weather={weather} />}
      </div>
    </MantineProvider>
  );
}

export default App;