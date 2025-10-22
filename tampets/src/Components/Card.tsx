import Image from "next/image";
import "./Card.css";

type CardProps = {
  imagem: string;       // caminho da imagem (ex: "/foto.png" ou import)
  titulo: string;       // título que aparece no card
  descricao: string;    // texto/descrição abaixo
};

export default function Card({ imagem, titulo, descricao }: CardProps) {
  return (
    <div className="card">
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
