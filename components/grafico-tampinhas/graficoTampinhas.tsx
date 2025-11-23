"use client";

import { useEffect, useState } from "react";
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer
} from "recharts";

import styles from "../styles/GraficoTampinhas.module.css";

type Mes = {
  month: number;
  year: number;
  caps: number;
};

export default function GraficoTampinhas({ year }: { year: number }) {
  const [dados, setDados] = useState<Mes[]>([]);
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const res = await fetch(`/api/relatorio/graficos?year=${year}`);
        const json = await res.json();

        if (!res.ok) {
          setErro(json.error || "Erro ao buscar dados");
        } else {
          const arr: Mes[] = [];

          for (let i = 1; i <= 12; i++) {
            const item = json.relatorio.find((m: Mes) => m.month === i);

            arr.push({
              month: i,
              year: year,
              caps: item ? item.caps : 0
            });
          }

          setDados(arr);
        }
      } catch (_) {
        setErro("Falha ao conectar com API");
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [year]);

  if (loading) return <div className={styles.loading}>Carregando gráfico...</div>;
  if (erro) return <div className={styles.error}>{erro}</div>;

  return (
    <div className={styles.box}>
      <h2 className={styles.title}>Tampinhas por mês</h2>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={dados}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="caps" fill="#0088ff" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}