import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Navbar from './Components/Navbar';
import Questions from './Pages/Questions';
import Truffle from './Pages/Truffle';

function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/questions" element={<Questions />} />
        <Route path="/truffle-slots" element={<Truffle />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;