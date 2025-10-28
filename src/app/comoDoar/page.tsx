'use client'
import {
  CheckCircle2,
  CircleXIcon,
} from "lucide-react";
import "../style/comoDoar.css";


export default function comoDoar() {
    return (
        <>
        <section>
        <h1>Como contribuir com o projeto</h1>
            <div>
               <h2>Como faço para doar?</h2> 
            </div>

            <div>
                <article className="card">
                <header>
                <h3>O que fazemos:</h3>
                </header>
                <ul>
                    <li><CheckCircle2 className="icon-small" />Divulgamos feirinhas de adoção</li>
                    <li><CheckCircle2 className="icon-small" />Divulgamos pedidos de tutores cujo animais fugiram</li>
                    <li><CheckCircle2 className="icon-small" />Divulgamos animais encontrados que precisam voltar para casa</li>
                    <li><CheckCircle2 className="icon-small" />Divulgamos campanhas de castração das prefeituras da região</li>
                    <li><CheckCircle2 className="icon-small" />Divulagamos eventos beneficientes para ajudar abrigos, protetores ou ONGs</li>
                </ul>
                </article>

                <article className="card">
                <header>
                <h3>O que não fazemos</h3>
                </header>
                <ul>
                    <li><CircleXIcon className="icon-small" />Não indicamos clinicas veterinarias</li>
                    <li><CircleXIcon className="icon-small" />Não temos abrigo</li>
                    <li><CircleXIcon className="icon-small" />Não fazemos rifas</li>
                    <li><CircleXIcon className="icon-small" />Não divulgamos pedidos de pix ou transferência de valores</li>
                    <li><CircleXIcon className="icon-small" />Não indicamos abrigos, Lar temporário ou ONGs que resgatam animais</li>
                    <li><CircleXIcon className="icon-small" />Não pagamos castrações de animais de raça ou filhotes</li>
                    <li><CircleXIcon className="icon-small" />Não trocamos tampinhas por ração</li>
                    <li><CircleXIcon className="icon-small" />Não trocamos tampinhas por castrações</li>
                    <li><CircleXIcon className="icon-small" />Não pagamos tratamentos veterinarios</li>
                    <li><CircleXIcon className="icon-small" />Não divulgamos nas redes sociais animais para adoção</li>
                </ul>
                </article>

           
            </div>
            </section>
        </>
    )
}

