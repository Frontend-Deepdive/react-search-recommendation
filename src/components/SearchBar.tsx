import { useAtomValue } from "jotai";
import { useState } from "react";
import { recommendedSearchValAtom } from "../stores/atom";
import styled from "styled-components";

interface SearchBarProps {
  val: string;
  setVal: (val: string) => void;
}

export default function SearchBar({ val, setVal }: SearchBarProps) {
  const [searchVal, setSearchVal] = useState(val); // 검색어 상태
  const recommendation = useAtomValue(recommendedSearchValAtom); // 추천 검색어

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // form 기본 동작 방지
    setVal(searchVal);
    setSearchVal(""); // 검색어 상태 초기화
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="Search..."
        onChange={(e) => setSearchVal(e.target.value)}
        value={searchVal}
      />
      <RecommendationList>
        {recommendation.map((item: string, index: number) => (
          <RecommendationItem key={index}>{item}</RecommendationItem>
        ))}
      </RecommendationList>
      <Button type="submit">Search</Button>
    </Form>
  );
}

/**
 * 스타일링
 */
const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Input = styled.input`
  width: 100%;
  max-width: 400px;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;
  &:focus {
    border-color: #007bff;
    box-shadow: 0 0 4px rgba(0, 123, 255, 0.5);
  }
`;

const RecommendationList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
  max-width: 400px;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const RecommendationItem = styled.li`
  padding: 10px;
  font-size: 14px;
  cursor: pointer;
  &:hover {
    background-color: #f1f1f1;
  }
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;
