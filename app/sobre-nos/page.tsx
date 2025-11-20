'use client';

import Titulo from '@/components/titulo/Titulo';
import style from '@/styles/sobre-nos.module.css';
import Image from 'next/image';
import { PawPrint } from "lucide-react";
import { Bone } from "lucide-react";
import { Heart } from "lucide-react";
import { Smile } from "lucide-react";
import { Recycle } from "lucide-react";



export default function SobreNos() {
    return (
        <section>
            <div>
                 <Titulo src="/img_titulo_verde.png" title="Sobre Nós" label="Não conhece nosso projeto ? Você está no lugar certo!"/>
            </div>
            <div className={style["sobre"]}>
                <h2>Quem Somos <PawPrint size={32} strokeWidth={1.5} /></h2>
                    <p>
                        Diante da realidade dos <strong>animais em situação de abandono</strong> que percorrem ruas, praças e rodovias, além dos <strong>maus-tratos</strong> que muitos sofrem, o <strong>Projeto TamPets</strong> acredita que é possível fazer a diferença por meio da <strong>reciclagem de tampinhas PET</strong>. Nossa missão é contribuir para o <strong>controle da superpopulação animal</strong> realizando castrações e esterilizações.
                    </p>

                    <p>
                        Embora existam iniciativas voltadas à causa animal em Sorocaba e região, o fator financeiro ainda impede que muitos tutores, abrigos e protetores independentes tenham acesso à castração.
                    </p>

                    <p>
                        Com base nisso, o <strong>Projeto TamPets</strong> tem como objetivo <strong>coletar e vender tampinhas plásticas</strong>, criando um fundo destinado exclusivamente à realização dessas cirurgias para animais sob os cuidados de abrigos, protetores independentes e tutores em situação de vulnerabilidade.
                    </p>

                    <p>
                        A castração evita abandono, maus-tratos, fome, ninhadas indesejadas e diversas doenças.
                    </p>

                    <Image
                        src={"/TamPets-bannerzin.png"}
                        alt="TamPets Banner"
                        width={500}
                        height={300}
                        className={style["Image-banner"]}
                    />

                <h2>O Que Fazemos</h2>
                    <p><strong>Uma iniciativa independente em prol dos animais</strong></p>

                    <p>
                        A coleta das tampinhas acontece por meio de parcerias com pessoas físicas e jurídicas que, ao conhecerem o propósito do projeto, contribuem voluntariamente.
                    </p>

                    <p>
                        O peso total arrecadado mensalmente é divulgado nas redes sociais do projeto.
                    </p>

                    <p>
                        Todos os recursos obtidos com a venda das tampinhas são destinados <strong>direta e exclusivamente</strong> aos responsáveis pelos atendimentos — ONGs, abrigos e clínicas veterinárias parceiras.
                    </p>

                    <p>
                        O sucesso desse trabalho depende do engajamento da população de Sorocaba e região, que pode colaborar coletando tampinhas e entregando-as nos pontos de coleta parceiros.
                    </p>

                <h2>Importante Saber</h2>
                    <ul>
                        <li>O <strong>Projeto TamPets não é uma ONG</strong>;</li>
                        <li><strong>Não possui vínculos políticos</strong>;</li>
                        <li><strong>Não possui abrigo</strong>;</li>
                        <li><strong>Não realiza resgates</strong>;</li>
                        <li><strong>Não promove feiras de adoção ou mutirões de castração</strong> — apenas apoia através da divulgação;</li>
                        <li><strong>Não aceita doações em dinheiro</strong>, exceto quando realizadas <strong>diretamente à clínica parceira</strong>.</li>
                    </ul>

                    <p><strong>Eliada Marcos (Lia)</strong><br/>
                        Idealizadora do Projeto TamPets</p> 
                    </div>
        </section>
    );
}