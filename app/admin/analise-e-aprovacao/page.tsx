'use client'

import { useEffect, useState } from "react";
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import styles from "@/styles/admin-analise-e-aprovacao.module.css";
import { Tab, Tabs } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
import PartnersList from "@/components/partners/PartnerList";

// parceiros
interface values {
    id?: string,
    username?: string;
    cpf: string;
    email: string;
    phone: string;
    nameP?: string;
    linkP?: string;
    photoP?: string;
    approved?: boolean; // página parceiros e admin
}

export default function AdministrativoAnaliseAprovacao() {

    // parceiros
    const [partners, setPartners] = useState<values[]>([]);

    useEffect(() => {
        async function load() {
            const res = await fetch("/api/partners");
            const data = await res.json();
            setPartners(data);
        }
        load();
    }, []);

    const approvePartner = (index: number) => {
        const updated = [...partners];
        updated[index].approved = true;
        setPartners(updated);
        localStorage.setItem("partners", JSON.stringify(updated));
    };

    //botao delete
    const handleDelete = async (id: string) => {
        if (!confirm("Tem certeza que deseja excluir?")) return;

        await fetch(`/api/partners/${id}`, {
            method: "DELETE",
        });

        // remove da tela sem recarregar
        const updated = partners.filter((p) => p.id !== id);
        setPartners(updated);
    };

    return (
        <div className={styles.body}>
            <div className={styles.titulo}>
                <h1> Área do Administrador </h1>
                <h2> Análise e Aprovação de cadastros </h2>
            </div>
            <Card style={{ padding: 20 }} className={styles.card}>
                <Tabs
                    defaultActiveKey="perfil"
                    id="tabs-card"
                    className={styles.tabs}
                >
                    <Tab eventKey="parceiros" title="Parceiros" className={styles.tab}>
                        <Accordion defaultActiveKey="0" flush>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header> Cadastros Pendentes </Accordion.Header>
                                <Accordion.Body>
                                    <div className={styles.container}>

                                        {partners
                                            .map((partner, index) => ({ partner, index })) // junta partner com índice real
                                            .filter(({ partner }) => !partner.approved)
                                            .map(({ partner, index }) => (
                                                <div key={index} className={styles.card}>
                                                    <p>Id:</p>{partner.id}

                                                    <p><b>Foto da Empresa:</b></p>
                                                    <img
                                                        src={partner.photoP}
                                                        alt="logo da empresa"
                                                        className={styles.previewImg}
                                                    />

                                                    <p><b>Nome:</b>
                                                        {partner.username}</p>

                                                    <p><b>CPF:</b>
                                                        {partner.cpf}</p>

                                                    <p><b>Telefone:</b>
                                                        {partner.phone}</p>

                                                    <p><b>Nome da Empresa:
                                                    </b>{partner.nameP}</p>

                                                    <p><b>Link da Empresa:</b></p>
                                                    {partner.linkP && (
                                                        <a
                                                            href={partner.linkP}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                        >
                                                            Ver perfil
                                                        </a>
                                                    )}


                                                    <button
                                                        className={styles.btnDelete}
                                                        onClick={() => handleDelete(partner.id!)}
                                                    >
                                                        Excluir
                                                    </button>
                                                    <button onClick={() => approvePartner(index)}>
                                                        Aprovar
                                                    </button>
                                                </div>
                                            ))}
                                    </div>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header> Lista de Parceiros </Accordion.Header>
                                <Accordion.Body>
                                    <PartnersList />
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Tab>

                    <Tab eventKey="ponto-coleta" title="Ponto de Coleta">
                        <p>Configurações aparecem aqui.</p>
                    </Tab>
                </Tabs>
            </Card>

        </div>
    );
}
