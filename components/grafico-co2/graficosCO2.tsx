"use client";

import { useEffect, useState } from "react";
import { mesesFiltro } from '@/app/api/relatorio/data';
import {
  LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer
} from "recharts";

import styles from "@/styles/grafico-co2.module.css";

type Mes = {
  month: number;
  monthName?: string;
  year: number;
  co2: number;
};

type ApiResponse = {
  relatorio: Mes[];
  co2: Mes[];
  error?: string;
};

export default function GraficoCo2({ year }: { year: number }) {
  if (!year || typeof year !== "number") {
    return <div className={styles.error}>Ano inválido para o gráfico.</div>;
  }

  const [dados, setDados] = useState<Mes[]>([]);
  const [status, setStatus] = useState<"loading" | "error" | "success">("loading");
  const [msgErro, setMsgErro] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        setStatus("loading");

        const res = await fetch(`/api/relatorio/graficos?year=${year}`);
        const json: ApiResponse = await res.json();

        if (!res.ok) {
          setStatus("error");
          setMsgErro(json.error || "Erro ao buscar dados.");
          return;
        }
        const mesesFormatados: Mes[] = [];

        for (let i = 1; i <= 12; i++) {
          const item = json.co2.find(m => m.month === i);
          const mes = mesesFiltro.find((m) => m.value === i);

          mesesFormatados.push({
            month: i,
            monthName: mes?.label || "",
            year: year,
            co2: item ? item.co2 : 0
          });
        }

        setDados(mesesFormatados);
        setStatus("success");

      } catch (_) {
        setStatus("error");
        setMsgErro("Falha ao conectar com a API.");
      }
    }

    fetchData();
  }, [year]);

  if (status === "loading") {
    return <div className={styles.loading}>Carregando CO₂...</div>;
  }

  if (status === "error") {
    return <div className={styles.error}>{msgErro}</div>;
  }
  
  const tudoZero = dados.every(m => m.co2 === 0);

  return (
    <div className={styles.box}>
      <h2 className={styles.title}>Redução de CO₂ (kg)</h2>

      {tudoZero && (
        <div className={styles.alert}>
          Não houve redução de CO₂ registrada neste ano.
        </div>
      )}

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={dados}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="monthName" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="co2" stroke="#00cc66" strokeWidth={3} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}