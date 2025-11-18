import Image from "next/image";
import React from "react";
import styles from "@/styles/newscard.module.css";


type NewsCardProps = {
  imagem: string;
  titulo: string;
  data?: string;
  url?: string;
};

const NewsCard: React.FC<NewsCardProps> = ({ imagem, titulo, data, url }) => {
  return (
    <div className={styles["news-card"]}>
      <div className={styles["news-card-img-wrapper"]}>
        <Image
          src={imagem}
          alt={titulo}
          width={300}
          height={180}
          className={styles["news-card-img"]}
          style={{ objectFit: 'cover', borderTopLeftRadius: '10px', borderTopRightRadius: '10px' }}
        />
      </div>

      <div className={styles["news-card-content"]}>
        <h3 className={styles["news-card-title"]}>{titulo}</h3>
        <p className={styles["news-card-date"]}>{data}</p>

        <a href={url} target="_blank" rel="noopener noreferrer">
          <button className={styles["news-card-button"]}>Leia mais</button>
        </a>
      </div>
    </div>
  );
};

export default NewsCard;
