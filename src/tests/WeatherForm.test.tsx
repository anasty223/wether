import { render, screen, fireEvent } from '@testing-library/react';
import { WeatherForm } from '../components/WeatherForm';

test('submits city name correctly', () => {
  const mockSubmit = jest.fn();
  render(<WeatherForm onSubmit={mockSubmit} />);

  const input = screen.getByPlaceholderText(/enter city name/i);
  const button = screen.getByRole('button', { name: /get weather/i });

  fireEvent.change(input, { target: { value: 'London' } });
  fireEvent.click(button);

  expect(mockSubmit).toHaveBeenCalledWith('London');
});