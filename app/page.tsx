import Image from "next/image";

import styles from '@/styles/home.module.css';

export default function Home() {
  return (
    <div>

      <div className={styles.hero}>
        <img className={styles.folder} src="/folder_home.png" alt="folder home" />
      </div>

      <div className={styles.doar}>
        <h1> Doe Tampinhas </h1>
        <Image className={styles.doarimg} src="/doar_tampinhas.png" alt="doar tampinhas" width={500} height={200} />
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