'use client';

import { Button } from "react-bootstrap";
import { SocialIcon } from "react-social-icons";


export default function Footer() {
    return (
        <div className="footer">
            <div className="redes-sociais">
                <h2> REDES SOCIAIS </h2>
                <div className="instagram">
                    <SocialIcon url="https://www.instagram.com/tampetsorocaba/" />
                    <label htmlFor=""> Instagram </label>
                </div>
                <div className="facebook">
                    <SocialIcon url="https://www.facebook.com/ProjetoTampets/" />
                    <label htmlFor=""> Facebook </label>
                </div>
            </div>

            <div className="seja-parceiro">
                <h2> VENHA SE TORNAR UM PARCEIRO! </h2>
                <p>Entre em contato  conosco para saber como você pode ajudar!</p>
                <button className="news-card-button">Leia mais</button>

            </div>

            <div className="contato">
                <h2>  ENTRE EM CONTATO CONOSCO </h2>

                
            </div>


            <style jsx>
                {`
                .footer {
                    flex-direction: row;
                    justify-content: space-around;
                    align-items: center;
                    background: linear-gradient(to right, #65a175ff, #a8eebaff);
                    height: 20rem;
                    box-shadow: 0 0 0.2rem 0.4rem rgba(0,0,0,0.08);
                    padding: 2rem;
                    color: #333;
                }

                .redes-sociais {
                    display: flex;
                    justify-content: center;
                    flex-direction: column;
                }

                .instagram {
                    display: flex;
                    justify-content: space-around;
                    align-items: center;
                    font-family: instagram Sans;
                    font-size: 2.0rem;  
                    margin-top: 1rem;               
                }

                .facebook {
                    display: flex;
                    justify-content: space-around;
                    align-items: center;
                    font-family: facebook Sans;
                    font-size: 2.0rem;  
                    margin-top: 1rem;               
                }
                
                .seja-parceiro {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    flex-direction: column;
                }

                p {
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



                
                
            `}
            </style>
        </div>
    )
}