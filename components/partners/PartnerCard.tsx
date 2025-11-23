import Image from "next/image";
import styles from "@/styles/partner-card.module.css";

interface PartnerCardProps {
    id: string;
    nameP: string;
    photoP: string;
}

export default function PartnerCard({ id, nameP, photoP }: PartnerCardProps) {
    return (
        <div className={styles.card}>
            <Image
                src={photoP}
                alt={nameP}
                width={300}
                height={200}
                className={styles.image}
            />

            <h3>{nameP}</h3>
        </div>
    );
}
