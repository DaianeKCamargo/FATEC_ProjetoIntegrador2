'use client';

import Link from "next/link";
import Image from "next/image";
import NavItem, { NavItemInterface } from "./NavItem";
import { usePathname } from "next/navigation";
import { FaBarsStaggered, FaXmark } from "react-icons/fa6";
import { useState } from "react";

// Objeto de navegação da Navbar
export function NavegationBar() {
    const items: NavItemInterface[] = [
        {
            url: "/oProjeto",
            label: "O Projeto"
        },
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

    return (
        <header>
            <nav className="navbar">

                <Link href="/">
                    <Image className="logo" src="/logoTampets2.png" alt="Logo Tampets" width={300} height={300} />
                </Link>

                <ul className={`nav-items ${openMenu ? 'open' : ''}`}>
                    {items.map((item, index) => (
                        <NavItem
                            key={index}
                            url={item.url}
                            label={item.label}
                            isActive={pathname === item.url}
                        />
                    ))}
                </ul>

                <button className="menuButton" onClick={() => setOpenMenu(!openMenu)}>
                    {openMenu ? <FaXmark /> : <FaBarsStaggered />}
                </button>

                <button className="loginCadastro">
                    Login | Cadastro
                </button>
            </nav>


            {/* Usando styled-jsx para que o TypeScript não exija um arquivo de declaração .css */}
            <style jsx>
                {`  header {
                        .navbar {
                            display: flex;
                            align-items: flex-start;
                            justify-content: space-around;
                            background: #fff;
                            box-shadow: 0 1px 3px rgba(0,0,0,0.08);
                            padding: 0;

                            .nav-items {
                                list-style: none;
                                display: flex;
                                gap: 20px;
                                margin: 0;
                                align-items: center;
                                font-size: 18px;
                                margin-top: 10px; 

                                &.open {
                                    flex-direction: column;
                                    position: absolute;
                                    top: 150px;
                                    left: 180px;
                                    widht: 100%;
                                    background-color: #fff;
                                    padding: 10px; 
                                    border: 1px solid #ccc;
                                    box-shadow: 0 4px 8px rgba(0,0,0,0.1);                          
                                }
                            } 
                            
                        }   

                        .menuButton {
                            display: none;
                            background: transparent;
                            font-size: 24px;
                            margin-top: 20px;
                            cursor: pointer;

                        }

                        .loginCadastro {                     
                            margin-top: 40px;
                            background: #FBBC04;
                            border: 1px solid #ccc;
                            padding: 6px 12px;
                            border-radius: 4px;
                            cursor: pointer;
                            font-family: inherit;

                            &:hover {
                                background: #f0a8;
                                border-top: 2px solid #333;
                                border-right: 2px solid #333;
                            }
                        }
                    

                        @media screen and (max-width: 768px) {
                        header {
                                .navbar { 
                                    flex-direction: column;
                                    gap: 10px;
                                    align-items: center;
                                }

                                .logo {
                                    width: 80%;
                                    height: auto;
                                }
                                
                                .nav-items {
                                    display: none;

                                    &.open {
                                        display: flex;
                                    }
                                }

                                .menuButton {
                                    display: block;
                                    
                                }

                                .loginCadastro {
                                    Display: none;
                                }
                            }
                        }
                    }
                `}
            </style>
        </header>
    );
}

export default NavegationBar;

// https://www.youtube.com/watch?v=S5uQA-2NspY video para finalizar a navbar
