import logo from './logo.svg';
import './App.css';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import Stylesheet from './components/Stylesheet';
import Inline from './components/Inline';
import './appStyles.css'
import styles from './appStyles.module.css'
import Form from './components/Form'
import LifecycleA from './components/LifecycleA';
import FragmentDemo from './components/FragmentDemo';

function App() {
  return (
    <div className='App'>
      <FragmentDemo/>
    </div>
    //<LifecycleA/>
    // <div className="App">
    //  <h2 className='error'>Error</h2>
    //  <h2 className={styles.success}>Success</h2>
    //  <Inline/>
    //  <Stylesheet/>
    //  <UserGreeting/>
    //  <NameList/>  
    // </div>
  );
}

export default App;
