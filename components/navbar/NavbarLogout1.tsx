'use client';

import { Form, Nav, NavDropdown, Offcanvas } from 'react-bootstrap';
import { RiLoginCircleLine } from "react-icons/ri";
import styles from '@/styles/navbarlogout.module.css';
import Link from 'next/link';
import { FaBarsStaggered } from 'react-icons/fa6';
import { useState } from 'react';
import { useRouter } from 'next/navigation';



export default function NavbarLogout() {

    const [openMenu, setOpenMenu] = useState<boolean>(false);

    const handleFechado = () => setOpenMenu(false);
    const handleAberto = () => setOpenMenu(true);

    const router = useRouter();


    return (
        <>
            {/* DESKTOP E MOBILE */}
            <div className={styles.faixa} />

            <nav className={styles.navbar} >
                <div className={styles.logotampets}>
                    <a href="/"><img className={styles.logo} src="/logo_tampets.png" alt="Logo Tampets" width={200} height={100} /></a>
                </div>

                {/* ITENS DESKTOP */}
                <div className={styles.navitems}>
                    <NavDropdown className={styles.item} title="O Projeto">
                        <NavDropdown.Item className={styles.item} as={Link} href='/sobre-nos'> Sobre Nós </NavDropdown.Item>
                        <NavDropdown.Item className={styles.item} as={Link} href="/sobre-nos/tampets-na-midia"> Tampets na Mídia </NavDropdown.Item>
                        <NavDropdown.Item className={styles.item} as={Link} href="/sobre-nos/galeria-tampets"> Galeria de Fotos </NavDropdown.Item>
                    </NavDropdown>
                    <Link className={styles.item} href="/relatorio"> Relatório </Link>
                    <Link className={styles.item} href="/ponto-coleta"> Ponto de Coleta </Link>
                    <Link className={styles.item} href="/como-doar"> Como Doar </Link>
                </div>
                <div className={styles.btn}>
                    <button className={styles.button} onClick={() => { router.push("/login") }}>
                        <RiLoginCircleLine size={20} /> Login
                    </button>
                </div>


                {/* ITEM MOBILE */}
                <div className={styles.navhamburguer}>
                    <FaBarsStaggered size={20} onClick={handleAberto} style={{ cursor: 'pointer' }} />
                </div>
            </nav>

            {/* Offcanvas (menu lateral) */}
            <Offcanvas className={styles.meuoffcanvas} show={openMenu} onHide={handleFechado} placement="top">
                <Offcanvas.Body className={styles.bodylateral}>
                    <Nav className={styles.navlateral}>
                        <div className={styles.navitemslateral}>
                            <NavDropdown className={styles.item1} title="O Projeto">
                                <NavDropdown.Item className={styles.item} as={Link} href='/sobre-nos'> Sobre Nós </NavDropdown.Item>
                                <NavDropdown.Item className={styles.item} as={Link} href="/sobre-nos/tampets-na-midia"> Tampets na Mídia </NavDropdown.Item>
                                <NavDropdown.Item className={styles.item} as={Link} href="/sobre-nos/galeria-tampets"> Galeria de Fotos </NavDropdown.Item>
                            </NavDropdown>
                            <Link className={styles.item} href="/relatorio"> Relatório </Link>
                            <Link className={styles.item} href="/ponto-coleta"> Ponto de Coleta </Link>
                            <Link className={styles.item} href="/como-doar"> Como Doar </Link>

                            <div className={styles.bttn}>
                                <button className={styles.button} onClick={() => { router.push("/login") }}>
                                    <RiLoginCircleLine size={20} /> Login
                                </button>
                            </div>
                        </div>

                    </Nav>
                </Offcanvas.Body>
                <Offcanvas.Header closeButton className={styles.titulomenu} />
            </Offcanvas>

        </>
    );
}
