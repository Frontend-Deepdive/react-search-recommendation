import { create } from 'zustand';

type SearchTerm = string;

interface SearchStore {
  searchHistory: SearchTerm[];
  recommendedItems: string[];
  addSearchHistory: (term: SearchTerm) => void;
  setRecommendedItems: (items: string[]) => void;
}

export const useSearchStore = create<SearchStore>((set) => ({
  searchHistory: [],
  recommendedItems: [],
  addSearchHistory: (term) =>
    set((state) => {
      const updated = [term, ...state.searchHistory.filter((t) => t !== term)].slice(0, 5);
      return { searchHistory: updated };
    }),
  setRecommendedItems: (items) => set({ recommendedItems: items }),
}));
