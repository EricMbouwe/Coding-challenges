import { render, screen } from '@testing-library/react';
import InputFilter from '../components/InputFilter';

test('renders component correctly', () => {
  render(<InputFilter type="NAME" />);
  const titleElement = screen.queryByText(/Search/i);
  expect(titleElement).not.toBeInTheDocument();
});
