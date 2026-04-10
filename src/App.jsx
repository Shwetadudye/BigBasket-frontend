import { BrowserRouter } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
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

export { App };
