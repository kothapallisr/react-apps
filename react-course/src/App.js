import './App.css';
import Job from './components/Job';

function App() {
  return (
    <div className="App">
        <Job company="BMW" position='Test Driver' salary={69000}/>
        <Job company="Porsche" position='Sr. Test Driver' salary={79000}/>
        <Job company="Porsche" position='Chief Test Driver' salary={89000}/>
    </div>
  );
}

export default App;
