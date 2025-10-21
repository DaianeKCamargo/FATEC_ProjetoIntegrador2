'use client';

import Link from "next/link";
import Image from "next/image";
import NavItem, { NavItemInterface } from "./NavItem";
import { usePathname } from "next/navigation";

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
    ]

    const pathname = usePathname();
    console.log(pathname);

    return (
        <header>
            <nav className="navbar">
                <Link href="/">
                    <Image className="logo" src="/logoTampetsOriginal.png" alt="Logo Tampets" width={250} height={500}/>
                </Link>

                <ul className="nav-items">
                    {items.map((item, index) => (
                        <NavItem 
                            key={index} 
                            url={item.url} 
                            label={item.label} 
                            isActive={pathname === item.url}
                        />
                    ))}
                </ul>

                <button className="loginCadastro">  
                    Login | Cadastro 
                </button>
            </nav>

            {/* Usando styled-jsx para que o TypeScript não exija um arquivo de declaração .css */}
            <style jsx>
                {`
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
                    }

                    @media (max-width: 640px) {
                        .navbar {
                            flex-direction: column;
                            gap: 10px;
                            align-items: flex-start;
                        }
                    }

                `}
            </style>
        </header>
    );
}

export default NavegationBar;

// https://www.youtube.com/watch?v=S5uQA-2NspY video para finalizar a navbar
