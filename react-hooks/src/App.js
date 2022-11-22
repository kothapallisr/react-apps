import React, {useReducer} from 'react'
import './App.css';
import ClassCounter from './components/ClassCounter';
import HookCounter from './components/HookCounter';
import HookCounterTwo from './components/HookCounterTwo';
import HookCounterThree from './components/HookCounterThree';
import HookCounterFour from './components/HookCounterFour';
import HookCounterFive from './components/HookCounterFive';
import HookMouse from './components/HookMouse';
import MouseContainer from './components/MouseContainer';
import IntervalHookCounter from './components/IntervalHookCounter';
import DataFetching from './components/DataFetching';
import ComponentC from './components/ComponentC';
import CounterOne from './components/CounterOne';
import CounterThree from './components/CounterThree';
import ComponentA from './components/ComponentA';
import ComponentB from './components/ComponentB';
import DataFetchingOne from './components/DataFetchingOne';
import DataFetchingTwo from './components/DataFetchingTwo';
import Counter from './components/Counter';
import FocusInput from './components/FocusInput';

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();
export const CountContext = React.createContext();

const initialState = 0
const reducer = (state, action) => {
  switch(action) {
    case 'increment':
      return state + 1
    case 'decrement':
      return state - 1
    case 'reset':
      return initialState
    default:
      return state  
  }
}

function App() {
  const [count, dispatch] = useReducer(reducer, initialState)
  return (
    <CountContext.Provider value={{countState: count, countDispatch: dispatch}}>
    <div className="App">
      {/* <ClassCounter/>
      <HookCounter/>
      <HookCounterTwo/>
      <HookCounterThree/>
      <HookCounterFour/>
      <HookCounterFive/>
      <HookMouse/>
      <MouseContainer/>
      <IntervalHookCounter/>
      <DataFetching/> */}
      {/* <UserContext.Provider value={'Sridhar'}>
        <ChannelContext.Provider value={'Frontend'}>
          <ComponentC/>
        </ChannelContext.Provider>
      </UserContext.Provider> */}
      {/* <CounterOne/> */}
      {/* <CounterThree/> */}
      {/* <ComponentA/>
      <ComponentB/>
      <ComponentC/> */}
      {/* <DataFetchingOne/> */}
      {/* <DataFetchingTwo/> */}
      {/* <Counter/> */}
      <FocusInput/>
    </div>
    </CountContext.Provider>
  );
}

export default App;
