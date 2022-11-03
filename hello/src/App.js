import logo from './logo.svg';
import './App.css';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import Stylesheet from './components/Stylesheet';
import Inline from './components/Inline';

function App() {
  return (
    <div className="App">
     <Inline/>
     <Stylesheet/>
     <UserGreeting/>
     <NameList/>  
    </div>
  );
}

export default App;
