// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import GalleryPage from './pages/Gallery/GalleryPage';
import TestStrapi from './components/TestStrapi';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery/:category?" element={<GalleryPage />} />
      </Routes>
      <TestStrapi />
    </Router>
  );
}

export default App;