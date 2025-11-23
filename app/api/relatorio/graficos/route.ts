import { NextResponse } from "next/server";
import { relatorioData, relatorioCo2 } from "../data";

// para método http GET para buscar dados por ano, nos gráficos
export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const year = Number(searchParams.get("year"));

    if (!year) {
        return NextResponse.json(
            { error: "Você precisa enviar ?year=YYYY na URL." },
            { status: 400 }
        );
    }

    const capsData = relatorioData.filter((item) => item.year === year);
    const co2Data = relatorioCo2.filter((item) => item.year === year);

    if (capsData.length === 0) {
        return NextResponse.json(
            { error: "Nenhum registro encontrado para esse ano." },
            { status: 404 }
        );
    }

    return NextResponse.json({
        relatorio: capsData,
        co2: co2Data
    });
}