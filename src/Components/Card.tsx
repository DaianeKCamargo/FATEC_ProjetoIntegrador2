import Image from "next/image";
import "./Card.css";

type CardProps = {
  imagem: string;       // caminho da imagem (ex: "/foto.png" ou import)
  titulo: string;       // título que aparece no card
  descricao: string;    // texto/descrição abaixo
  width?: number;     // largura opcional
  className: string;  // classe CSS opcional
};

export default function Card({ imagem, titulo, descricao, width, className }: CardProps) {
  return (
    <div className={` ${className}`} style={{ width:  `${width}px` || '260px' }}>
      <div className="imagem">
        <Image
          src={imagem}
          alt={titulo}
          width={200}     // tamanho base
          height={200}
          className="foto"
        />
      </div>
      <div className="texto">
        <h3>{titulo}</h3>
        <p>{descricao}</p>
      </div>
    </div>
  );



}