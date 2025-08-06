import { render, screen, fireEvent } from '@testing-library/react';
import Counter from '../components/Counter';

test('renders counter with initial count 0', () => {
  render(<Counter />);
  expect(screen.getByText(/count: 0/i)).toBeInTheDocument();
});

test('increments count when button clicked', () => {
  render(<Counter />);
  const button = screen.getByRole('button', { name: /increment/i });
  fireEvent.click(button);
  expect(screen.getByText(/count: 1/i)).toBeInTheDocument();
});
