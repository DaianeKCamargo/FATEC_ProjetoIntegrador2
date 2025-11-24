'use client'

import FraseMotivacional from "@/components/admin-home/FrasesMotivacionais";
import styles from "@/styles/admin-home.module.css";
import { motion } from "framer-motion";
import { GrArticle } from "react-icons/gr";
import { GoCodescanCheckmark } from "react-icons/go";
import { SiDatadog } from "react-icons/si";
import { MdOutlineDataThresholding } from "react-icons/md";
import { GiDogHouse } from "react-icons/gi";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { getRole } from "@/utils/auth";


export default function AdministrativoHome() {
    // Login
    const router = useRouter();

    useEffect(() => {
        const role = getRole();
        if (role !== "admin") {
            router.push("/login");
        }
    }, []);

    return (
        <div className={styles.body}>
            <div className={styles.titulo}>
                <img src="/logo_tampets.png" alt="logo" />
                <h1> Área do Administrativo </h1>
                <p>Bem vindo! </p>
                <FraseMotivacional />
            </div>

            <div className={styles.paginasAdm} >

                <a href="/admin/admin-galeria" className={styles.link}>
                    <motion.div
                        className={styles.cards}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1, transition: { duration: 1 } }}
                        whileHover={{ scale: 1.05, boxShadow: "0px 5px 8px #207" }}>
                        <SiDatadog size={50} />
                        <p>Galeria de Fotos</p>
                    </motion.div>
                </a>

                <a href="/admin/admin-na-midia" className={styles.link}>
                    <motion.div
                        className={styles.cards}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1, transition: { duration: 1 } }}
                        whileHover={{ scale: 1.05, boxShadow: "0px 5px 8px #207" }}>
                        <GrArticle size={50} />
                        <p>Notícias</p>
                    </motion.div>
                </a>

                <a href="/admin/analise-e-aprovacao" className={styles.link}>
                    <motion.div
                        className={styles.cards}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1, transition: { duration: 1 } }}
                        whileHover={{ scale: 1.05, boxShadow: "0px 5px 8px #207" }}>
                        <GoCodescanCheckmark size={50} />
                        <p>Analise e Aprovação de Cadastros</p>
                    </motion.div>
                </a>

                <a href="/admin/resultados" className={styles.link}>
                    <motion.div
                        className={styles.cards}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1, transition: { duration: 1 } }}
                        whileHover={{ scale: 1.05, boxShadow: "0px 5px 8px #207" }}>
                        <MdOutlineDataThresholding size={50} />
                        <p>Quantidades de Arrecadações</p>
                    </motion.div>
                </a>

                <a href="/" className={styles.link}>
                    <motion.div
                        className={styles.cards}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1, transition: { duration: 1 } }}
                        whileHover={{ scale: 1.05, boxShadow: "0px 5px 8px #207" }}>
                        <GiDogHouse size={50} />
                        <p>Visitar o Site</p>
                    </motion.div>
                </a>

            </div>
        </div>
    );
}