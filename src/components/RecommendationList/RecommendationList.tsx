import { useSearchStore } from '../../store/searchStore';
import { getRecommendations } from '../../utils/getSimilarKeyword';

export default function RecommendationList() {
  const currentKeyword = useSearchStore((state) => state.currentKeyword);
  const recommendations = currentKeyword !== '' ? getRecommendations(currentKeyword) : [];

  return (
    <div className='w-full md:w-60 border p-4 rounded'>
      <h2 className='font-bold mb-2'>추천 검색어 목록</h2>
      <ul>
        {recommendations.length > 0 ? (
          recommendations.map((keyword, idx) => (
            <li key={idx} className='mb-1'>
              {keyword}
            </li>
          ))
        ) : (
          <li>추천 검색어가 없습니다.</li>
        )}
      </ul>
    </div>
  );
}
