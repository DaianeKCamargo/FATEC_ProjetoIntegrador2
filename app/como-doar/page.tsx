'use client'
import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Titulo from '@/components/titulo/Titulo';
import { style } from 'framer-motion/m';


export default function ComoDoar() {
  return (
    <section>
      <Titulo src="/img_titulo_amarelo.png" title="Como doar" label=" Está com duvída de como você pode nos ajudar?"/>

      <div>
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
            <li>- Cartela de remédio</li>
          </ul>
        </header>

        <div>
          <h2>Que tipo de tampinhas aceitamos:</h2>
          <h5>Alimentos</h5>
          <p>Tampas de refrigerantes, sucos, margarina, maionese, molhos, 
          requeijão, óleo de cozinha etc.</p>

          <h5>Produtos de limpeza</h5>
          <p>Tampas de amaciante, cloro, cândida, desinfetante, desengordurante, etc.</p>

          <h5>Produtos de Higiene</h5>
          <p>Tampas de shampoo, condicionador, cremes,
          pasta de dentes, sabonete líquido, hidratantes, etc.</p>
        </div>

        <div>
          <h2>O que a Tampets FAZ e NÃO FAZ</h2>
            <h4>FAZ</h4>
              <ul>
                <li><i className="bi bi-check2-circle">Divulga feirinhas de adoção</i></li>
                <li><i className="bi bi-check2-circle">Divulga pedidos de tutores cujo animais fugiram </i></li>
                <li><i className="bi bi-check2-circle">Divulga animais que foram encontrados e precisam voltar para casa</i></li>
                <li><i className="bi bi-check2-circle">Divulga campanhas de castração realizadas pelas prefeituras da região</i></li>
                <li><i className="bi bi-check2-circle"
                >Divulga eventos beneficientes de arrecadação de dinheiro para ajudar abrigos, protetores ou ONGs
                </i></li>
              </ul>
            <h4>NÃO FAZ</h4>
              <ul> 
                <li><i className="bi bi-x-circle">Não indica clínicas veterinárias</i></li>
                <li><i className="bi bi-x-circle">Não tem abrigo</i></li>
                <li><i className="bi bi-x-circle">Não faz rifas</i></li>
                <li><i className="bi bi-x-circle">Não divulga pedidos de pix ou transfência de valores</i></li>
                <li><i className="bi bi-x-circle">Não paga castrações de animais de raça ou de filhotes</i></li>
                <li><i className="bi bi-x-circle">Não indica abrigos, lar temporário ou ONGs que resgatam animais</i></li>
                <li><i className="bi bi-x-circle">Não troca tampinhas por ração</i></li>
                <li><i className="bi bi-x-circle">Não troca tampinhas por castrações</i></li>
                <li><i className="bi bi-x-circle">Não paga tratamentos veterinários</i></li>
                <li><i className="bi bi-x-circle">Não divulga nas redes sociais animais para adoção</i></li>
              </ul> 
        </div>
      </div>
    </section>
  );
}