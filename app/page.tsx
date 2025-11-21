'use client';

import Image from "next/image";
import styles from '@/styles/home.module.css';
import { motion, useInView } from "framer-motion";
import { ReactNode, useRef } from "react";

// Layout dos Titulos das páginas
type SectionProps = {
  children: ReactNode;
};

function Section({ children }: SectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className={styles.section}>
      <span
        style={{
          transform: isInView ? "none" : "translateX(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
        }}
      >
        {children}
      </span>
    </section>
  );
}

export default function Home() {

  return (
    <div>

      <div className={styles.hero}>
        <img className={styles.folder} src="/folder_home.png" alt="folder home" />
      </div>

      <div className={styles.doar}>
        <div className={styles.texto}>
          <Section>Doe sua Tampinhas!</Section>

          <motion.div
            className={styles.box1}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <a className={styles.paginaDoar} href="/como-doar">
              <p>
                Transforme suas tampinhas em ações, que tal você separa-las para ajudar animais em situação de abandono ? Uma a uma, elas podem ajuda-los muito!
              </p>
              <p><b>Clique aqui e saiba mais!</b></p>
            </a>
          </ motion.div>
        </div>

        <div className={styles.imagem1}>
        

        
        </div>
      </div >

      <div className={styles.pontocoleta}>



        <div className={styles.texto}>
          <Section>Encontre o ponto de coleta mais próximo de você! </Section>

          <motion.div
            className={styles.box2}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <a className={styles.paginaDoar} href="/como-doar">
              <p>
                Vá até um ponto de coleta mais próximo de você e deixe suas tampinhas.
              </p>
              <p><b>Clique aqui e saiba mais!</b></p>
            </a>
          </ motion.div>
        </div>

      </div>

      <div className={styles.voluntario}>
        
      </div>

      <div className={styles.resumoRelatorio}>
        <h1> Resumo resultados </h1>
      </div>

      <div className={styles.parceiros}>
        <h1> Parceiros </h1>
      </div>

    </div >
  );
}