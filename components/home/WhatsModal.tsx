"use client";
import { useState } from "react";
import styles from "@/styles/whats-modal.module.css";

interface WhatsModalProps {
  numero: string; // ex: "5515999999999"
}

export default function WhatsModal({ numero }: WhatsModalProps) {
  const [open, setOpen] = useState(false);
  const [nome, setNome] = useState("");
  const [mensagem, setMensagem] = useState("");

  const handleSend = () => {
    const texto = `Olá, meu nome é ${nome}. ${mensagem}`;
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(texto)}`;

    window.open(url, "_blank");
    setOpen(false);
  };

  return (
    <>
      {/* Botão que abre o modal */}
      <button className={styles.openBtn} onClick={() => setOpen(true)}>
        Fale Conosco
      </button>

      {/* Modal */}
      {open && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalContent}>
            <h2>Enviar mensagem</h2>

            <label>Seu nome:</label>
            <input
              type="text"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />

            <label>Mensagem:</label>
            <textarea
              value={mensagem}
              onChange={(e) => setMensagem(e.target.value)}
            />

            <div className={styles.btnArea}>
              <button onClick={handleSend}>Enviar no WhatsApp</button>
              <button onClick={() => setOpen(false)}>Fechar</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
