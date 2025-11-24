'use client';
import Card from "@/components/card/Card";
import Titulo from "@/components/titulo/Titulo";
import styles from "@/styles/albuns.module.css"



export default function galeriaColetas() {
    return (
        <section className={styles.bodya}>
            <Titulo src="/img_titulo_amarelo.png" title="Galeria de Fotos" label="Coletas TamPets"/>
           
            <div className={styles.cardsContainer}>
                <Card
                    imagem={"/MPSL-empresa-evento.jpg"}
                    titulo="Coleta TamPets"
                    descricao="Coleta das tampinhas no centro tal"
                    className={styles.cardsContainer}
                />

                <Card
                    imagem={"/EEgualbertomoreira-escolas-coletas.jpg"}
                    titulo="Coleta TamPets"
                    descricao="Coleta das tampinhas no centro tal"
                    className={styles.cardsContainer}
                />
                <Card
                    imagem={"/palestraCMEIRaphaela-evento.jpg"}
                    titulo="Coleta TamPets"
                    descricao="Coleta das tampinhas no centro tal"
                    className={styles.cardsContainer}
                />
                <Card
                    imagem={"/palestraEEML-evento.jpg"}
                    titulo="Coleta TamPets"
                    descricao="Coleta das tampinhas no centro tal"
                    className={styles.cardsContainer}
                />
                <Card
                    imagem={"/palestraEHSHITER-evento-empresas.jpg"}
                    titulo="Coleta TamPets"
                    descricao="Coleta das tampinhas no centro tal"
                    className={styles.cardsContainer}
                />
                <Card
                    imagem={"/palestraFudacaoCasa-evento.jpg"}
                    titulo="Coleta TamPets"
                    descricao="Coleta das tampinhas no centro tal"
                    className={styles.cardsContainer}
                />
                <Card
                    imagem={"/palestraWPM-evento.jpg"}
                    titulo="Coleta TamPets"
                    descricao="Coleta das tampinhas no centro tal"
                    className={styles.cardsContainer}
                />
                <Card
                    imagem={"/MPSL-empresa-evento.jpg"}
                    titulo="Coleta TamPets"
                    descricao="Coleta das tampinhas no centro tal"
                    className={styles.cardsContainer}
                />

                <Card
                    imagem={"/EEgualbertomoreira-escolas-coletas.jpg"}
                    titulo="Coleta TamPets"
                    descricao="Coleta das tampinhas no centro tal"
                    className={styles.cardsContainer}
                />
                <Card
                    imagem={"/palestraCMEIRaphaela-evento.jpg"}
                    titulo="Coleta TamPets"
                    descricao="Coleta das tampinhas no centro tal"
                    className={styles.cardsContainer}
                />
                <Card
                    imagem={"/palestraEEML-evento.jpg"}
                    titulo="Coleta TamPets"
                    descricao="Coleta das tampinhas no centro tal"
                    className={styles.cardsContainer}
                />
                <Card
                    imagem={"/palestraEHSHITER-evento-empresas.jpg"}
                    titulo="Coleta TamPets"
                    descricao="Coleta das tampinhas no centro tal"
                    className={styles.cardsContainer}
                />
                <Card
                    imagem={"/palestraFudacaoCasa-evento.jpg"}
                    titulo="Coleta TamPets"
                    descricao="Coleta das tampinhas no centro tal"
                    className={styles.cardsContainer}
                />
                
            </div>
        </section>
    );
}