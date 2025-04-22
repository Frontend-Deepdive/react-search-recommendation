import { create } from 'zustand';

// 검색어 상태 저장용 스토어 타입
type SearchStore = {
  recentKeywords: string[]; // 최근 검색어 목록
  currentKeyword: string; // 현재 검색어
  addKeyword: (keyword: string) => void; // 최근 검색어 목록에 키워드 추가
  setCurrentKeyword: (keyword: string) => void; // 현재 검색어 설정
};

// 검색어 상태 관리 스토어
export const useSearchStore = create<SearchStore>((set) => ({
  // 스토어 초기화
  recentKeywords: [],
  currentKeyword: '',
  addKeyword: (keyword) =>
    set((state) => {
      const updated = [keyword, ...state.recentKeywords.filter((k) => k !== keyword)]; // 중복 제거
      if (updated.length > 5) updated.pop(); // 최대 5개 유지
      return { recentKeywords: updated };
    }),
  setCurrentKeyword: (keyword) => set({ currentKeyword: keyword }),
}));
