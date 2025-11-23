'use client'
import FraseMotivacional from "@/components/admin-home/FrasesMotivacionais";
import styles from "@/styles/admin-home.module.css";

export default function AdministrativoHome() {
    return (
        <div className={styles.body}>
            <div className={styles.titulo}>
                <h1> Home Administrativo </h1>
                <p>Bem vindo! </p>
                <FraseMotivacional/>
            </div>
        </div>
    );
}