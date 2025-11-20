'use client'
import NewsCard from '@/components/NewsCard';
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

        <section>
          <div>
            <h2>O que aceitamos?</h2>
            <p>Aceitamos tampinhas de plástico de diversos tipos de embalagens, como:</p>
          </div>
            <div>
              <NewsCard
                imagem="/Tampinhasplasticas.jpg"
                titulo="Tampinhas de alimentos"
                text="Tampas de refrigerantes, sucos, margarina, maionese, molhos, 
                  requeijão, óleo de cozinha etc.">     
              </NewsCard>
              <NewsCard
                imagem="/ProdHigiene.jpg"
                titulo="Tampinhas de produtos de higiene"
                text="Tampas de shampoo, condicionador, cremes,
                pasta de dentes, sabonete líquido, hidratantes, etc.">     
              </NewsCard>
              <NewsCard
                imagem="/ProdLimpeza.jpeg"
                titulo="Tampinhas de produtos de limpeza"
                text="Tampas de amaciante, cloro, cândida, desinfetante, desengordurante, etc.">     
              </NewsCard>
            </div>
        </section>

        <section>
          <h1>O que a Tampets FAZ e NÃO FAZ</h1>
            <div>
              <h2><span className='text-green-600'>Faz</span></h2>
              <i className="bi bi-check2">Divulga feirinhas de adoção</i>
              <i className="bi bi-check2">Divulga pedidos de tutores cujo animais fugiram</i>
              <i className="bi bi-check2">Divulga animais que foram encontrados e precisam voltar para casa</i>
              <i className="bi bi-check2">Divulga campanhas de castração realizadas pelas prefeituras da região</i>
              <i className="bi bi-check2">Divulga eventos beneficientes de arrecadações 
                de dinheiro para ajudar abrigos, protetores ou ONGs</i>
            </div>
            <div>
              <h2><span className='text-red-600'>Não faz</span></h2>
              <i className="bi bi-x-lg">Não indica clínicas veterinárias</i>
              <i className="bi bi-x-lg">Não tem abrigo</i>
              <i className="bi bi-x-lg">Não faz rifa</i>
              <i className="bi bi-x-lg">Não divulga pedidos de pix ou transferência de valores</i>
              <i className="bi bi-x-lg">Não indica abrigos, lar temporário ou ONGs que resgatam animais</i>
              <i className="bi bi-x-lg">Não paga a castração de filhotes ou animais de raça</i>
              <i className="bi bi-x-lg">Não troca tampinhas por ração</i>
              <i className="bi bi-x-lg">Não troca tampinhas por castração</i>
              <i className="bi bi-x-lg">Não paga tratamentos veterinários</i>
              <i className="bi bi-x-lg">Não divulga animais para adoção</i>
            </div>
        </section>
      </div>
    </div>
  );
}