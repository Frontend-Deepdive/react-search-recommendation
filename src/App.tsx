import { useAtom } from "jotai";
import "./App.css";
import SearchBar from "./components/SearchBar";
import { searchRecordAtom } from "./stores/atom";
import { useEffect, useState } from "react";

function App() {
  // use 'useAtom' to read and write to the atom
  const [searchRecords, setSearchRecords] = useAtom(searchRecordAtom);

  const [currentSearchVal, setCurrentSearchVal] = useState("");

  useEffect(() => {
    console.log("currentSearchVal", currentSearchVal);
  }, [currentSearchVal]);

  return (
    <div>
      <SearchBar val={currentSearchVal} setVal={setCurrentSearchVal} />
    </div>
  );
}

export default App;
