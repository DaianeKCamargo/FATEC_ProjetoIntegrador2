'use client';

import styles from '@/styles/sobre-nos.module.css';

export default function SobreNos() {
    return (
        <section>
            <div className={styles.titulo}>
                <img className={styles.imgt} src="/img_titulo_verde.png" alt="Fundo Título" />

                <h1 className={styles.escritat}> Sobre Nós </h1>

                <p className={styles.escritap}> Não conhece nosso projeto ? Você está no lugar certo! </p>
            </div>
        </section>
    );
}