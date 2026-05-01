import React, { useState } from 'react';
import { Reveal } from './Reveal';

interface ProductsProps {
  onAddToCart: () => void;
}

export const Products: React.FC<ProductsProps> = ({ onAddToCart }) => {
  const products = [
    {
      id: 1,
      name: "Classic Smash",
      desc: "Duplo smash 90g, queijo cheddar derretido, cebola e molho da casa.",
      price: "29,90",
      image: "/product-1.png"
    },
    {
      id: 2,
      name: "Spicy Jalapeño",
      desc: "Hambúrguer 160g, pepper jack, jalapeños crocantes e molho picante.",
      price: "34,90",
      image: "/product-2.png"
    },
    {
      id: 3,
      name: "BBQ Bacon",
      desc: "Hambúrguer 160g, bacon rústico, onion rings e muito molho BBQ.",
      price: "38,90",
      image: "/product-3.png"
    }
  ];

  return (
    <section id="produtos" className="section-padding">
      <div className="container-custom">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-4">Nosso Menu</h2>
            <div className="w-24 h-1 mx-auto bg-[var(--color-accent)] mb-4"></div>
            <p className="text-xl max-w-2xl mx-auto" style={{ color: 'var(--color-text-secondary)' }}>
              Escolha seu favorito e prepare-se para uma experiência inesquecível.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-20">
          {products.map((product, index) => (
            <Reveal key={product.id} delay={index === 0 ? '0' : index === 1 ? '100' : '200'}>
              <div className="card flex flex-col h-full bg-[#1a1a1a] p-8 pt-24 relative mt-16">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="absolute -top-24 left-1/2 -translate-x-1/2 w-48 h-48 object-contain drop-shadow-2xl transition-transform duration-500 hover:scale-110"
                />
                
                <div className="flex-1 flex flex-col text-center mt-6">
                  <h3 className="text-3xl font-bold mb-3">{product.name}</h3>
                  <p className="mb-6 flex-1" style={{ color: 'var(--color-text-secondary)' }}>
                    {product.desc}
                  </p>
                  
                  <div className="flex items-center justify-between border-t border-[#333] pt-6 mt-auto">
                    <span className="font-heading text-3xl font-bold" style={{ color: 'var(--color-accent)' }}>
                      R$ {product.price}
                    </span>
                    <button 
                      onClick={onAddToCart}
                      className="bg-white text-black font-heading font-bold uppercase py-2 px-6 rounded hover:bg-[var(--color-accent)] transition-colors"
                    >
                      Adicionar
                    </button>
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
