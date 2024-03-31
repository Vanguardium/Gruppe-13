import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import Membership from './Pages/Membership';
import WeOffer from './Pages/WeOffer';
import About from './Pages/About';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact Component={Home} />
          <Route path='/Membership' Component={Membership} />
          <Route path='/WeOffer' Component={WeOffer} />
          <Route path='/About' Component={About} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
