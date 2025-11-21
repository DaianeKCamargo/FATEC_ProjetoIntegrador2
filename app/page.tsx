'use client';

import Image from "next/image";
import styles from '@/styles/home.module.css';
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div>

      <div className={styles.hero}>
        <img className={styles.folder} src="/folder_home.png" alt="folder home" />
      </div>

      <div className={styles.doar}>
        <div className={styles.left}>
          <h2>Transforme tampinhas em boas ações</h2>
          <p>
            Cada tampinha vira impacto real. Veja a transição das tampinhas se
            transformando em moedas, representando a ajuda que chega a quem
            precisa.
          </p>
        </div>

        <div className={styles.right}>
          <motion.div
            className="box"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01]
            }}
          >
            {/* IMAGEM 1 */}
            < motion.div
              className="box"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01]
              }}            >
              <Image
                src="/doar_tampinhas.png"
                width={450}
                height={450}
                alt="Tampinhas caindo"
              />
            </motion.div>

            {/* IMAGEM 2 */}
            <motion.div
              className="box"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01]
              }}
            >
              <Image
                src="/tampinhas_coin_caindo.png"
                width={450}
                height={450}
                alt="Tampinhas se transformando em moedas"
              />
            </motion.div>

            {/* IMAGEM 3 */}
            <motion.div
              className="box"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01]
              }}
            >
              <Image
                src="/coin.png"
                width={450}
                height={450}
                alt="Mão segurando moedas"
              />
            </motion.div>
          </motion.div>
        </div>
      </div >

      <div className={styles.pontocoleta}>
        <h1> Encontre o ponto de coleta mais próximo de você </h1>
      </div>

      <div className={styles.participar}>
        <h1> Tornar parceiro | Voluntário | Ponto de Coleta </h1>
      </div>

      <div className={styles.resultados}>
        <h1> Resumo resultados </h1>
      </div>

      <div className={styles.parceiros}>
        <h1> Parceiros </h1>
      </div>

    </div >
  );
}