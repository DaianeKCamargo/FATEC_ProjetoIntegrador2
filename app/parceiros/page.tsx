"use client"

import Titulo from "@/components/titulo/Titulo";
import styles from "@/styles/parceiros.module.css";
import PartnerCard from "@/components/partners/PartnerCard";


export default async function Parceiros() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/partners`, {
        cache: "no-store",
    });

    const partners = await res.json();

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