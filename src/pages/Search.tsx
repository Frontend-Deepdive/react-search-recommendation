import { useAtom } from 'jotai';
import { currentSearchValAtom } from '../stores/atom';
import SideBar from '../components/SideBar';
import SearchBar from '../components/SearchBar';
import styled from 'styled-components';

export default function Search() {
  const [currentSearchVal, setCurrentSearchVal] = useAtom(currentSearchValAtom);

  return (
    <AppContainer>
      <SideBar />
      <SearchBar val={currentSearchVal} setVal={setCurrentSearchVal} />
    </AppContainer>
  );
}

/**
 * 스타일링
 */
const AppContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  gap: 20px;
  padding: 20px;
  background-color: #f1f3f5;
  min-height: 100vh;
`;
