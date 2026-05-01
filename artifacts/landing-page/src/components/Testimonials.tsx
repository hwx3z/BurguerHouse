import React from 'react';
import { Reveal } from './Reveal';

export const Testimonials = () => {
  const reviews = [
    {
      id: 1,
      name: "Carlos Eduardo",
      initials: "CE",
      rating: 5,
      text: "Simplesmente o melhor hambúrguer que já comi. A crosta da carne é surreal e o pão derrete na boca. Sou cliente fiel!"
    },
    {
      id: 2,
      name: "Mariana Silva",
      initials: "MS",
      rating: 5,
      text: "A entrega foi rápida e o lanche chegou perfeito. O Spicy Jalapeño tem o nível exato de pimenta. Sensacional!"
    },
    {
      id: 3,
      name: "Roberto Mendes",
      initials: "RM",
      rating: 5,
      text: "Ambiente top, atendimento nota mil. A qualidade dos ingredientes faz toda a diferença. O bacon deles é maravilhoso."
    }
  ];

  return (
    <section id="depoimentos" className="section-padding bg-[#0f0f0f] border-t border-[#222] border-b border-[#222]">
      <div className="container-custom">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">O Que Dizem Nossos <span style={{ color: 'var(--color-accent)' }}>Clientes</span></h2>
            <div className="w-24 h-1 mx-auto bg-[var(--color-accent)] mb-4"></div>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <Reveal key={review.id} delay={i === 0 ? '0' : i === 1 ? '100' : '200'}>
              <div className="bg-[#1a1a1a] p-8 rounded-xl relative border border-[#333]">
                <div className="absolute -top-6 left-8 text-6xl text-[var(--color-accent)] font-heading">"</div>
                
                <div className="flex gap-1 mb-6 text-[var(--color-accent)]">
                  {Array.from({ length: review.rating }).map((_, j) => (
                    <svg key={j} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                <p className="text-lg italic mb-8" style={{ color: 'var(--color-text-secondary)' }}>
                  {review.text}
                </p>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#333] flex items-center justify-center font-bold text-xl border-2 border-[var(--color-accent)]">
                    {review.initials}
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">{review.name}</h4>
                    <span className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>Cliente Verificado</span>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
