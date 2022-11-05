import './App.css';
import ClickCounterTwo from './components/ClickCounterTwo';
import Counter from './components/Counter';
import HoverCounterTwo from './components/HoverCounterTwo';


function App() {
  return (
    <div className='App'>
      <Counter render={(count, incrementCounter) => (
        <ClickCounterTwo count={count} incrementCounter={incrementCounter}/>
      )}/>
      <Counter render={(count, incrementCounter) => (
        <HoverCounterTwo count={count} incrementCounter={incrementCounter}/>
      )}/>
    </div>

  );
}

export default App;
