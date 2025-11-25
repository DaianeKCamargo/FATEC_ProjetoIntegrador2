import { NextResponse } from "next/server";

export async function POST(request: Request) {
    const body = await request.json();

    console.log("Recebido do painel ADM:", body);

    return NextResponse.json({
        ok: true,
        message: "Dados 'salvos' com sucesso! (Fake)"
    });
}