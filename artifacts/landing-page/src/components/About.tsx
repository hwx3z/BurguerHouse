import React from 'react';
import { Reveal } from './Reveal';

export const About = () => {
  return (
    <section id="sobre" className="section-padding bg-[#141414]">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          <div className="flex-1 w-full">
            <Reveal className="relative">
              <div className="absolute inset-0 bg-[var(--color-accent)] transform translate-x-4 translate-y-4 rounded-lg -z-10"></div>
              <img 
                src="/about.png" 
                alt="Chef preparing ingredients" 
                className="w-full h-auto object-cover rounded-lg shadow-2xl relative z-10"
              />
            </Reveal>
          </div>

          <div className="flex-1">
            <Reveal delay="100">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                CRAFTED WITH <span style={{ color: 'var(--color-accent)' }}>PASSION</span>
              </h2>
              
              <div className="space-y-6 text-lg" style={{ color: 'var(--color-text-secondary)' }}>
                <p>
                  Na BurgerHouse, não fazemos apenas hambúrgueres. Nós criamos experiências. Nossa jornada começou com uma obsessão: encontrar o blend perfeito de carne, a temperatura ideal da chapa e os ingredientes mais frescos possíveis.
                </p>
                <p>
                  Todos os dias, moemos nossa carne fresca. Nossos pães são assados artesanalmente. Nossos molhos são receitas secretas que demoraram meses para atingir a perfeição.
                </p>
                <p className="font-heading text-white text-xl font-medium border-l-4 pl-4" style={{ borderColor: 'var(--color-accent)' }}>
                  "Não existem atalhos para um hambúrguer extraordinário. Apenas fogo, suor e respeito aos ingredientes."
                </p>
              </div>

              <div className="grid grid-cols-2 gap-8 mt-10">
                <div>
                  <div className="text-4xl font-bold font-heading mb-2" style={{ color: 'var(--color-accent)' }}>100%</div>
                  <div className="text-sm font-bold uppercase tracking-wider text-white">Carne Fresca Diária</div>
                </div>
                <div>
                  <div className="text-4xl font-bold font-heading mb-2" style={{ color: 'var(--color-accent)' }}>0</div>
                  <div className="text-sm font-bold uppercase tracking-wider text-white">Ingredientes Congelados</div>
                </div>
              </div>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
};
