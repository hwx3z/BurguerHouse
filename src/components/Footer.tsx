import React from 'react';

export const Footer = () => {
  return (
    <footer className="bg-[#0a0a0a] pt-20 pb-10 border-t border-[var(--color-accent)]">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          <div>
            <div className="font-heading text-4xl font-bold tracking-wider mb-6">
              BURGER<span style={{ color: 'var(--color-accent)' }}>HOUSE</span>
            </div>
            <p className="mb-6" style={{ color: 'var(--color-text-secondary)' }}>
              A arte de fazer o hambúrguer perfeito, todos os dias. Ingredientes frescos, carne premium e muito sabor.
            </p>
          </div>

          <div>
            <h4 className="font-heading text-xl font-bold mb-6 tracking-wide uppercase">Links Úteis</h4>
            <ul className="space-y-4">
              <li><a href="#home" className="nav-link !text-base">Início</a></li>
              <li><a href="#produtos" className="nav-link !text-base">Menu</a></li>
              <li><a href="#sobre" className="nav-link !text-base">Sobre Nós</a></li>
              <li><a href="#depoimentos" className="nav-link !text-base">Avaliações</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-xl font-bold mb-6 tracking-wide uppercase">Funcionamento</h4>
            <ul className="space-y-4" style={{ color: 'var(--color-text-secondary)' }}>
              <li className="flex justify-between border-b border-[#333] pb-2">
                <span>Segunda - Quinta</span>
                <span className="text-white font-bold">18:00 - 23:00</span>
              </li>
              <li className="flex justify-between border-b border-[#333] pb-2">
                <span>Sexta - Sábado</span>
                <span className="text-white font-bold">18:00 - 01:00</span>
              </li>
              <li className="flex justify-between border-b border-[#333] pb-2">
                <span>Domingo</span>
                <span className="text-white font-bold">17:00 - 23:00</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-xl font-bold mb-6 tracking-wide uppercase">Contato</h4>
            <ul className="space-y-4" style={{ color: 'var(--color-text-secondary)' }}>
              <li className="flex items-start gap-3">
                <span className="text-[var(--color-accent)] font-bold">Endereço:</span>
                <span>Av. Paulista, 1000<br/>São Paulo, SP</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[var(--color-accent)] font-bold">Telefone:</span>
                <span>(11) 99999-9999</span>
              </li>
              <li className="flex items-start gap-3 mt-4">
                <a href="#" className="w-10 h-10 rounded-full bg-[#1a1a1a] flex items-center justify-center hover:bg-[var(--color-accent)] hover:text-black transition-colors text-white border border-[#333]">
                  {/* Fake icon for Instagram */}
                  <span className="font-bold">Ig</span>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-[#1a1a1a] flex items-center justify-center hover:bg-[var(--color-accent)] hover:text-black transition-colors text-white border border-[#333]">
                  {/* Fake icon for Facebook */}
                  <span className="font-bold">Fb</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center pt-8 border-t border-[#222]" style={{ color: 'var(--color-text-secondary)' }}>
          <p>&copy; {new Date().getFullYear()} BurgerHouse. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};
