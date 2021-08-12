import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders by checking Home Title', () => {
  render(<App />);
  const titleElement = screen.queryByText('Home');
  expect(titleElement).not.toBeInTheDocument();
});
