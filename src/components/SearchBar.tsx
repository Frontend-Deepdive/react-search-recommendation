import { useState } from "react";

interface SearchBarProps {
  val: string;
  setVal: (val: string) => void;
}

export default function SearchBar({ val, setVal }: SearchBarProps) {
  const [searchVal, setSearchVal] = useState("");

  return (
    <>
      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => setSearchVal(e.target.value)}
        value={searchVal}
      />
      <button
        type="submit"
        onClick={() => {
          setVal(searchVal);
          setSearchVal("");
        }}
      >
        Search
      </button>
    </>
  );
}
