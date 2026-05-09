import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    
    // Check initial scroll position
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Always show solid background on non-home pages
  const isHomePage = location.pathname === '/';
  const headerScrolled = isScrolled || !isHomePage;

  const navLinks = [
    { name: 'Início', path: '/' },
    { name: 'Sobre Nós', path: '/sobre' },
    { name: 'Serviços', path: '/servicos' },
    { name: 'Previdência', path: '/previdencia' },
    { name: 'Documentos', path: '/documentos' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        headerScrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img 
            src="/logo.png.png" 
            alt="Logo RuralMig"
            className="h-24 md:h-32 w-auto object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`text-sm font-medium transition-colors ${
                headerScrolled 
                  ? location.pathname === item.path ? 'text-[#E7AB15] font-bold' : 'text-[#20221F]/80 hover:text-[#E7AB15]' 
                  : location.pathname === item.path ? 'text-[#E7AB15] font-bold' : 'text-white/90 hover:text-[#E7AB15]'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <a
            href="https://wa.me/5535910014005"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#E7AB15] text-[#143A2D] px-5 py-2.5 rounded-full text-sm font-bold hover:bg-[#D49B13] transition-colors shadow-lg shadow-[#E7AB15]/20"
          >
            <Phone size={16} />
            <span>Falar no WhatsApp</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden p-2 transition-colors ${headerScrolled ? 'text-[#20221F]/80 hover:text-[#E7AB15]' : 'text-white hover:text-[#E7AB15]'}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-[#20221F]/5 overflow-hidden"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
              {navLinks.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`text-base font-medium py-2 border-b border-gray-50 transition-colors ${
                    location.pathname === item.path ? 'text-[#E7AB15] font-bold' : 'text-[#20221F]/80 hover:text-[#E7AB15]'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <a
                href="https://wa.me/5535910014005"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-[#E7AB15] text-[#143A2D] px-5 py-3 rounded-lg text-sm font-bold mt-2 hover:bg-[#D49B13] transition-colors shadow-sm"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Phone size={16} />
                <span>Falar no WhatsApp</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
