import './App.css';
import Table from './components/Table';
import returns from "./sp500-data.json";

function App() {
  return (
    <div className="App">
      <Table returns={returns}/>
    </div>
  );
}

export default App;