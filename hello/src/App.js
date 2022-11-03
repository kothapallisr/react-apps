import logo from './logo.svg';
import './App.css';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import Stylesheet from './components/Stylesheet';

function App() {
  return (
    <div className="App">
     <Stylesheet/>
     <UserGreeting/>
      <NameList/>  
    </div>
  );
}

export default App;
