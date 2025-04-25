import { useState } from 'react';
import { useSearchStore } from '../../store/searchStore';

export default function InputField() {
  const [input, setInput] = useState('');
  const addKeyword = useSearchStore((state) => state.addKeyword);
  const setCurrentKeyword = useSearchStore((state) => state.setCurrentKeyword);

  const handleButtonClick = () => {
    if (input.trim()) {
      addKeyword(input.trim());
      setCurrentKeyword(input.trim());
      setInput('');
    }
  };

  return (
    <div className='flex flex-col md:flex-row gap-2 mb-4'>
      <input
        className='border rounded p-2 w-full md:w-60'
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder='검색어를 입력하세요'
      />
      <button
        className='bg-blue-500 text-white rounded  px-4 py-2 disabled:bg-gray-300'
        onClick={handleButtonClick}
        disabled={!input.trim()}
      >
        입력
      </button>
    </div>
  );
}
