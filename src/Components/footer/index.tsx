'use client';

import { Button } from "react-bootstrap";
import { FaInstagram } from "react-icons/fa6";
import { LiaFacebookSquare } from "react-icons/lia";
import Image from "next/image";
import { SocialIcon } from "react-social-icons";


export default function Footer() {
    return (
        <div className="footer">
            <div className="logo-redes">
                <Image className="logo" src="/logoTampetsOriginal.png" alt="Logo Tampets" width={200} height={300} priority />
                <q>Uma tampinha sozinha não tem preço, mas, unida a outras, <br/>tem um grande valor.</q>
                 
            </div>

            <div className="seja-parceiro">
                <h2> VENHA SE TORNAR UM PARCEIRO! </h2>
                <p className="mensagem-parceiro">Entre em contato  conosco para saber como você pode ajudar!</p>
                <button className="news-card-button">Leia mais</button>

            </div>

            <div className="redes-sociais">
                <div className="titulo">
                    <h3> REDES SOCIAIS </h3>
                </div>
                <div className="icons">
                    <Image className="instagram" src="/instagram.png" alt="instagram" width={32} height={32} priority />
                    <Image className="facebook" src="/facebook.png" alt="facebook" width={32} height={32} priority />
                </div>
            </div>


            <style jsx>
                {`
                .footer {
                    dispaly: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    align-items: center;
                    background: linear-gradient(to right, #35964f9c, #a8eebaff);
                    height: 25vh;
                    box-shadow: 0 0 0.2rem 0.4rem rgba(0,0,0,0.08);
                    padding: 2rem;
                    color: #333;
                }

                // LOGO //
                .logo-redes {
                    display: flex;
                    justify-content: center;
                    flex-direction: column;
                    align-items: center;
                    flex-grow: 1;
                }

                q {
                    text-align: center;
                    font-size: 1.4rem;
                    font-weight: 500;
                    margin-bottom: 2rem;
                }


                // SEJA PARCEIRO //

                .seja-parceiro {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    flex-direction: column;
                    flex-grow: 1;
                }

                .mensagem-parceiro {
                    font-size: 1.4rem;
                }

                .news-card-button {
                    padding: 8px 12px;
                    border: none;
                    background-color: #007bff;
                    color: white;
                    border-radius: 5px;
                    cursor: pointer;
                    font-weight: bold;
                    transition: background-color 0.2s;
                }

               // REDES SOCIAIS //
                .redes-sociais {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-direction: column;
                    font-size: 1.5.0rem;    
                    flex-grow: 3;             
                }


                .icons {
                    display: flex;
                    gap: 2rem;
                    margin-top: 1rem;
                    cursor: pointer;
                }

                @media (max-width: 768px) {
                    .footer {
                        height: 40vh;
                        flex-direction: column;
                        gap: 2rem;
                    }

                    .logo-redes {
                        width: 80%;
                    }

                    q {
                        display: none;
                    }

                    .seja-parceiro {
                        display: none;
                    }
                }
    
            `}
            </style>
        </div>
    )
}