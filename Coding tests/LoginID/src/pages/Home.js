import { useContext } from 'react';
import styled from 'styled-components';
import InputFilter from '../components/InputFilter';
import ProfileList from '../components/ProfileList';
import { ProfileContext } from '../contexts/ProfileContext';

function Home() {
  const { filteredProfiles, loading, error } = useContext(ProfileContext);

  return (
    <Container>
      <Wrapper>
        {error && <RequestingResponse>{error}</RequestingResponse>}
        {loading && (
          <RequestingResponse>
            <Loadder>
              <i className="fa fa-refresh" aria-hidden="true" />
            </Loadder>
          </RequestingResponse>
        )}
        {filteredProfiles && (
          <>
            <Header>
              <InputFilter text="Search by name" type="NAME" />
              <InputFilter text="Search by tag" type="TAG" />
            </Header>
            <ProfileList profiles={filteredProfiles} />
          </>
        )}
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;

  @media (max-width: 998px) {
    padding: 20px;
  }
`;

const Wrapper = styled.div`
  position: relative;
  border-radius: 10px;
  background-color: #fff;
  width: 100%;
  height: 80vh;
  max-height: 800px;
  max-width: 900px;
  overflow-y: scroll;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 20%), 0 2px 14px -1px rgb(0 0 0 / 16%);

  &::-webkit-scrollbar {
    display: none;
  }

  ::-webkit-scrollbar-thumb {
    background: #777;
    border-radius: 10px;
  }

  -ms-overflow-style: none;
  scrollbar-width: none;

  @media (max-width: 640px) {
    height: 100vh;
  }
`;

const Header = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  background-color: #fff;
  z-index: 10;
`;

const RequestingResponse = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Loadder = styled.span`
  font-size: 40px;
  color: #aaa;

  i {
    animation: spin 2s linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default Home;
