import { renderHook, act } from '@testing-library/react';
import { useWeather } from '../hooks/useWeather';
import * as api from '../utils/api';
import * as cache from '../utils/cache';

// Mock the modules
jest.mock('../utils/api', () => ({
  fetchWeather: jest.fn(), // Mock fetchWeather as a Jest mock function
}));
jest.mock('../utils/cache', () => ({
  getCachedWeather: jest.fn(), // Mock getCachedWeather
}));

describe('useWeather hook', () => {
  test('displays error for invalid city', async () => {
    // Type the mock correctly
    const fetchWeatherMock = api.fetchWeather as jest.Mock;
    fetchWeatherMock.mockRejectedValue(new Error('City not found'));

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

    // Type the mocks
    const fetchWeatherMock = api.fetchWeather as jest.Mock;
    const getCachedWeatherMock = cache.getCachedWeather as jest.Mock;

    fetchWeatherMock.mockResolvedValue(mockData);
    getCachedWeatherMock.mockReturnValue(null);

    const { result } = renderHook(() => useWeather());

    await act(async () => {
      await result.current.getWeather('London');
    });

    expect(result.current.weather).toEqual(mockData);
  });
});