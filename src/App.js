import logo from './logo.svg';
import './App.css';
import Navbar from './elements/navbar';
import { Routes, Route } from 'react-router-dom'
import Home from './pages/home.js'
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
