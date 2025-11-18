'use client';

import Card from "@/components/card/Card";
import Link from "next/link";
import styles from "@/styles/galeria.module.css";

export default function GaleriaTampets() {
    return(
        <section>
           <div>
                <h1>Galeria TamPets</h1>
                <h2>Confira aqui os registros dos momentos TamPets!</h2>
            </div>
            <div className={styles["galeria-container"]}>
                <Link href="./galeria-tampets/coletas">
                    <Card
                        imagem={"/GaleriaColetas.PNG"}
                        titulo="Pontos de Coleta"
                        descricao="Pontos de Coleta do Projeto!"
                        className="card"
                    />
                </Link>

                <Link href="./galeria-tampets/empresas">
                    <Card
                        imagem={"/GaleriaEmpresas.jpg"}
                        titulo="Empresas"
                        descricao="TamPets nas Empresas!"
                        className="card"
                    /> </Link>

                <Link href="./galeria-tampets/eventos">
                    <Card
                        imagem={"/GaleriaEventos.PNG"}
                        titulo="Eventos"
                        descricao="Eventos do Projeto!"
                        className="card"
                    />
                </Link>

                <Link href="./galeria-tampets/escolas">
                    <Card
                        imagem={"/GaleriaEscolas.webp"}
                        titulo="Escolas"
                        descricao="Escolas que Participam!"
                        className="card"
                    />
                </Link>

            </div>
        </section>
    );
}