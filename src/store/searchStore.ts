import { create } from 'zustand';
import { persist } from 'zustand/middleware';

// 검색어 상태 저장용 스토어 타입
type SearchStore = {
  recentKeywords: string[]; // 최근 검색어 목록
  currentKeyword: string; // 현재 검색어
  addKeyword: (keyword: string) => void; // 최근 검색어 목록에 키워드 추가
  setCurrentKeyword: (keyword: string) => void; // 현재 검색어 설정
};

// 검색어 상태 관리 스토어
export const useSearchStore = create<SearchStore>()(
  // 로컬스토리지 저장을 위한 persist 미들 웨어 사용
  persist(
    (set) => ({
      // 초기화
      recentKeywords: [],
      currentKeyword: '',

      // 최근 검색어 목록에 키워드 추가 (중복 제거, 최대 5개 유지)
      addKeyword: (keyword) =>
        set((state) => {
          const updated = [keyword, ...state.recentKeywords.filter((k) => k !== keyword)];
          if (updated.length > 5) updated.pop();
          return { recentKeywords: updated };
        }),

      // 현재 검색어 설정
      setCurrentKeyword: (keyword) => set({ currentKeyword: keyword }),
    }),
    {
      name: 'search-storage', // localStorage에 저장될 key 네이밍
    }
  )
);
