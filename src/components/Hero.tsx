import React, { useEffect, useState } from 'react';

export const Hero = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY * 0.4);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToProducts = () => {
    document.getElementById('produtos')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-no-repeat bg-center bg-cover opacity-30 blur-sm" 
          style={{ backgroundImage: 'url(/hero.png)' }} 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0f0f0f]" />
      </div>

      <div className="container-custom relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12 w-full">
        <div className="flex-1 text-center lg:text-left">
          <div className="reveal active">
            <span style={{ color: 'var(--color-accent)' }} className="font-heading text-xl md:text-2xl tracking-widest font-semibold mb-4 block">
              100% ARTESANAL
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-none mb-6">
              A ARTE DO<br/>
              <span style={{ color: 'var(--color-accent)' }}>HAMBÚRGUER</span><br/>
              PERFEITO
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-xl mx-auto lg:mx-0" style={{ color: 'var(--color-text-secondary)' }}>
              Carne premium, pão brioche amanteigado e ingredientes frescos. 
              Sinta a diferença a cada mordida.
            </p>
            <button onClick={scrollToProducts} className="btn-primary">
              Peça Agora
            </button>
          </div>
        </div>

        <div className="flex-1 relative w-full max-w-lg lg:max-w-none aspect-square flex items-center justify-center">
          <div className="absolute w-3/4 h-3/4 bg-[#1a1a1a] rounded-full blur-[100px] opacity-60"></div>
          <img 
            src="/hero.png" 
            alt="Hero Burger" 
            className="relative z-10 w-[120%] max-w-[600px] object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
            style={{ transform: `translateY(${offset}px)` }}
          />
        </div>
      </div>
    </section>
  );
};
