"use client";
import { useState } from "react";
import Image from "next/image";
import "../style/Carrossel.css";

type CarrosselProps = {
  imagens: string[];
};

export default function Carrossel({ imagens }: CarrosselProps) {
  const [indiceAtual, setIndiceAtual] = useState(0);

  const proximaImagem = () => {
    setIndiceAtual((prev) => (prev + 1) % imagens.length);
  };

  const imagemAnterior = () => {
    setIndiceAtual((prev) => (prev - 1 + imagens.length) % imagens.length);
  };

  return (
    <div className="carrossel">
      <button className="seta esquerda" onClick={imagemAnterior}>
        ❮
      </button>

      <div
        className="carrossel-container"
        style={{
          transform: `translateX(-${indiceAtual * 100}%)`,
        }}
      >
        {imagens.map((img, index) => (
          <div key={index} className="slide">
            <Image
              src={img}
              alt={`Slide ${index + 1}`}
              width={800}
              height={400}
              className="carrossel-imagem"
              priority={index === 0}
            />
          </div>
        ))}
      </div>

      <button className="seta direita" onClick={proximaImagem}>
        ❯
      </button>

      <div className="indicadores">
        {imagens.map((_, index) => (
          <span
            key={index}
            className={`indicador ${index === indiceAtual ? "ativo" : ""}`}
            onClick={() => setIndiceAtual(index)}
          ></span>
        ))}
      </div>
    </div>
  );
}
