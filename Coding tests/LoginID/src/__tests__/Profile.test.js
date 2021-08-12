import { render, screen } from '@testing-library/react';
import Profile from '../components/Profile';

test('renders component correctly', () => {
  render(<Profile />);
  const titleElement = screen.queryByText(/Profile/i);
  expect(titleElement).not.toBeInTheDocument();
});

test('profile name does not appears', async () => {
  const profileName = screen.queryByText('Ingaberg');
  expect(profileName).not.toBeInTheDocument();
});

test('the firts accordion button is not in the page', async () => {
  const toggleButton = screen.queryByText('toggle');
  expect(toggleButton).toBeNull();
});

test('accordion buttons are not in the page', async () => {
  const toggleButtons = screen.queryAllByText('toggle');
  expect(toggleButtons).toHaveLength(0);
});
