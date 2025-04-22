import levenshtein from 'js-levenshtein';
import { recommendations } from '../data/recommendations';
import { KeywordRecommendations } from '../types/Recommendations';

export function getRecommendations(keyword: string): string[] {
  // 편집거리를 계산하여 오름차순 정렬
  const sortedKeys = Object.keys(recommendations as KeywordRecommendations)
    .map((key) => ({
      key,
      dist: levenshtein(key.toLowerCase(), keyword.trim()),
    }))
    .sort((a, b) => a.dist - b.dist);

  // 유사도가 가장 높은 키워드 찾기
  const closest = sortedKeys[0];

  // 유사도 기준을 편집거리 2 이하로 설정
  return closest.dist <= 2 ? (recommendations as KeywordRecommendations)[closest.key] : [];
}
