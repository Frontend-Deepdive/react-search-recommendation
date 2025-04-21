import { useAtom } from "jotai";
import "./App.css";
import SearchBar from "./components/SearchBar";
import { currentSearchValAtom } from "./stores/atom";
import SideBar from "./components/SideBar";
import styled from "styled-components";

function App() {
  const [currentSearchVal, setCurrentSearchVal] = useAtom(currentSearchValAtom);

  return (
    <AppContainer>
      <SideBar />
      <SearchBar val={currentSearchVal} setVal={setCurrentSearchVal} />
    </AppContainer>
  );
}

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

export default App;
