import { useEffect } from 'react';
import { HashRouter as Router, Route, Routes, useLocation, Navigate } from 'react-router-dom';

import  Navbar  from "./components/Navbar";
import  Home  from "./components/Sections/Home";
import  Diet  from "./components/Sections/Diet";
import  Play  from "./components/Sections/Play";
import  Bath  from "./components/Sections/Bath";

import './App.css';

const validRoutes = ['/Bunnies-World/', '/home', '/diet', '/play', '/bath'];

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to the top of the page when the route changes
    window.scrollTo(0, 0);
  }, [pathname]);

  // Add logic to redirect to home page if the path is not recognized
  if (!validRoutes.includes(pathname)) {
    return <Navigate to="/Bunnies-World/" replace />;
  }

  return null; // This component doesn't render anything
};

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/Bunnies-World" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/diet" element={<Diet />} />
          <Route path="/play" element={<Play />} />
          <Route path="/bath" element={<Bath />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
