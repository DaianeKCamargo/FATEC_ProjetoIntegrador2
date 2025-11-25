'use client';

import { useEffect, useState } from "react";
import styles from "@/styles/resumo-cards.module.css";

type Dados = {
  month: number;
  year: number;
  cat: number;
  dog: number;
  caps: number;
};

export default function ResumoCards({ month, year }: { month: number; year: number }) {
  const [data, setData] = useState<Dados | null>(null);
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const res = await fetch(`/api/relatorio?month=${month}&year=${year}`);
        const json = await res.json();

        if (!res.ok) {
          setErro(json.error || "Erro desconhecido");
        } else {
          setData(json);
        }
      } catch (_) {
        setErro("Falha ao conectar com a API.");
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [month, year]);

  if (loading) return <div className={styles.loading}>Carregando...</div>;
  if (erro) return <div className={styles.error}>{erro}</div>;

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <span className={styles.label}>Gatos </span>
        <span className={styles.value}>{data?.cat}</span>
        <img src="gatoRelatorio.png" alt="gato" className={styles.icon} />
      </div>

      <div className={styles.card}>
        <span className={styles.label}>Cães </span>
        <span className={styles.value}>{data?.dog}</span>
        <img src="cachorroRelatorio.png" alt="cachorro" className={styles.icon} />
      </div>

      <div className={styles.card}>
        <span className={styles.label}>Tampinhas </span>
        <span className={styles.value}>{data?.caps.toLocaleString("pt-BR")}</span>
        <img src="tampinhasRelatorio.png" alt="tampinhas" className={styles.icon} />
      </div>
    </div>
  );
}