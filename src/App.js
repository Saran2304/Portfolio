import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/portfolio/Home'
import Card from './card/Card';


function App() {
  return (
    <div className="App">
      <Home/>
      {/* <Card></Card> */}
      <Routes>

      </Routes>
    </div>
  );
}

export default App;
