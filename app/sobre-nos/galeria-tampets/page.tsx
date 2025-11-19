'use client';

import Link from "next/link";
import styles from "@/styles/galeria.module.css";
import Card from "@/components/card/Card";

export default function GaleriaTampets() {
    return (
        <section>
            <div className={styles.titulo}>
                <img className={styles.imgt} src="/img_titulo_amarelo.png" alt="Fundo Título" />

                <h1 className={styles.escritat}> Galeria de Fotos </h1>

                <p className={styles.escritap}> Veja um pouco do projeto TamPets </p>
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