'use client';

import { Nav, NavDropdown, Offcanvas } from 'react-bootstrap';
import { RiLoginCircleLine, RiLogoutCircleLine } from "react-icons/ri";
import styles from '@/styles/navbar.module.css';
import Link from 'next/link';
import { FaBarsStaggered } from 'react-icons/fa6';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import FaixaColorida from '../FaixaColorida';
import { BiSolidHomeHeart } from "react-icons/bi";
import { BsPersonCircle } from 'react-icons/bs';
import { useAuth } from "@/context/AuthContext";

export default function NavbarLogout() {
    const { isLogged, logout } = useAuth();
    const [role, setRole] = useState<string | null>(null);

    useEffect(() => {
        const r = localStorage.getItem("role");
        setRole(r);
    }, []);

    const [openMenu, setOpenMenu] = useState(false);
    const router = useRouter();

    const handleFechado = () => setOpenMenu(false);
    const handleAberto = () => setOpenMenu(true);

    const handleGoLogin = () => {
        handleFechado();
        router.push("/login");
    };

    const handleLogout = () => {
        logout();
        handleFechado();
        router.push("/");
    };

    return (
        <>
            <FaixaColorida />

            <nav className={styles.navbar}>
                <div className={styles.logotampets}>
                    <Link href="/">
                        <img
                            className={styles.logo}
                            src="/logo_tampets.png"
                            alt="Logo Tampets"
                            width={200}
                            height={100}
                        />
                    </Link>
                </div>

                {/* DESKTOP */}
                <div className={styles.navitems}>
                    <NavDropdown className={styles.item} title="O Projeto">
                        <NavDropdown.Item className={styles.item} as={Link} href="/sobre-nos">
                            Sobre Nós
                        </NavDropdown.Item>
                        <NavDropdown.Item className={styles.item} as={Link} href="/sobre-nos/tampets-na-midia">
                            Tampets na Mídia
                        </NavDropdown.Item>
                        <NavDropdown.Item className={styles.item} as={Link} href="/sobre-nos/galeria-tampets">
                            Galeria de Fotos
                        </NavDropdown.Item>
                    </NavDropdown>

                    <Link className={styles.item} href="/relatorio">Relatório</Link>
                    <Link className={styles.item} href="/ponto-coleta">Ponto de Coleta</Link>
                    <Link className={styles.item} href="/como-doar">Como Doar</Link>
                </div>

                {/* BOTÃO DESKTOP */}
                <div className={styles.btn}>
                    {isLogged ? (
                        <div className={styles.loggedButtons}>
                            {role === "admin" ? (
                                <Link className={styles.button} href="/admin">
                                    <BsPersonCircle size={20} /> Área do Admin
                                </Link>
                            ) : (
                                <Link className={styles.button} href="/meu-perfil">
                                    <BsPersonCircle size={20} /> Meu Perfil
                                </Link>
                            )}

                            <button className={styles.button} onClick={handleLogout}>
                                <RiLogoutCircleLine size={20} /> Sair
                            </button>

                        </div>
                    ) : (
                        <button className={styles.button} onClick={handleGoLogin}>
                            <RiLoginCircleLine size={20} /> Login
                        </button>
                    )}
                </div>

                {/* HAMBURGUER MOBILE */}
                <div className={styles.navhamburguer}>
                    <FaBarsStaggered size={20} onClick={handleAberto} style={{ cursor: 'pointer' }} />
                </div>
            </nav >

            {/* MOBILE MENU */}
            < Offcanvas
                className={styles.meuoffcanvas}
                show={openMenu}
                onHide={handleFechado}
                placement="top"
            >

                <Offcanvas.Body className={styles.bodylateral}>
                    <Nav className={styles.navlateral}>
                        <div>
                            <Link href="/" onClick={handleFechado}>
                                <BiSolidHomeHeart size={30} color='#D7C216' />
                            </Link>
                        </div>

                        <div className={styles.items}>
                            <NavDropdown className={styles.item1} title="O Projeto">
                                <NavDropdown.Item
                                    className={styles.item}
                                    as={Link}
                                    href="/sobre-nos"
                                    onClick={handleFechado}
                                >
                                    Sobre Nós
                                </NavDropdown.Item>
                                <NavDropdown.Item
                                    className={styles.item}
                                    as={Link}
                                    href="/sobre-nos/tampets-na-midia"
                                    onClick={handleFechado}
                                >
                                    Tampets na Mídia
                                </NavDropdown.Item>
                                <NavDropdown.Item
                                    className={styles.item}
                                    as={Link}
                                    href="/sobre-nos/galeria-tampets"
                                    onClick={handleFechado}
                                >
                                    Galeria de Fotos
                                </NavDropdown.Item>
                            </NavDropdown>
                            <Link className={styles.item} href="/relatorio" onClick={handleFechado}>
                                Relatório
                            </Link>
                            <Link className={styles.item} href="/ponto-coleta" onClick={handleFechado}>
                                Ponto de Coleta
                            </Link>
                            <Link className={styles.item} href="/como-doar" onClick={handleFechado}>
                                Como Doar
                            </Link>
                        </div>

                        <div>
                            {isLogged ? (
                                <div className={styles.mobileButtons}>
                                    {role === "admin" ? (
                                        <Link href="/admin" onClick={handleFechado}>
                                            <BsPersonCircle size={30} color='#fa7f45' />
                                        </Link>
                                    ) : (
                                        <Link href="/meu-perfil" onClick={handleFechado}>
                                            <BsPersonCircle size={30} color='#fa7f45' />
                                        </Link>
                                    )}

                                    <button onClick={handleLogout} className={styles.mobileLogoutBtn}>
                                        <RiLogoutCircleLine size={30} color='#fa7f45' />
                                    </button>

                                </div>
                            ) : (
                                // usuário DESLOGADO → Login
                                <Link href="/login" onClick={handleFechado}>
                                    <RiLoginCircleLine size={30} color='#fa7f45' />
                                </Link>
                            )}

                        </div>

                    </Nav>
                </Offcanvas.Body>
            </Offcanvas >
        </>
    );
}
