import { m } from "framer-motion";
import { NextResponse } from "next/server";
import { relatorioData } from "./data";

// método http GET para buscar dados por mês e ano, nos cards de resumo
export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);

    const month = Number(searchParams.get("month"));
    const year = Number(searchParams.get("year"));

    if (!month || !year) {
        return NextResponse.json(
            { error: "Você precisa enviar month e year na URL." },
            { status: 400 }
        );
    }

    const result = relatorioData.find(
        (item) => item.month === month && item.year === year
    );

    if (!result) {
        return NextResponse.json(
            { error: "Nenhum registro encontrado para esse mês/ano." },
            { status: 404 }
        );
    }

    return NextResponse.json(result);
}