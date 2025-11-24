"use client";
import { useEffect, useState } from "react";
import styles from "@/styles/lists.module.css"


interface CP {
    id: string;
    username?: string;
    cpf: string;
    email: string;
    phone: string;
    namePC: string;
    endePC: string;
    horaFuncPC: string;
    photoPC: string;
    approved: boolean;
}


export default function CollectionPointList() {
    const [collectionPoints, setCollectionPoints] = useState<any[]>([]);

    // Carrega da API (não mais do localStorage)
    const loadCollectionsPoints = async () => {
        const res = await fetch("/api/collectionpoints");
        const data = await res.json();
        setCollectionPoints(data);
    };

    useEffect(() => {
        loadCollectionsPoints();
    }, []);

    // Deletar do arquivo e do estado
    const handleDelete = async (id: number) => {
        await fetch(`/api/collectionspoints/${id}`, { method: "DELETE" });

        // Remove do estado local sem precisar recarregar página
        setCollectionPoints(prev => prev.filter((p, index) => index !== id));
    };

    return (
        <div className={styles.list}>
            {collectionPoints.length === 0 && <p>Nenhum parceiro encontrado.</p>}

            {collectionPoints.map((pc, index) => (

                <div key={index} className={styles.item}>
                    <p><b>Foto do Local da Empresa:</b></p>
                    <img
                        src={pc.photoPC}
                        alt="logo da empresa"
                        className={styles.previewImg}
                    />

                    <p><b>Nome do Responsável:</b>
                        {pc.username}</p>

                    <p><b>Telefone:</b>
                        {pc.phone}</p>

                    <p><b>Nome da Empresa:
                    </b>{pc.namePC}</p>

                    <p><b>Endereço:
                    </b>{pc.endePC}</p>

                    <p><b>horaFuncPC:
                    </b>{pc.horaFuncPC}</p>

                    <button onClick={() => handleDelete(index)} >
                        Excluir
                    </button>

                </div>
            ))}
        </div>
    );
}