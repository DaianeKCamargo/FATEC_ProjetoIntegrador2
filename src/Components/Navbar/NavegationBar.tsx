'use client';

import Link from "next/link";
import Image from "next/image";
import NavItem, { NavItemInterface } from "./NavItem";
import { usePathname, useRouter } from "next/navigation";
import { FaBarsStaggered, FaXmark } from "react-icons/fa6";
import { useState } from "react";
import { BsPersonHeart } from "react-icons/bs";
import { NavDropdown } from "react-bootstrap";
import { RiLoginCircleLine } from "react-icons/ri";

// Objeto de navegação da Navbar
export function NavegationBar() {
    const items: NavItemInterface[] = [
        // {
        //     url: "/oProjeto",
        //     label: "O Projeto"
        // },
        {
            url: "/relatorio",
            label: "Relatório"
        },
        {
            url: "/pontoColeta",
            label: "Ponto de Coleta"
        },
        {
            url: "/comoDoar",
            label: "Como Doar"
        },
        {
            url: "/parceiros",
            label: "Parceiros"
        },
    ]

    // Hook para pegar a rota atual
    const pathname = usePathname();

    // Estado para controlar o menu mobile
    const [openMenu, setOpenMenu] = useState<boolean>(false);

    // Hook para redirecionar para a página de login/cadastro
    const router = useRouter();

    return (
        <header>
            <nav className="navbar">
                <Link href="/">
                    <Image className="logo" src="/logoTampets2.png" alt="Logo Tampets" width={200} height={300} priority />
                </Link>


                <ul className={`nav-items ${openMenu ? 'open' : ''}`}>
                    <li className="dropdown">
                        <NavDropdown title="O Projeto" className="nav-dropdown">
                            <NavDropdown.Item onClick={() => { router.push('/oProjeto');}}>Sobre Nós</NavDropdown.Item>
                            <NavDropdown.Item onClick={() => { router.push('/oProjeto/naMidia');}}>Tampets na Mídia</NavDropdown.Item>
                            <NavDropdown.Item onClick={() => { router.push('/oProjeto/galeriaFotos');}}>Galeria de Fotos</NavDropdown.Item>
                        </NavDropdown>
                    </li>
                    {items.map((item, index) => (
                        <NavItem
                            key={index}
                            url={item.url}
                            label={item.label}
                            isActive={pathname === item.url}
                        />
                    ))}
                </ul>

                {/* Icone Hamburger da Barra de Navegação Mobile */}
                <button className="menuButton" onClick={() => setOpenMenu(!openMenu)}>
                    {openMenu ? <FaXmark /> : <FaBarsStaggered />}
                </button>

                {/* Icone de Login da Barra de Navegação Mobile */}
                <button className="loginButton" onClick={() => { router.push('/login'); }}>
                    <BsPersonHeart />
                </button>


                {/* Botão de Login/Cadastro para Desktop */}
                <button className="loginCadastro" onClick={() => { router.push('/login'); }}>
                    Login | Cadastro
                </button>



                {/* Usando styled-jsx para que o TypeScript não exija um arquivo de declaração .css */}
                <style jsx>
                    {` 
                        .navbar {
                            display: flex;
                            align-items: flex-start;
                            justify-content: space-around;
                            background: #fff;
                            box-shadow: 0 0.1rem 0.3rem rgba(0,0,0,0.08);
                            padding: 1rem 2rem;
                            font-size: 1.8rem;
                            z-index: 1000;
                        } 

                        .dropdown {
                            padding: 4px 0px;
                            transition: color 0.3s ease;
                            font-family: inherit;
                        }

                        .dropdown.active {
                            font-weight: 600;
                            border-bottom: 3px solid #fbbc04;
                        } 
                        
                        .dropdown:hover {
                            font-weight: 600;
                            border-bottom: 3px solid #fbbc04;
                        }


                        .nav-items {
                            list-style: none;
                            display: flex;
                            gap: 2rem;
                            margin: 0;
                            align-items: center;
                            margin-top: 1rem; 
                        }

                        .nav-items.open {
                            flex-direction: column;
                            position: absolute;
                            top: 70%;
                            left: 45%;
                            widht: 100%;
                            background-color: #fff;
                            padding: 1rem; 
                            border: 0.1rem solid #ccc;
                            box-shadow: 0 0.4rem 0.8rem rgba(0,0,0,0.1);                          
                        }

                        .menuButton {
                            display: none;
                            background: transparent;
                            margin-top: 2rem;
                            cursor: pointer;

                        }

                        .loginButton {
                            display: none;
                        }

                        .loginCadastro {  
                            display: flex;
                            justifity-direction: row;            
                            margin-top: 1rem;
                            background: #FBBC04;
                            border: 0.1rem solid #ccc;
                            padding: 0.6rem 1.2rem;
                            border-radius: 0.4rem;
                            cursor: pointer;
                            font-family: inherit;
                            font-weight: 500;
                            transition: background 0.3s ease, border-top 0.3s ease, border-right 0.3s ease;
                        }

                        .loginCadastro:hover {
                            background: #f0a8;
                            border-top: 0.1rem solid #333;
                            border-right: 0.1rem solid #333;
                        }
                        

                        @media (max-width: 768px) {
                        
                            .navbar { 
                                justify-content: space-around;
                                align-items: center;
                                flex-direction: row;
                            }
                                
                            .nav-items {
                                display: none;
                            }

                            .nav-items.open {
                                display: flex;
                            }

                            .menuButton {
                                display: block;
                                background: transparent;
                                margin-top: 0.2rem;
                                cursor: pointer;
                                padding-right: 3rem;
                            }
                            
                            .loginButton {
                                display: block;
                                background: transparent;
                                margin-top: 0.2rem;
                                cursor: pointer;
                                border-left: 0.3rem solid #333;
                                padding-left: 4rem;

                            }

                            .loginCadastro {
                                Display: none;
                            }


                        } 
                    `}
                </style>
            </nav>
        </header>
    );
}

export default NavegationBar;

// OBSERVAÇÕES: Ao inspecionar a página, ela está apresentando um erro em width e hight na imagem, como a imagem está normal, resolvi deixar do jeito que está.
