import React from 'react'
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

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();
function App() {
  return (
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
      <CounterOne/>
    </div>
  );
}

export default App;
