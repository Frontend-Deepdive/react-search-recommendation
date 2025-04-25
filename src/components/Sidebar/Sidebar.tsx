import { useSearchStore } from '../../store/searchStore';

export default function Sidebar() {
  const recentKeywords = useSearchStore((state) => state.recentKeywords);

  return (
    <div className='w-60 h-screen p-4 bg-gray-50 shadow-xl space-y-4 text-nowrap'>
      <h2 className='font-bold text-2xl '>최근 검색어</h2>
      <ul>
        {recentKeywords.length > 0 ? (
          recentKeywords.map((keyword, idx) => (
            <li key={idx} className='mb-1'>
              {keyword}
            </li>
          ))
        ) : (
          <li>최근 검색 기록이 없습니다.</li>
        )}
      </ul>
    </div>
  );
}
