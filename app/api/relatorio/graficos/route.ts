import { NextResponse } from "next/server";
import { relatorioData } from "../data";

// para método htttp GET para buscar dados por ano, nos gráficos
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const year = Number(searchParams.get("year"));

  if (!year) {
    return NextResponse.json(
      { error: "Você precisa enviar ?year=YYYY na URL." },
      { status: 400 }
    );
  }

  const result = relatorioData.filter((item) => item.year === year);

  if (result.length === 0) {
    return NextResponse.json(
      { error: "Nenhum registro encontrado para esse ano." },
      { status: 404 }
    );
  }

  return NextResponse.json(result);
}