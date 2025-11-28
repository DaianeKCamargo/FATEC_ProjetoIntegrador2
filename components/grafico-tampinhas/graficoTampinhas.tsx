"use client";

import { useEffect, useState } from "react";
import { mesesFiltro } from '@/app/api/relatorio/data';
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer
} from "recharts";

import styles from "@/styles/grafico-tampinhas.module.css";

type Mes = {
  month: number;
  monthName: string;
  year: number;
  caps: number;
};

export default function GraficoTampinhas({ year }: { year: number }) {
  const [dados, setDados] = useState<Mes[]>([]);
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState("");

  // Detecta tamanho da tela
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkSize = () => setIsMobile(window.innerWidth < 600);

    checkSize();
    window.addEventListener("resize", checkSize);
    return () => window.removeEventListener("resize", checkSize);
  }, []);

  // Abreviações
  const monthMap: Record<string, string> = {
    janeiro: "Jan",
    fevereiro: "Fev",
    março: "Mar",
    abril: "Abr",
    maio: "Mai",
    junho: "Jun",
    julho: "Jul",
    agosto: "Ago",
    setembro: "Set",
    outubro: "Out",
    novembro: "Nov",
    dezembro: "Dez"
  };

  const formatMonth = (name: string) => {
    if (!name) return "";

    if (isMobile) {
      return monthMap[name.toLowerCase()] || name.substring(0, 3);
    }

    return name.charAt(0).toUpperCase() + name.slice(1);
  };

  // Buscar dados
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
            const mes = mesesFiltro.find((m) => m.value === i);

            arr.push({
              month: i,
              monthName: mes?.label || "",
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

          <XAxis
            dataKey="monthName"
            interval={0}
            tickFormatter={formatMonth}
            angle={isMobile ? -30 : 0}
            textAnchor={isMobile ? "end" : "middle"}
            height={isMobile ? 50 : 30}
          />

          <YAxis />
          <Tooltip />
          <Bar dataKey="caps" fill="#0088ff" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}