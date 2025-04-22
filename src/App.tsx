import InputField from './components/InputField/InputField';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  return (
    <div className='flex gap-8'>
      <Sidebar />
      <div className='flex flex-col gap-4'>
        <InputField />
      </div>
    </div>
  );
}

export default App;
