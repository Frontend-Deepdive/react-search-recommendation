import { useAtom } from "jotai";
import "./App.css";
import SearchBar from "./components/SearchBar";
import { currentSearchValAtom } from "./stores/atom";
import SideBar from "./components/SideBar";

function App() {
  const [currentSearchVal, setCurrentSearchVal] = useAtom(currentSearchValAtom);

  return (
    <div>
      <SearchBar val={currentSearchVal} setVal={setCurrentSearchVal} />
      <SideBar />
    </div>
  );
}

export default App;
