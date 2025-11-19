'use client'

import styles from '@/styles/ponto-coleta.module.css';

export default function PontoColeta() {

    return (
        <section>
            <div className={styles.titulo}>
                <img className={styles.imgt} src="/img_titulo_azul.png" alt="Fundo Título" />

                <h1 className={styles.escritat}> Pontos de Coletas </h1>

                <p className={styles.escritap}> Encontre aqui o local mais próximo de você! </p>
            </div>
        </section>
    );
}