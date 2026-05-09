import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Servicos from './pages/Servicos';
import Previdencia from './pages/Previdencia';
import Documentos from './pages/Documentos';

export default function App() {
  return (
    <Router>
      <div className="font-sans text-[#20221F] bg-white selection:bg-[#143A2D] selection:text-white flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/servicos" element={<Servicos />} />
            <Route path="/previdencia" element={<Previdencia />} />
            <Route path="/documentos" element={<Documentos />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
