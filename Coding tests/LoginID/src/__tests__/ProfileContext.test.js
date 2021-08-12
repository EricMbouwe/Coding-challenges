import { render, screen } from '@testing-library/react';
import { ProfileProvider } from '../contexts/ProfileContext';

test('renders component correctly', () => {
  render(<ProfileProvider />);
  const titleElement = screen.queryByText(/Profile provider/i);
  expect(titleElement).not.toBeInTheDocument();
});
