import Image from "next/image";
import "./CardDesenhado.css";

type CardDesenhadoProps = {
  imagem: string;       // caminho da imagem (ex: "/foto.png" ou import)
  titulo: string;       // título que aparece no card
  descricao: string;    // texto/descrição abaixo
};

export default function CardDesenhado({ imagem, titulo, descricao }: CardDesenhadoProps) {
  return (
    <div className="card-desenhado">
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
