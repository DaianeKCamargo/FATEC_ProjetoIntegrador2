'use client';

import Image from "next/image";
import styles from '@/styles/home.module.css';
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function Home() {

  const [show, setShow] = useState(true);
  const [turnIntoCoin, setTurnIntoCoin] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setTurnIntoCoin(true), 1500);
    const t2 = setTimeout(() => setShow(false), 2300);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  return (
    <div>

      <div className={styles.hero}>
        <img className={styles.folder} src="/folder_home.png" alt="folder home" />
      </div>

      <div className={styles.doar}>
      </div> 

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

    </div>
  );
}