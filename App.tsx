
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import ServicesPage from './pages/ServicesPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import TermsPage from './pages/TermsPage';
import FloatingChat from './components/FloatingChat';

const App: React.FC = () => {
  return (
    <HelmetProvider>
      <Router>
        <div className="min-h-screen flex flex-col selection:bg-cyan-500/30 selection:text-cyan-50 bg-navy-950 text-white">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/terms" element={<TermsPage />} />
            </Routes>
          </main>
          <Footer />
          <FloatingChat />
        </div>
      </Router>
    </HelmetProvider>
  );
};

export default App;
