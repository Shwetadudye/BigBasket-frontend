import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home_Page from './Pages/Home_Page';

function App() {
  return (
    <Router>
      <Navbar />
      <Home_Page/>
      <Footer />
    </Router>
  );
}

export default App;