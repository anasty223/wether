import { Card, Text, Group } from '@mantine/core';
import { WeatherData } from '../utils/api';

interface WeatherDisplayProps {
  weather: WeatherData;
}

export const WeatherDisplay = ({ weather }: WeatherDisplayProps) => {
  const lastUpdated = new Date(weather.dt * 1000).toLocaleTimeString();

  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Group>
        <img
          src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
          alt="weather icon"
        />
        <div>
          <Text size="lg">{weather.name}</Text>
          <Text>{weather.main.temp}°C</Text>
          <Text>{weather.weather[0].description}</Text>
          <Text size="sm" color="gray">
            Last updated: {lastUpdated}
          </Text>
        </div>
      </Group>
    </Card>
  );
};