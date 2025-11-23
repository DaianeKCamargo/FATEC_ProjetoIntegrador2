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
  const [partners, setPartners] = useState<values[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem("partners");
    if (stored) setPartners(JSON.parse(stored));
  }, []);

  const approvedPartners = partners.filter((p) => p.approved);

  return (
    <div className={styles.list}>
      {approvedPartners.map((partner, index) => (
        <div key={index} className={styles.item}>
          {partner.username}
          {partner.cpf}
          {partner.phone}
          {partner.password}
          {partner.confirmPassword}
          {partner.namePC}
          {partner.horaFuncPC}
          {partner.cnpj}
          {partner.photoPC}
          {partner.cnpj}
          {partner.photoPC}
          {partner.nameP}
          {partner.linkP}
          {partner.photoP}
        </div>
      ))}
    </div>
  );
}
