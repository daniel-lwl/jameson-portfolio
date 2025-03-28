// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import GalleryPage from './pages/Gallery/GalleryPage';
import TestPhoto from './components/TestPhoto';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery/:category?" element={<GalleryPage />} />
      </Routes>
      
    </Router>
  );
}

export default App;