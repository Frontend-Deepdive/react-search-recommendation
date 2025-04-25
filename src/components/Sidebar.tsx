import styled from 'styled-components';
import { useSearch } from '../features/search/hooks';

export const Sidebar = () => {
  const { searchHistory, recommendedItems } = useSearch();

  return (
    <SidebarContainer>
      <SectionTitle>최근 검색어</SectionTitle>
      <List>
        {searchHistory.map((item, i) => (
          <ListItem key={i}>{item}</ListItem>
        ))}
      </List>

      <SectionTitle>추천 검색어</SectionTitle>
      <List>
        {recommendedItems.map((item, i) => (
          <ListItem key={i}>{item}</ListItem>
        ))}
      </List>
    </SidebarContainer>
  );
};

const SidebarContainer = styled.aside`
  width: 256px;
  min-height: 100vh;
  padding: 16px;
  background-color: #f3f4f6;
  border-right: 1px solid #e5e7eb;
`;

const SectionTitle = styled.h2`
  font-weight: bold;
  margin-bottom: 8px;
`;

const List = styled.ul`
  list-style: none;
  padding-left: 0;
  margin-bottom: 24px;
`;

const ListItem = styled.li`
  padding: 4px 0;
`;
