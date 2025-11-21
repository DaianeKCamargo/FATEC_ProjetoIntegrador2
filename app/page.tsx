'use client';

import Image from "next/image";
import styles from '@/styles/home.module.css';
import { motion, useInView, stagger, useAnimate } from "framer-motion";
import { useEffect, useRef } from "react";
import { HiLocationMarker } from "react-icons/hi";

// Layout dos Titulos das páginas
function Section({ children }) {
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

// Animação ponto de coleta


export default function Home() {

  // Animação Ponto Coleta
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate(
      [
        [
          scope.current,
          {
            transform: [
              "rotateX(0deg) rotateZ(0deg)",
              "rotateX(50deg) rotateZ(180deg)"
            ],
            /**
             * Animating backgroundColor because setting opacity
             * on a layer containing transform-style: preserve-3d
             * will break 3d on descendants.
             */
            backgroundColor: ["#f5f5f500", "#e6f0ff"]
          },
          { type: "spring" }
        ],
        [
          ".dot",
          {
            transform: ["translateZ(100px)", "translateZ(10px)"],
            opacity: [0, 1]
          },
          {
            type: "spring",
            stiffness: 900,
            damping: 40,
            delay: stagger(0.1),
            at: "-1"
          }
        ],
        [
          ".ponto",
          {
            transform: ["translateZ(100px)", "translateZ(10px)"],
            opacity: [0, 1]
          },
          {
            type: "spring",
            stiffness: 900,
            damping: 40,
            delay: stagger(0.1),
            at: "-1"
          }
        ]
      ],
      { delay: 0.3 }
    );
  }, []);

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