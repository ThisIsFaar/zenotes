import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Home />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
