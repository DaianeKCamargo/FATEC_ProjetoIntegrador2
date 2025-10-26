'use client';

interface LocalColetaProps {
    nome_estabelecimento: string;
    endereco: string;
    telefone: string;
    horario_funcionamento: string;
}

export default function LocalColeta({
    nome_estabelecimento,
    endereco,
    telefone,
    horario_funcionamento
}: LocalColetaProps) {
    return(
        <div>
            <h3>{nome_estabelecimento}</h3>
            <p>{endereco}</p>
            <p>{telefone}</p>
            <p>{horario_funcionamento}</p>
        </div>
    )
}