'use client'
import styles from '@/styles/relatorio.module.css';

export default function Relatorio() {

    return (
        <section>
            <div className={styles.titulo}>
                <img className={styles.imgt} src="/img_titulo_lilas.png" alt="Fundo Título" />

                <h1 className={styles.escritat}> Relatório </h1>

                <p className={styles.escritap}> Fique por dentro dos resultados do projeto.</p>
            </div>

        </section>
    );
}