"use client";

import { useEffect, useState } from "react";

export default function FraseMotivacional() {
  const frases = [
    "Acredite no processo.",
    "Passo a passo, você chega lá.",
    "Grandes mudanças começam com pequenas ações.",
    "Você é mais capaz do que imagina.",
    "A constância vence o talento.",
    "Continue — o futuro agradece!",
    "Nada muda se você não mudar.",
    "Orgulhe-se do seu caminho.",
    "O futuro depende do que você faz hoje.",
    "Nada muda se você não mudar.",
    "O sucesso é constância, não sorte.",
    "Foque e avance.",
    "O segredo é começar, não esperar.",
    "O sucesso é questão de atitude.",
    "A melhor forma de prever o futuro é criá-lo.",
    "O fracasso é uma ótima oportunidade para começar de novo de forma mais inteligente.",
    "Acredite no poder dos seus sonhos e siga em frente.",
    "Não desista, supere.",
    "A motivação vem de fazer as coisas acontecerem.",
    "Você já tem tudo o que precisa para dar o próximo passo.",
    "A coragem não é ausência do medo; é a persistência apesar do medo.",
    "Cada passo que você dá, por menor que seja, te aproxima dos seus sonhos.",
    "Suba o primeiro degrau com fé. Não é necessário que você veja toda a escada. Apenas dê o primeiro passo."
  ];

  const [frase, setFrase] = useState("");

  useEffect(() => {
    // escolhe uma frase aleatória
    const random = Math.floor(Math.random() * frases.length);
    setFrase(frases[random]);
  }, []);

  return (
    <p style={{ fontSize: "1.5rem", fontWeight: "500", textAlign: "center" }}>
      "{frase}"
    </p>
  );
}
