import { render, screen } from '@testing-library/react';
import Home from '../pages/Home';

test('renders by checking Home Title', () => {
  render(<Home />);
  const titleElement = screen.queryByText(/Home/i);
  expect(titleElement).not.toBeInTheDocument();
});
