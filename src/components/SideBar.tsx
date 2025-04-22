import { useAtomValue } from 'jotai';
import { searchRecordAtom } from '../stores/atom';
import styled from 'styled-components';

export default function SideBar() {
  const searchRecords = useAtomValue(searchRecordAtom);
  const reversedSearchRecords = [...searchRecords].reverse();

  return (
    <SideBarContainer>
      <Title>검색 기록</Title>
      <RecordList>
        {reversedSearchRecords.map((item: string, index: number) => (
          <RecordItem key={index}>{item}</RecordItem>
        ))}
      </RecordList>
    </SideBarContainer>
  );
}

/**
 * 스타일링
 */
const SideBarContainer = styled.div`
  width: 300px;
  padding: 20px;
  background-color: #f8f9fa;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 15px;
  color: #343a40;
`;

const RecordList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const RecordItem = styled.li`
  padding: 10px;
  font-size: 14px;
  color: #495057;
  border-bottom: 1px solid #dee2e6;
  cursor: pointer;

  &:hover {
    background-color: #e9ecef;
  }

  &:last-child {
    border-bottom: none;
  }
`;
