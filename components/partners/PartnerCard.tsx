import Image from "next/image";
import styles from "@/styles/partner-card.module.css";

interface PartnerCardProps {
    id: string;
    nameP: string;
    photoP: string;
    linkP: string
}

export default function PartnerCard({ id, nameP, photoP, linkP }: PartnerCardProps) {
    return (
        <div className={styles.card}>
            <a href={linkP} style={{ textDecoration: "none", color: "inherit" }}>
                <Image
                    src={photoP}
                    alt={nameP}
                    width={300}
                    height={200}
                    className={styles.image}
                />
            </a>

            <h3>{nameP}</h3>
        </div>
    );
}
