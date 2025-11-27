"use client";

import Titulo from "@/components/titulo/Titulo";
import styles from "@/styles/parceiros.module.css";
import PartnerCard from "@/components/partners/PartnerCard";
import { useEffect, useState } from "react";

export default function Parceiros() {
    const [partners, setPartners] = useState([]);

    useEffect(() => {
        const load = async () => {
            const res = await fetch("/api/partners", { cache: "no-store" });
            const data = await res.json();
            setPartners(data);
        };

        load();
    }, []);

    return (
        <section className={styles.secao}>
            <Titulo
                src="/img_titulo_verde.png"
                title="Parceiros"
                label="Quer fazer parte deste projeto ?"
            />

            <div className={styles.grid}>
                {partners.map((p: any) => (
                    <PartnerCard
                        key={p.id}
                        id={p.id}
                        nameP={p.nameP}
                        photoP={p.photoP}
                        linkP={p.linkP}
                    />
                ))}
            </div>
        </section>
    );
}
