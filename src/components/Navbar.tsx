import React, { useState, useEffect } from 'react';

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Detect active section
      const sections = ['home', 'produtos', 'sobre', 'depoimentos'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({
        top: el.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  const navLinks = [
    { id: 'home', label: 'Início' },
    { id: 'produtos', label: 'Menu' },
    { id: 'sobre', label: 'Sobre Nós' },
    { id: 'depoimentos', label: 'Avaliações' }
  ];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container-custom flex items-center justify-between">
        <div 
          className="font-heading text-3xl font-bold tracking-wider cursor-pointer" 
          style={{ color: 'var(--color-text-primary)' }}
          onClick={() => scrollTo('home')}
        >
          BURGER<span style={{ color: 'var(--color-accent)' }}>HOUSE</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8">
          {navLinks.map(link => (
            <a
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className={`nav-link ${activeSection === link.id ? 'active' : ''}`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden flex flex-col gap-1.5 z-50 relative w-8 h-6"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className={`block w-full h-1 rounded bg-white transition-all ${menuOpen ? 'rotate-45 translate-y-2.5' : ''}`} style={{ backgroundColor: menuOpen ? 'var(--color-accent)' : 'white' }}></span>
          <span className={`block w-full h-1 rounded bg-white transition-all ${menuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-full h-1 rounded bg-white transition-all ${menuOpen ? '-rotate-45 -translate-y-2.5' : ''}`} style={{ backgroundColor: menuOpen ? 'var(--color-accent)' : 'white' }}></span>
        </button>

        {/* Mobile Overlay */}
        <div className={`fixed inset-0 bg-[#0f0f0f] z-40 flex flex-col items-center justify-center gap-8 transition-transform duration-300 ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          {navLinks.map(link => (
            <a
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className={`nav-link text-3xl ${activeSection === link.id ? 'active' : ''}`}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};
