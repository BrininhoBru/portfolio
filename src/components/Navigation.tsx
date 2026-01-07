'use client';

import { useState, useEffect, useCallback } from 'react';

const navItems = [
  { id: 'about', label: 'Sobre mim' },
  { id: 'journey', label: 'Jornada' },
  { id: 'projects', label: 'Projetos' },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Detecta a seção ativa baseado no scroll
  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 50);

    // Encontra a seção ativa
    const sections = navItems.map(item => document.getElementById(item.id));
    const scrollPosition = window.scrollY + 100; // offset para considerar a navbar

    for (let i = sections.length - 1; i >= 0; i--) {
      const section = sections[i];
      if (section && section.offsetTop <= scrollPosition) {
        setActiveSection(navItems[i].id);
        return;
      }
    }
    setActiveSection('');
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Executa uma vez no mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  // Fecha o menu mobile quando redimensiona para desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const navHeight = 80; // altura aproximada da navbar
      const elementPosition = element.offsetTop;
      const offsetPosition = elementPosition - navHeight;

      const start = window.scrollY;
      const distance = offsetPosition - start;
      const duration = 1000;
      let startTime: number | null = null;

      const easeInOutCubic = (t: number) => {
        return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
      };

      const animateScroll = (currentTime: number) => {
        if (startTime === null) startTime = currentTime;
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const ease = easeInOutCubic(progress);
        
        window.scrollTo(0, start + distance * ease);
        
        if (progress < 1) {
          requestAnimationFrame(animateScroll);
        }
      };

      requestAnimationFrame(animateScroll);
    }
    setIsMobileMenuOpen(false);
  };

  const scrollToTop = () => {
    const start = window.scrollY;
    const duration = 1000;
    let startTime: number | null = null;

    const easeInOutCubic = (t: number) => {
      return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    };

    const animateScroll = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const ease = easeInOutCubic(progress);
      
      window.scrollTo(0, start * (1 - ease));
      
      if (progress < 1) {
        requestAnimationFrame(animateScroll);
      }
    };

    requestAnimationFrame(animateScroll);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-700 ease-in-out ${isScrolled
          ? 'bg-forest-900/95 backdrop-blur-md shadow-xl shadow-black/20'
          : 'bg-transparent'
        }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo com animação */}
          <button
            onClick={scrollToTop}
            className="text-2xl font-bold text-mint-400 hover:text-mint-300 transition-all duration-500 ease-in-out hover:scale-105 active:scale-95"
          >
            {'<Dev />'}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-500 ease-in-out
                  ${activeSection === item.id
                    ? 'text-mint-400'
                    : 'text-sage-200 hover:text-mint-300'
                  }
                  hover:bg-white/5 active:scale-95
                `}
              >
                {item.label}
                {/* Indicador de seção ativa */}
                <span
                  className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-mint-400 rounded-full transition-all duration-500 ease-in-out
                    ${activeSection === item.id ? 'w-6 opacity-100' : 'w-0 opacity-0'}
                  `}
                />
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden relative w-10 h-10 flex flex-col items-center justify-center gap-1.5 rounded-lg hover:bg-white/5 transition-colors duration-500"
            aria-label="Toggle menu"
          >
            <span
              className={`w-6 h-0.5 bg-sage-200 rounded-full transition-all duration-500 ease-in-out origin-center
                ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}
              `}
            />
            <span
              className={`w-6 h-0.5 bg-sage-200 rounded-full transition-all duration-500 ease-in-out
                ${isMobileMenuOpen ? 'opacity-0 scale-0' : 'opacity-100 scale-100'}
              `}
            />
            <span
              className={`w-6 h-0.5 bg-sage-200 rounded-full transition-all duration-500 ease-in-out origin-center
                ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}
              `}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-700 ease-in-out
          ${isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
        `}
      >
        <div className="bg-forest-900/98 backdrop-blur-md border-t border-white/5">
          <div className="container mx-auto px-6 py-4 space-y-2">
            {navItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-500 ease-in-out
                  ${activeSection === item.id
                    ? 'text-mint-400 bg-mint-400/10'
                    : 'text-sage-200 hover:text-mint-300 hover:bg-white/5'
                  }
                `}
                style={{
                  transitionDelay: isMobileMenuOpen ? `${index * 50}ms` : '0ms',
                  transform: isMobileMenuOpen ? 'translateX(0)' : 'translateX(-20px)',
                  opacity: isMobileMenuOpen ? 1 : 0,
                }}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
