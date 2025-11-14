import Image from "next/image";
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
      className={`card ${className ? className : ""}`}
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
  );
}
