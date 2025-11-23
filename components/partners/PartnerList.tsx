"use client";

import { useEffect, useState } from "react";
import styles from "@/styles/partner-list.module.css";

interface values {
  username?: string;
  cpf: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
  namePC?: string;
  endePC?: string;
  horaFuncPC?: string;
  cnpj?: string;
  photoPC?: string;
  nameP?: string;
  linkP?: string;
  photoP?: string;
  options?: string[];
  approved?: boolean; // página parceiros e admin
}

export default function PartnersList() {
  const [partners, setPartners] = useState<any[]>([]);

  // Carrega da API (não mais do localStorage)
  const loadPartners = async () => {
    const res = await fetch("/api/partners");
    const data = await res.json();
    setPartners(data);
  };

  useEffect(() => {
    loadPartners();
  }, []);

  // Deletar do arquivo e do estado
  const handleDelete = async (id: number) => {
    await fetch(`/api/partners/${id}`, { method: "DELETE" });

    // Remove do estado local sem precisar recarregar página
    setPartners(prev => prev.filter((p, index) => index !== id));
  };

  return (
    <div className={styles.list}>
      {partners.length === 0 && <p>Nenhum parceiro encontrado.</p>}

      {partners.map((partner, index) => (
        <div key={index} className={styles.item}>
          <p><b>Foto da Empresa:</b></p>
          <img
            src={partner.photoP}
            alt="logo da empresa"
            className={styles.previewImg}
          />

          <p><b>Nome:</b>
            {partner.username}</p>

          <p><b>CPF:</b>
            {partner.cpf}</p>

          <p><b>Telefone:</b>
            {partner.phone}</p>

          <p><b>Nome da Empresa:
          </b>{partner.nameP}</p>

          <p><b>Link da Empresa:</b></p>
          {partner.linkP && (
            <a
              href={partner.linkP}
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver perfil
            </a>
          )}

          <button onClick={() => handleDelete(index)}>
            Excluir
          </button>
        </div>
      ))}
    </div>
  );
}
