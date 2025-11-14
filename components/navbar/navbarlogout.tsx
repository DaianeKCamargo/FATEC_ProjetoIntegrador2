'use client';

import { Form, Nav, NavDropdown, Offcanvas } from 'react-bootstrap';
import { RiLoginCircleLine } from "react-icons/ri";
import styles from '@/styles/navbarlogout.module.css';
import Link from 'next/link';
import { FaBarsStaggered } from 'react-icons/fa6';
import { useState } from 'react';


export default function NavbarLogout() {

    const [openMenu, setOpenMenu] = useState<boolean>(false);

    const handleFechado = () => setOpenMenu(false);
    const handleAberto = () => setOpenMenu(true);


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
                        <NavDropdown.Item className={styles.item} href="#action3"> Quem somos </NavDropdown.Item>
                        <NavDropdown.Item className={styles.item} href="#action4"> Tampets na Mídia </NavDropdown.Item>
                        <NavDropdown.Item className={styles.item} href="#action5"> Galeria de Fotos </NavDropdown.Item>
                    </NavDropdown>
                    
                    <Link className={styles.item} href={""}> Relatório </Link>
                    <Link className={styles.item} href={""}> Ponto de Coleta </Link>
                    <Link className={styles.item} href={""}> Como Doar </Link>
                </div>
                <Form className={styles.btn}>
                    <button className={styles.button}>
                        <RiLoginCircleLine size={20} /> Login
                    </button>
                </Form>

                {/* ITEM MOBILE */}
                <div className={styles.navhamburguer}>
                    <FaBarsStaggered size={30} onClick={handleAberto} style={{ cursor: 'pointer' }} />
                </div>
            </nav>

            {/* Offcanvas (menu lateral) */}
            <Offcanvas className={styles.meuoffcanvas} show={openMenu} onHide={handleFechado} placement="top">

                <Offcanvas.Body className={styles.bodylateral}>
                    <Nav className={styles.navlateral}>
                        <div className={styles.navitemslateral}>
                            <NavDropdown className={styles.item} title="O Projeto">
                                <NavDropdown.Item className={styles.item} href="#action3"> Quem somos </NavDropdown.Item>
                                <NavDropdown.Item className={styles.item} href="#action4"> Tampets na Mídia </NavDropdown.Item>
                                <NavDropdown.Item className={styles.item} href="#action5"> Galeria de Fotos </NavDropdown.Item>
                            </NavDropdown>
                            <Link className={styles.item} href={""}> Relatório </Link>
                            <Link className={styles.item} href={""}> Ponto de Coleta </Link>
                            <Link className={styles.item} href={""}> Como Doar </Link>
                        </div>
                    </Nav>
                </Offcanvas.Body>
                <Offcanvas.Header closeButton className={styles.titulomenu} />
            </Offcanvas>

        </>
    );
}
