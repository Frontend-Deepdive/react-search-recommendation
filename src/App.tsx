import InputField from './components/InputField/InputField';
import Sidebar from './components/Sidebar/Sidebar';
import RecommendationList from './components/RecommendationList/RecommendationList';

function App() {
  return (
    <div className='flex gap-8'>
      <Sidebar />
      <div className='flex flex-col gap-4'>
        <InputField />
        <RecommendationList />
      </div>
    </div>
  );
}

export default App;
