import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Box } from '@mui/material';

import Navbar from './components/navbar';
import Footer from './components/footer';
import Home from './pages/home';
import Contact from './pages/Contact';
import MecaniqueDynamique from './pages/services/MecaniqueDynamique';
import MecaniqueStatique from './pages/services/MecaniqueStatique';
import TelcoCyber from './pages/services/TelcoCyber';
import About from './pages/About';
import Formulaire from './pages/Formulaire';

function App() {
  const location = useLocation();

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />
      <Box component="main" sx={{ flexGrow: 1 }}>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/A Propos" element={<About/>}/>
            <Route path="/Formulaire" element={<Formulaire/>}/>
            <Route path="/services/mecanique-dynamique" element={<MecaniqueDynamique />} />
            <Route path="/services/mecanique-statique" element={<MecaniqueStatique />} />
            <Route path="/services/telco-cybersecurite" element={<TelcoCyber />} />
          </Routes>
        </AnimatePresence>
      </Box>
      <Footer />
    </Box>
  );
}

export default App;