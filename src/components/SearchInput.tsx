import { useState } from 'react';
import styled from 'styled-components';
import { useSearch } from '../features/search/hooks';

export const SearchInput = () => {
  const [input, setInput] = useState('');
  const { addSearchHistory } = useSearch();

  const handleSearch = () => {
    if (input.trim()) {
      addSearchHistory(input.trim());
      setInput('');
    }
  };

  return (
    <SearchContainer>
      <Input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="검색어를 입력하세요"
      />
      <Button onClick={handleSearch}>검색</Button>
    </SearchContainer>
  );
};

const SearchContainer = styled.div`
  display: flex;
  gap: 8px;
  padding: 16px;
`;

const Input = styled.input`
  flex: 1;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  background-color: #3b82f6;
  color: white;
  padding: 8px 16px;
  border-radius: 4px;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #2563eb;
  }
`;
