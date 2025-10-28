interface TampleteTituloInetrface {
    titulo: string;
    descricao: string;
    color: string;
}

export default function TampleteTitulo(props: TampleteTituloInetrface) {
    return (
        <div className="titulo" style={{backgroundColor: props.color}}>
            <h1>{props.titulo}</h1>
            <p>{props.descricao}</p>

            <style jsx>
                {`
                    .titulo {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        flex-direction: column;
                        padding: 10rem;
                        color: #333;
                    }

                    h1 {
                        font-size: 3.5rem;
                    }

                    p {
                        font-size: 1.8rem;
                    }

                    @media (max-width: 768px) {
                        .titulo {
                            padding: 5rem;
                            text-align: center;
                        }

                         h1 {
                            font-size: 2.5rem;
                        }

                        p {
                            font-size: 1.4rem;
                        }
                    }
                `}

            </style>
        </div>
    );
}