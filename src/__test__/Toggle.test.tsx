import { render, screen, fireEvent } from '@testing-library/react';
import Toggle from '../components/Toggle';

test('renders toggle with initial state OFF', () => {
  render(<Toggle />);
  expect(screen.getByText(/state: off/i)).toBeInTheDocument();
});

test('toggles state from OFF to ON when button clicked', () => {
  render(<Toggle />);
  const button = screen.getByRole('button', { name: /toggle/i });
  fireEvent.click(button);
  expect(screen.getByText(/state: on/i)).toBeInTheDocument();
});
