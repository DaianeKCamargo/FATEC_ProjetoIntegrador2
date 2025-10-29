'use client'
import {
  CheckCircle2,
  CircleXIcon,
} from "lucide-react";
import "../../style/comoDoar.css";
import Card from "@/Components/Card";


export default function comoDoar() {
    return (
        <>
        <section className="doar-container">
            <div className="hero">
            <h1>Como contribuir com o projeto</h1>
            </div>

            <div className="cards">
                <header>
               <h2>Como faço para doar?</h2>
               </header> 
               <p>
                Procure o ponto de coleta mais próximo de você e leve suas tampinhas.
               </p>
               <p>
                Onde eu procuro um ponto de coleta?
                Procure nossa aba de ponto de coleta e procure por um ponto próximo a você.
                </p>
                <p>
                O que posso doar?
                Logo abaixo temos algumas informações dos tipos de tampinhas que aceitamos.
                </p>

                <header>
                Atenção! O que eu NÃO posso doar?
                </header>
                <ul id="Naodoar">
                    <li>• Objetos não recicláveis</li>
                    <li>• lacres</li>
                    <li>• Cartela e embalagem de remédios</li>
                    <li>• Qualquer outro tipo de plastico</li>
                    <li>• Garrafa pet</li>
                    <li>• Pregos e vidros</li>
                </ul>
            </div>

            <div>
                <article className="cards">
                <header>
                <h3>O que fazemos</h3>
                </header>
                <ul>
                    <li><CheckCircle2 className="icon-small" />Divulgamos feirinhas de adoção</li>
                    <li><CheckCircle2 className="icon-small" />Divulgamos pedidos de tutores cujo animais fugiram</li>
                    <li><CheckCircle2 className="icon-small" />Divulgamos animais encontrados que precisam voltar para casa</li>
                    <li><CheckCircle2 className="icon-small" />Divulgamos campanhas de castração das prefeituras da região</li>
                    <li><CheckCircle2 className="icon-small" />Divulagamos eventos beneficientes para ajudar abrigos, protetores ou ONGs</li>
                </ul>
                </article>

                <article className="cards">
                <header>
                <h3>O que não fazemos</h3>
                </header>
                <ul>
                    <li><CircleXIcon className="icon-small" />Não indicamos clínicas veterinárias</li>
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

                <div className="cards">
                <article>
                    <header>
                        <h3>Que tampinhas aceitamos</h3>
                    </header>
                    <div style={{marginBottom:"10px", marginTop:"10px",
                 display: "flex", gap: "20px", flexWrap: "wrap", justifyContent: "center"    }}>

                    <Card 
                    imagem={"/Tampinhasplasticas.jpg"} 
                    titulo={"Tampas de alimentos"}
                    descricao="Tampas de refrigerantes, sucos, margarina, 
                    maionese, molhos, requeijão, óleo de cozinha, etc."
                    className="cards"/>

                    <Card 
                    imagem={"/ProdLimpeza.jpeg"} 
                    titulo={"Produtos de limpeza"}
                    descricao="Tampas de amaciantes, cloro, cândida, desinfetante, desengordurante, etc."
                    className="cards"/>

                    <Card 
                    imagem={"/ProdHigiene.jpg"} 
                    titulo={"Produtos de higiene"}
                    descricao="Tampas de shampoo, condicionador, cremes, 
                    pasta de dente, sabonete líquido, hidratante, etc."
                    className="cards"/>

                    </div>
                </article>
                </div>

           
            </div>
            </section>
        </>
    )
}

