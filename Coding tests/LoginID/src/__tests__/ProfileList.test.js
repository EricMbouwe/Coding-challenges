import { render, screen } from '@testing-library/react';
import ProfileList from '../components/ProfileList';

test('renders component correctly', () => {
  const profiles = [];

  render(<ProfileList profiles={profiles} />);
  const titleElement = screen.queryByText(/Profile List/i);
  expect(titleElement).not.toBeInTheDocument();
});

test('profile name appears', async () => {
  let profiles = [];

  const fakeProfile = {
    id: '1',
    firstName: 'Ingaberg',
    lastName: 'Orton',
    email: 'iorton0@imdb.com',
    Company: 'Yadel',
    grades: ['78', '100', '92', '86', '89', '88', '91', '87'],
  };

  profiles = [...profiles, fakeProfile];

  jest.spyOn(global, 'fetch').mockImplementation(() => Promise.resolve({
    json: () => Promise.resolve(profiles),
  }));

  const { container, unmount } = await render(
    <ProfileList profiles={profiles} />,
  );

  expect(container.querySelector('#firstName').textContent).toBe(fakeProfile.firstName);

  global.fetch.mockRestore();

  unmount();
});
