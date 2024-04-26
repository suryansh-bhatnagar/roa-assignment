import './App.css';
import Body from './components/Body/Body';
import Highlights from './components/Highlights/Highlights';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className='w-full h-screen flex bg-slate-50'>
      <Sidebar />
      <Body />
      <Highlights />
    </div>
  );
}

export default App;
