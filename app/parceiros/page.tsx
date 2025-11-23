'use client'

import Titulo from "@/components/titulo/Titulo";
import styles from "@/styles/parceiros.module.css";
import { useEffect, useState } from "react";


export default function Parceiros() {

    return (
        <section className={styles.secao}>
            <Titulo src="/img_titulo_verde.png" title="Parceiros" label="Quer fazer parte deste projeto ?" />

            
            
        </section>
    );
}