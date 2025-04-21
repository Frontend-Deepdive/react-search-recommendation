import { useAtom } from "jotai";
import "./App.css";
import SearchBar from "./components/SearchBar";
import { searchRecordAtom } from "./stores/atom";
import { useEffect, useState } from "react";
import SideBar from "./components/SideBar";

function App() {
  // use 'useAtom' to read and write to the atom
  const [searchRecords, setSearchRecords] = useAtom(searchRecordAtom); // stack

  const [currentSearchVal, setCurrentSearchVal] = useState("");

  useEffect(() => {
    // 빈 문자열일 경우 실행하지 않음
    if (currentSearchVal === "") return;

    // 중복된 경우 삭제
    if (searchRecords.includes(currentSearchVal)) {
      setSearchRecords((prev) =>
        prev.filter((item) => item !== currentSearchVal)
      );
    }

    // 최대 5개까지 저장
    if (searchRecords.length >= 5) {
      setSearchRecords((prev) => prev.slice(1));
    }

    setSearchRecords((prev) => [...prev, currentSearchVal]);
  }, [currentSearchVal]);

  useEffect(() => {
    console.log("searchRecords", searchRecords);
  }, [searchRecords]);

  return (
    <div>
      <SearchBar val={currentSearchVal} setVal={setCurrentSearchVal} />
      <SideBar />
    </div>
  );
}

export default App;
