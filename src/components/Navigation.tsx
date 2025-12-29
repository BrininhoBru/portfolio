'use client';

import { useState, useEffect } from 'react';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-forest-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-mint-400">
            {'<Dev />'}
          </div>
          <div className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection('about')}
              className="text-sage-200 hover:text-mint-400 transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('journey')}
              className="text-sage-200 hover:text-mint-400 transition-colors"
            >
              Journey
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="text-sage-200 hover:text-mint-400 transition-colors"
            >
              Projects
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
