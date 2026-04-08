import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home_Page from './Pages/Home_Page';
import { AllRoutes } from './Routes/AllRoutes';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <AllRoutes />
      <Footer />
    </BrowserRouter>
  );
}

export default App;