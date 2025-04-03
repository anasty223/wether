import { TextInput, Button, Stack } from '@mantine/core';
import { useState } from 'react';

interface WeatherFormProps {
  onSubmit: (city: string) => void;
}

export const WeatherForm = ({ onSubmit }: WeatherFormProps) => {
  const [city, setCity] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (city.trim()) onSubmit(city);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Stack>
        <TextInput
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.currentTarget.value)}
        />
        <Button type="submit">Get Weather</Button>
      </Stack>
    </form>
  );
};