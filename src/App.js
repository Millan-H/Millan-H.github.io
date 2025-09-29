import logo from './logo.svg';
import './App.css';
import Navbar from './elements/navbar';
import { Routes, Route } from 'react-router-dom'
import Home from './pages/home.js'
import Blog from './pages/blog.js'
import Contact from './pages/contact.js'
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
