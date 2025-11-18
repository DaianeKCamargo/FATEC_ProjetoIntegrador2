import React from 'react';

export default function ComoDoarPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <header>
            <h1>Como Doar?</h1>
            <p>Procure o ponto de coleta mais próximo de você!</p>
            <p>Não conhece nenhum ponto de coleta? 
            Procure um na nossa aba Ponto de coleta.</p>
            <h1>ATENÇÃO!</h1>
            <p>Para facilitar a triagem das tampinhas, não coloque junto delas:</p>
            <ul>
                <li>- Itens não recicláveis</li>
                <li>- Lacres</li>
                <li>- Pregos, parafusos, etc.</li>
                <li>- Plásticos que não sejam tampinhas</li>
                <li>- Vidros</li>
            </ul>
        </header>
      </div>
    </div>
  );
'use client'

export default function ComoDoar() {

    return(
        <section>
           <div>
                <h1> Como Doar </h1>
            </div>
        </section>
    );
}