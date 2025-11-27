'use client'

import { useEffect, useState } from "react";
import Card from 'react-bootstrap/Card';
import styles from "@/styles/admin-analise-e-aprovacao.module.css";
import { Tab, Tabs } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
import PartnersList from "@/components/partners/PartnerList";
import CollectionPointList from "@/components/collectionpoints/CollectionPointList";
import { TbArrowBackUp } from "react-icons/tb";
import BackButton from "@/components/back-button/BackButton";

export default function AdministrativoAnaliseAprovacao() {
    //ponto de coleta
    const [points, setPoints] = useState<any[]>([]);

    // parceiros
    const [partners, setPartners] = useState<any[]>([]);

    useEffect(() => {
        fetch("/api/partners").then(async (res) => setPartners(await res.json()));
        fetch("/api/collectionpoints").then(async (res) => setPoints(await res.json()));
    }, []);


    const approvePartner = (id: string) => {
        setPartners((prev) => prev.map((p) => p.id === id ? { ...p, approved: true } : p));
    };


    const approvePoint = (id: string) => {
        setPoints((prev) => prev.map((p) => p.id === id ? { ...p, approved: true } : p));
    };


    const deletePartner = async (id: string) => {
        await fetch(`/api/partners/${id}`, { method: "DELETE" });
        setPartners((prev) => prev.filter((p) => p.id !== id));
    };


    const deletePoint = async (id: string) => {
        await fetch(`/api/collectionpoints/${id}`, { method: "DELETE" });
        setPoints((prev) => prev.filter((p) => p.id !== id));
    };

    return (
        <div className={styles.body}>
            <div className={styles.titulo}>
                <BackButton />
                <h1> Área do Administrador </h1>
                <h2> Análise e Aprovação de cadastros </h2>
            </div>
            <Card style={{ padding: 20 }} className={styles.cardAcordeon}>
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

                                        {partners.filter((p) => !p.approved).map((p) => (
                                            <div key={p.id} className={styles.card}>
                                                <p><b>Id:</b></p>{p.id}

                                                <p><b>Foto da Empresa:</b></p>
                                                <img
                                                    src={p.photoP}
                                                    alt="logo da empresa"
                                                    className={styles.previewImg}
                                                />

                                                <p><b>Nome:</b>
                                                    {p.username}</p>

                                                <p><b>CPF:</b>
                                                    {p.cpf}</p>

                                                <p><b>Telefone:</b>
                                                    {p.phone}</p>

                                                <p><b>Nome da Empresa:
                                                </b>{p.nameP}</p>

                                                <p><b>Link da Empresa:</b></p>
                                                {p.linkP && (
                                                    <a
                                                        href={p.linkP}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                    >
                                                        Ver perfil
                                                    </a>
                                                )}


                                                <button className={styles.btnApproved} onClick={() => approvePartner(p.id)}>Aprovar</button>
                                                <button className={styles.btnDelete} onClick={() => deletePartner(p.id)}>Excluir</button>
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

                    <Tab eventKey="ponto-coleta" title="Ponto de Coleta" className={styles.tab}>
                        <Accordion defaultActiveKey="0" flush>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>Cadastros Pendentes</Accordion.Header>
                                <Accordion.Body>
                                    <div className={styles.container}>

                                        {points.filter((p) => !p.approved).map((p) => (
                                            <div key={p.id} className={styles.card}>
                                                <p><b>Id:</b></p>{p.id}

                                                <p><b>Foto do Local:</b></p>
                                                <img
                                                    src={p.photoPC}
                                                    alt="logo da empresa"
                                                    className={styles.previewImg}
                                                />
                                                <p><b>Nome do Responsável:</b>
                                                    {p.username}</p>

                                                <p><b>CNPJ:</b>
                                                    {p.cnpj}</p>

                                                <p><b>Telefone:</b>
                                                    {p.phone}</p>

                                                <p><b>Nome da Empresa:</b>
                                                    {p.namePC}</p>

                                                <p><b>Endereço:</b>
                                                    {p.endePC}</p>

                                                <p><b>Horario de Funcionamento:</b>
                                                    {p.horaFuncPC}</p>

                                                <button className={styles.btnApproved} onClick={() => approvePoint(p.id)}>Aprovar</button>

                                                <button className={styles.btnDelete} onClick={() => deletePoint(p.id)}>Excluir</button>
                                            </ div>
                                        ))}
                                    </div>
                                </Accordion.Body>
                            </Accordion.Item>


                            <Accordion.Item eventKey="1">
                                <Accordion.Header> Lista de Pontos de Coleta </Accordion.Header>
                                <Accordion.Body>
                                    <CollectionPointList />
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Tab>
                </Tabs>
            </Card>

        </div>
    );
}
