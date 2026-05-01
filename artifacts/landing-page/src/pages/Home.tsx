import React, { useState, useEffect } from 'react';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { Products } from '@/components/Products';
import { About } from '@/components/About';
import { Testimonials } from '@/components/Testimonials';
import { Footer } from '@/components/Footer';

export default function Home() {
  const [showToast, setShowToast] = useState(false);

  const handleAddToCart = () => {
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  };

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Products onAddToCart={handleAddToCart} />
        <About />
        <Testimonials />
      </main>
      <Footer />

      {/* Toast Notification */}
      <div className={`toast ${showToast ? 'show' : ''}`}>
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
        </svg>
        Item adicionado ao carrinho!
      </div>
    </>
  );
}
