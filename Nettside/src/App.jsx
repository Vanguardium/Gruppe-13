import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import Membership from './Pages/Membership';
import WeOffer from './Pages/WeOffer';
import About from './Pages/About';
import Booking from './Pages/Booking';

// Går til toppen av siden når den router
const ScrollToTop = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

// Router mellom sidene
function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path='/' exact Component={Home} />
          <Route path='/Membership' Component={Membership} />
          <Route path='/Booking' Component={Booking} />
          <Route path='/WeOffer' Component={WeOffer} />
          <Route path='/About' Component={About} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
