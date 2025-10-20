'use client';

import Link from "next/link";
import Image from "next/image";
import NavItem, { NavItemInterface } from "./NavItem";

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
            url: "/doacoes",
            label: "Doações"
        },
        {
            url: "/parceiros",
            label: "Parceiros"
        },
    ];

    return (
        <header>
            <nav className="navbar">
                <Link href="/">
                    <Image src="/logoHome.png" alt="Logo Tampets" width={350} height={150}/>
                </Link>
                 <ul className="nav-items">
                    {items.map((items, index) => (
                        <NavItem 
                            key={index} 
                            url={items.url} 
                            label={items.label} 
                        />
                    ))}
                 </ul>

                 <button className="auth-button"> Login | Cadastro </button>
            </nav>

            {/* Using styled-jsx so TypeScript does not require a .css declaration file */}
            <style jsx>{`
                .navbar {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    padding: 12px 24px;
                    background: #fff;
                    box-shadow: 0 1px 3px rgba(0,0,0,0.08);
                }

                .nav-items {
                    list-style: none;
                    display: flex;
                    gap: 16px;
                    margin: 0;
                    padding: 0;
                    align-items: center;
                }

                .nav-items :global(a) {
                    color: #111;
                    text-decoration: none;
                    font-weight: 500;
                }

                .auth-button {
                    background: transparent;
                    border: 1px solid #ccc;
                    padding: 6px 12px;
                    border-radius: 4px;
                    cursor: pointer;
                }

                @media (max-width: 640px) {
                    .navbar {
                        flex-direction: column;
                        gap: 12px;
                        align-items: flex-start;
                    }
                }
            `}</style>
        </header>
    );
}

export default NavegationBar;

// https://www.youtube.com/watch?v=S5uQA-2NspY video para finalizar a navbar
