import { useEffect } from 'react';
import { getRecommendations } from '../../utils/getRecommendations';
import { useSearchStore } from './store';

export const useSearch = () => {
  const { searchHistory, recommendedItems, addSearchHistory, setRecommendedItems } =
    useSearchStore();

  useEffect(() => {
    const newRecommendations = getRecommendations(searchHistory);
    setRecommendedItems(newRecommendations);
  }, [searchHistory, setRecommendedItems]);

  return { searchHistory, recommendedItems, addSearchHistory };
};
