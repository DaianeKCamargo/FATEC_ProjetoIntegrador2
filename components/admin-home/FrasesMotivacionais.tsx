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
