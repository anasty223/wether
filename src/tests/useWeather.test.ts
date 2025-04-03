import { renderHook, act } from '@testing-library/react';
import { useWeather } from '../hooks/useWeather';
import * as api from '../utils/api';
import * as cache from '../utils/cache';

jest.mock('../utils/api');
jest.mock('../utils/cache');

test('displays error for invalid city', async () => {
  (api.fetchWeather as jest.Mock).mockRejectedValue(new Error('City not found'));
  const { result } = renderHook(() => useWeather());

  await act(async () => {
    await result.current.getWeather('InvalidCity');
  });

  expect(result.current.error).toBe('City not found');
});

test('displays weather data correctly', async () => {
  const mockData = {
    name: 'London',
    main: { temp: 15 },
    weather: [{ description: 'clear', icon: '01d' }],
    dt: 1618317040,
  };
  (api.fetchWeather as jest.Mock).mockResolvedValue(mockData);
  (cache.getCachedWeather as jest.Mock).mockReturnValue(null);

  const { result } = renderHook(() => useWeather());

  await act(async () => {
    await result.current.getWeather('London');
  });

  expect(result.current.weather).toEqual(mockData);
});