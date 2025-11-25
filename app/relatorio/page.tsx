'use client'

import { useState } from 'react';
import Titulo from '@/components/titulo/Titulo';
import ResumoCards from "@/components/resumo-cards/resumoCards";
import GraficoTampinhas from "@/components/grafico-tampinhas/graficoTampinhas";
import GraficoCo2 from "@/components/grafico-co2/graficosCO2";
import { relatorioData } from '@/app/api/relatorio/data';
import { relatorioCo2 } from '@/app/api/relatorio/data';
import { mesesFiltro } from '@/app/api/relatorio/data';

import styles from '@/styles/relatorio.module.css';

export default function Relatorio() {
    
    // Filtros dos cards
    const [cardMonth, setCardMonth] = useState(1);
    const [cardYear, setCardYear] = useState(2025);

    // Filtro do gráfico de tampinhas
    const [tampinhasYear, setTampinhasYear] = useState(2025);

    // Filtro do gráfico de CO2
    const [co2Year, setCo2Year] = useState(2025);

    const anosDisponiveis = [2025, 2024, 2023];


    return (
        <section className={styles.container}>

            <Titulo
                src="/img_titulo_lilas.png"
                title="Relatório"
                label="Fique por dentro dos resultados do projeto."
            />

            {/* Filtros dos cards */}
            <div className={styles.margin}>
                <div className={styles.filtros}>

                    <div className={styles.filtroItem}>
                        <label>Mês:</label>
                        <select
                            value={cardMonth}
                            onChange={(e) => setCardMonth(Number(e.target.value))}
                        >
                            {mesesFiltro.map((m) => (
                                <option key={m.value} value={m.value}>
                                    {m.label}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className={styles.filtroItem}>
                        <label>Ano:</label>
                        <select
                            value={cardYear}
                            onChange={(e) => setCardYear(Number(e.target.value))}
                        >
                            {anosDisponiveis.map((a) => (
                                <option key={a} value={a}>{a}</option>
                            ))}
                        </select>
                    </div>

                </div>

                {/* Cards */}
                <ResumoCards month={cardMonth} year={cardYear} />

                {/* Gráfico de Tampinhas */}
                <div className={styles.graficoBox}>
                    <div className={styles.filtros}>
                        <div className={styles.filtroItem}>
                            <label className={styles.label}>Ano:</label>
                            <select
                                value={tampinhasYear}
                                onChange={(e) => setTampinhasYear(Number(e.target.value))}
                            >
                                {anosDisponiveis.map((a) => (
                                    <option key={a} value={a}>{a}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <GraficoTampinhas year={tampinhasYear} />
                </div>

                {/* Gráfico CO2 */}
                <div className={styles.graficoBox}>
                    <div className={styles.filtros}>
                        <div className={styles.filtroItem}>
                            <label>Ano:</label>
                            <select
                                value={co2Year}
                                onChange={(e) => setCo2Year(Number(e.target.value))}
                            >
                                {anosDisponiveis.map((a) => (
                                    <option key={a} value={a}>{a}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <GraficoCo2 year={co2Year} />
                </div>
            </div>
        </section>
    );
}