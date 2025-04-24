import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

type SearchTerm = string;

interface SearchStore {
  searchHistory: SearchTerm[];
  recommendedItems: string[];
  addSearchHistory: (term: SearchTerm) => void;
  setRecommendedItems: (items: string[]) => void;
}

export const useSearchStore = create<SearchStore>()(
  immer((set) => ({
    searchHistory: [],
    recommendedItems: [],
    addSearchHistory: (term) =>
      set((state) => {
        state.searchHistory = [term, ...state.searchHistory.filter((t) => t !== term)].slice(0, 5);
      }),
    setRecommendedItems: (items) =>
      set((state) => {
        state.recommendedItems = items;
      }),
  })),
);
