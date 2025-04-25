import styled from 'styled-components';
import { SearchInput } from '../components/SearchInput';
import { Sidebar } from '../components/Sidebar';

const Home = () => {
  return (
    <Container>
      <Sidebar />
      <Main>
        <SearchInput />
      </Main>
    </Container>
  );
};

export default Home;

const Container = styled.div`
  display: flex;
  min-height: 100vh;
`;

const Main = styled.main`
  flex: 1;
`;
