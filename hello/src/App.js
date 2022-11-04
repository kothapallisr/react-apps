import logo from './logo.svg';
import './App.css';
import ParentComp from './components/ParentComp';
import RefsDemo from './components/RefsDemo';
import FocusInput from './components/FocusInput';
import ForwardRefParentInput from './components/ForwardRefParentInput';


function App() {
  return (
    <div className='App'>
     <ForwardRefParentInput/>
    </div>

  );
}

export default App;
