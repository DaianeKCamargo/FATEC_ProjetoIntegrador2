'use client'
import React from 'react';
import styles from '@/styles/como-doar.module.css';
import Titulo from '@/components/titulo/Titulo';


export default function ComoDoarPage() {
  return (
    <section>
      <Titulo src="/img_titulo_amarelo.png" title="Como doar" label=" Está com duvída de como você pode nos ajudar ?"/>

      <div className="max-w-4xl mx-auto">
        {/* não utiliza esse formato de style no className, conforme conversamos utilizar o module, já estou deixando importado aqui */}
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
    </section>
  );
}