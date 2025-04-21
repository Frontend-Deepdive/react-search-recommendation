import { useAtom } from "jotai";
import "./App.css";
import SearchBar from "./components/SearchBar";
import { searchRecordAtom } from "./stores/atom";
import { useEffect, useState } from "react";

function App() {
  // use 'useAtom' to read and write to the atom
  const [searchRecords, setSearchRecords] = useAtom(searchRecordAtom); // stack

  const [currentSearchVal, setCurrentSearchVal] = useState("");

  useEffect(() => {
    if (currentSearchVal === "") return; // 빈 문자열일 경우 실행하지 않음
    console.log("currentSearchVal", currentSearchVal);
    if (searchRecords.includes(currentSearchVal)) {
      // 중복된 경우 삭제
      setSearchRecords((prev) =>
        prev.filter((item) => item !== currentSearchVal)
      );
    }
    setSearchRecords((prev) => [...prev, currentSearchVal]);
  }, [currentSearchVal]);

  useEffect(() => {
    console.log("searchRecords", searchRecords);
  }, [searchRecords]);

  return (
    <div>
      <SearchBar val={currentSearchVal} setVal={setCurrentSearchVal} />
    </div>
  );
}

export default App;
