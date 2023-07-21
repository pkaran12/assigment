import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from './pages/Contact';
import Home from './pages/Home';
import Navbar from './pages/Navbar';
import Pets from './pages/Pets';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
            <Route path="/pets" element={<Pets />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
