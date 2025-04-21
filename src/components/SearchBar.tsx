import { useState } from "react";

interface SearchBarProps {
  val: string;
  setVal: (val: string) => void;
}

export default function SearchBar({ val, setVal }: SearchBarProps) {
  const [searchVal, setSearchVal] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // form 기본 동작 방지

    // 예외 처리
    if (searchVal === "") {
      alert("검색어를 입력하세요");
      return;
    }

    setVal(searchVal);
    setSearchVal(""); // 검색어 초기화
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => setSearchVal(e.target.value)}
        value={searchVal}
      />
      <button type="submit">Search</button>
    </form>
  );
}
