import './App.css';
import ClickCounterTwo from './components/ClickCounterTwo';
import ComponentC from './components/ComponentC';
import Counter from './components/Counter';
import HoverCounterTwo from './components/HoverCounterTwo';
import { UserProvider } from './components/userContext';


function App() {
  return (
    <div className='App'>
      {/* <Counter render={(count, incrementCounter) => (
        <ClickCounterTwo count={count} incrementCounter={incrementCounter}/>
      )}/>
      <Counter render={(count, incrementCounter) => (
        <HoverCounterTwo count={count} incrementCounter={incrementCounter}/>
      )}/> */}
      {/* <UserProvider value='Sridhar'>
        <ComponentC/>
      </UserProvider> */}
      <ComponentC/>
    </div>

  );
}

export default App;
