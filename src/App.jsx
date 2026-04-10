import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home_Page from './Pages/Home_Page';
import { AllRoutes } from './Routes/AllRoutes';
import { AuthContext } from './Context/AuthProvider';

function App() {
  return (
    <BrowserRouter>
    <AuthContext>
      <Navbar />
      <AllRoutes />
      <Footer />
      </AuthContext>
    </BrowserRouter>
  );
}

export { App };
