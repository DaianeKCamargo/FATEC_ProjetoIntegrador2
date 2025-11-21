'use client'

import Image from "next/image"
import styles from '@/styles/home.module.css'
import { motion, useInView, Variants } from "framer-motion"
import { ReactNode, useRef } from "react"


// SECTION ANIMATION
// ---------------------------------------------
type SectionProps = { children: ReactNode }

function Section({ children }: SectionProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

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
  )
}


// CARD (AGORA COM IMAGEM + COR)
interface CardProps {
  img: string
  color: string
}

const cardVariants: Variants = {
  offscreen: { y: 300 },
  onscreen: {
    y: 50,
    rotate: -10,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8
    }
  }
}

function Card({ img, color }: CardProps) {
  return (
    <motion.div
      className={styles.cardContainer}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
    >
      <div className={styles.splash} style={{ background: color }} />

      <motion.div className={styles.card} variants={cardVariants}>
        <Image className={styles.img} src={img} alt="icone" width={500} height={600} />
      </motion.div>
    </motion.div>
  )
}


// LISTA DE CARDS (AGORA COM IMAGENS)
const cardsData = [
  { img: "/doar.png", color: "#FAF9DD" },
  { img: "/localizacao.png", color: "#5f81b7" }
]

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
              <p>Transforme suas tampinhas em ações...</p>
              <p><b>Clique aqui e saiba mais!</b></p>
            </a>
          </motion.div>
        </div>

        <div className={styles.imagem}>
          <Card img="/doar.png" color="#d7c216" />
        </div>
      </div>

      <div className={styles.pontocoleta}>
        <div className={styles.imagem}>
          <Card img="/localizacao.png" color="#5f81b7" />
        </div>

        <div className={styles.texto}>
          <Section>Pontos de coleta</Section>

          <motion.div
            className={styles.box2}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <a className={styles.paginaDoar} href="/como-doar">
              <p>Veja os pontos de coleta mais próximos...</p>
              <p><b>Clique aqui e saiba mais!</b></p>
            </a>
          </motion.div>
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