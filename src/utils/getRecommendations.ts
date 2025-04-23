const relatedKeywords: Record<string, string[]> = {
  react: ['SPA', 'component', 'redux'],
  javascript: ['typescript', 'node.js'],
  typescript: ['next.js', 'vite'],
};

export const getRecommendations = (history: string[]): string[] => {
  const recommendedSet = new Set<string>();

  history.forEach((term) => {
    const lower = term.toLowerCase();
    const related = relatedKeywords[lower];
    if (related) {
      related.forEach((item) => recommendedSet.add(item));
    }
  });

  // 중복 제거 + 기존 검색어 제거
  const unique = [...recommendedSet].filter(
    (item) => !history.some((h) => item.toLowerCase() === h.toLowerCase()),
  );

  return unique.slice(0, 5); // 최대 5개 추천
};
