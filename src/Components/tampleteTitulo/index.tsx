'use client';

interface TampleteTituloInetrface {
    titulo: string;
    descricao: string;
    color: string;
    imagem?: string;
}

export default function TampleteTitulo(props: TampleteTituloInetrface) {
    return (
        <div className="titulo" style={{ backgroundColor: props.color }}>
            <h1>{props.titulo}</h1>
            <p>{props.descricao}</p>

            <style jsx>
                {`
                    .titulo {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        flex-direction: column;
                        padding: 6rem 2rem;
                        color: #333;
                    }

                    h1 {
                        font-size: 3.5rem;
                    }

                    p {
                        text-align: center;
                        font-size: 1.8rem;
                        text-wrap: balance;
                    }

                    @media (max-width: 768px) {
                        .titulo {
                            text-align: center;
                        }

                         h1 {
                            font-size: 3rem;
                        }

                        p {
                            font-size: 1.5rem;
                        }
                    }
                `}

            </style>
        </div>
    );
}