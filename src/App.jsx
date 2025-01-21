import Earth from './pages/earth.jsx';
import Galaxy from './pages/galaxy.jsx';
import SolarSystem from './pages/solarsystem.jsx';
import Moon from './pages/moon.jsx';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/navbar.jsx'; // Assuming Navbar is in the same folder
import Footer from './components/footer.jsx'; // Assuming Footer is in the same folder

function App() {
  return (
      <Router>
        <div className="content">
          <Routes>
            <Route path="/galaxy" element={<Galaxy />} />
            <Route path="/earth" element={<Earth />} />
            <Route path="/solarsystem" element={<SolarSystem />} />
            <Route path="/moon" element={<Moon />} />
          </Routes>
        </div>
      </Router>
  );
}

export default App;
