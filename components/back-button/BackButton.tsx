"use client";

import { useRouter } from "next/navigation";
import styles from "@/styles/backbutton.module.css";

export default function BackButton({ label = "Voltar" }) {
    const router = useRouter();

    return (
        <button className={styles.backButton} onClick={() => router.back()}>
            ← {label}
        </button>
    );
}
