import Home from './pages/Home';
import { ProfileProvider } from './contexts/ProfileContext';

function App() {
  return (
    <div>
      <ProfileProvider>
        <Home />
      </ProfileProvider>
    </div>
  );
}

export default App;
