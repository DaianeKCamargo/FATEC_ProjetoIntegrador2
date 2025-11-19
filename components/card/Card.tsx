import Image from "next/image";
import styles from "@/styles/card.module.css";
import "@/styles/card.module.css";

type CardProps = {
  imagem: string;
  titulo: string;
  descricao?: string;
  width?: number;
  className?: string;
};

export default function Card({ imagem, titulo, descricao, width, className }: CardProps) {
  return (
    <div
      className={`${styles.card} ${className ? className : ""}`}
      style={{ width: width ? `${width}px` : "260px" }}
    >
      <div className={styles.imagem}>
        <Image
          src={imagem}
          alt={titulo}
          fill
          className={styles.foto}
        />
      </div>

      <div className={styles.texto}
        // className={`card ${className ? className : ""}`} -> CLASSNAME DUPLICADO
        style={{ width: width ? `${width}px` : "260px" }}
      >
        <div className="imagem">
          <Image
            src={imagem}
            alt={titulo}
            fill                   // faz a imagem ocupar 100% do contêiner
            className="foto"       // importante! aplica o estilo CSS de object-fit e hover
          />
        </div>
        <div className="texto">
          <h3>{titulo}</h3>
          <p>{descricao}</p>
        </div>
      </div>
    </div>
  );
}
