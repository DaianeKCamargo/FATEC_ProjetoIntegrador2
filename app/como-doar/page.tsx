'use client'
import React from 'react';
import styles from '@/styles/como-doar.module.css';


export default function ComoDoarPage() {
  return (
    <section>
      <div className={styles.titulo}>
        <img className={styles.imgt} src="/img_titulo_amarelo.png" alt="Fundo Título" />

        <h1 className={styles.escritat}> Como doar </h1>

        <p className={styles.escritap}> Está com duvída de como você pode nos ajudar ? </p>
      </div>

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