import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import './styles/global.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#090C10] text-[#EFEBEB]">
        <Home />

      </div>
    </BrowserRouter>
  );
}

export default App;