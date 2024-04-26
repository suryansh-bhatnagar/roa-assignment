import './App.css';
import Body from './components/Body';
import Highlights from './components/Highlights';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className='w-full h-screen flex bg-slate-50 py-6 px-4'>
      <Sidebar />
      <Body />
      <Highlights />
    </div>
  );
}

export default App;
