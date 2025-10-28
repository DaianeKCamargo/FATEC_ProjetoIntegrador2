'use client';

import { PiCopyrightThin } from "react-icons/pi";

export default function Copyright() {
    return (
        <div className="direitos-autorais">
            <div className="politicas">
                <p>Politica de Privacidade</p>
            </div>
            <div className="divisor">
                <p>|</p>
            </div>
            <div className="copyright" >
                <p><PiCopyrightThin style={{ display: "inline-block", marginRight: "2px" }} /> 2025 Code & Cloud. Todos os direitos reservados.</p>
            </div>


            <style jsx>
                {`
                    .direitos-autorais {
                        display: flex;
                        flex-direction: row;
                        justify-content: space-around;
                        align-items: center;
                        background: linear-gradient(to right, #35964f9c, #a8eebaff);
                        border-top: solid 0.1rem #b5b5b5;
                        padding: 1rem;
                        color: #8c8c8c;
                        font-size: 1.2rem;    
                    }

                    .politicas {
                        margin-left: 10rem;
                        cursor: pointer;
                    }

                    .copyright {
                        flex-direction: column;                    
                    }

                    @media (max-width: 768px) {
                        .direitos-autorais {    
                            display: grid;
                            grid-template-columns: repeat(2, 1fr);
                            font-size: 0.7rem;
                        }

                        .divisor {
                            display: none;
                        }


                        .copyright {
                            border-left: 0.1rem solid;
                            padding-left: 3.5rem;
                        }
                    }

                `}
            </style>
        </div>
    );

}