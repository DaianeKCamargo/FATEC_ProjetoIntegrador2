'use client'

import { useState } from "react";
import styles from '@/styles/admin-resultados.module.css';

export default function AdminitrativoResultados() {

    const [month, setMonth] = useState(1);
    const [year, setYear] = useState(2025);

    const [cats, setCats] = useState("");
    const [dogs, setDogs] = useState("");
    const [caps, setCaps] = useState("");


    async function handleSave() {
        const payload = {
            month, 
            year,
            cats: Number(cats),
            dogs: Number(dogs),
            caps: Number(caps)
        };

        const response = await fetch("/api/admin/add", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload)
        });

        const data = await response.json();
        alert(data.message);
    }

    return (
        <section className={styles.container}>
            <h1 className="styles.titulo">Relatório Administrativo</h1>
            <p className={styles.subtitulo}>Adicionar dados mensais</p>

            <div className={styles.form}>

                <label className={styles.label}>
                    Mês:
                    <select
                        value={month}
                        onChange={(e) => setMonth(Number(e.target.value))}
                        className={styles.select}
                    >
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(m => (
                            <option key={m} value={m}>{m}</option>
                        ))}
                    </select>
                </label>

                <label className={styles.label}>
                    Ano:
                    <select
                        value={year}
                        onChange={(e) => setYear(Number(e.target.value))}
                        className={styles.select}
                    >
                        {[2025, 2024, 2023].map(y => (
                            <option key={y} value={y}>{y}</option>
                        ))}
                    </select>
                </label>

                <label className={styles.label}>
                    Gatos:
                    <input
                        type="number"
                        value={cats}
                        onChange={(e) => setCats(e.target.value)}
                        className={styles.input}
                    />
                </label>

                <label className={styles.label}>
                    Cachorros:
                    <input
                        type="number"
                        value={dogs}
                        onChange={(e) => setDogs(e.target.value)}
                        className={styles.input}
                    />
                </label>

                <label className={styles.label}>
                    Tampinhas:
                    <input
                        type="number"
                        value={caps}
                        onChange={(e) => setCaps(e.target.value)}
                        className={styles.input}
                    />
                </label>

                <button onClick={handleSave} className={styles.botao}>
                    Salvar
                </button>

            </div>
        </section>
    );
}