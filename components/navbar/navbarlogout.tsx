'use client';

import { Button, Form, Nav, NavDropdown } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { RiLoginCircleLine } from "react-icons/ri";
import styles from '@/styles/navbarlogout.module.css';
import router, { useRouter } from 'next/router';
import Link from 'next/link';
import { FaBarsStaggered, FaXmark } from 'react-icons/fa6';
import { useState } from 'react';


export default function NavbarLogout() {

    const [openMenu, setOpenMenu] = useState<boolean>(false);

    // const router = useRouter();

    return (
        <>
            <div className={styles.faixa} />

            <nav className={styles.navbar}>
                <div className={styles.logotampets}>
                    <a href="/"><img className={styles.logo} src="/logo_tampets.png" alt="Logo Tampets" width={200} height={100} /></a>
                </div>
                <div className={styles.navitems}>
                    <NavDropdown className={styles.item} title="O Projeto">
                        <NavDropdown.Item className={styles.item} href="#action3"> Quem somos </NavDropdown.Item>
                        <NavDropdown.Item className={styles.item} href="#action4"> Tampets na Mídia </NavDropdown.Item>
                        <NavDropdown.Item className={styles.item} href="#action5"> Galeria de Fotos </NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown className={styles.item} title="Relatório">
                        <NavDropdown.Item className={styles.item} href=''> Gás Carbônico - CO2 </NavDropdown.Item>
                    </NavDropdown>
                    <Link className={styles.item} href={""}> Ponto de Coleta </Link>
                    <Link className={styles.item} href={""}> Como Doar </Link>
                </div>
                <div className={styles.navhamburguer}>
                    <button className="menuButton" onClick={() => setOpenMenu(!openMenu)}>
                        {openMenu ? <FaXmark size={20}/> : <FaBarsStaggered size={20}/>}
                    </button>
                </div>
                <Form className={styles.btn}>
                    <button className={styles.button}>
                        <RiLoginCircleLine size={20} /> Login
                    </button>
                </Form>
            </nav>

        </>
    );
}

// fazer parte mobile e logado