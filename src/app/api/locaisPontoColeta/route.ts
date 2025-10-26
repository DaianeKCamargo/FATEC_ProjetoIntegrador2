import { NextResponse } from "next/server";

export function GET() {
    return NextResponse.json ([
        {
            nome_estabelecimento: "Ponto de Coleta Central",
            endereco: "Rua Principal, 123, Centro, Sorocaba - SP",
            telefone: "(11) 1234-5678",
            horario_funcionamento: "Segunda a Sexta: 8h - 18h; Sábado: 9h - 14h"
        },
        {
            nome_estabelecimento: "EcoPonto Verde",
            endereco: "Avenida das Flores, 456, Jardim das Acácias, Sorocaba - SP",
            telefone: "(11) 9876-5432",
            horario_funcionamento: "Segunda a Sexta: 8h - 18h; Sábado: 9h - 14h"
        }
    ], {status: 200})
}