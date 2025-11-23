import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const filePath = path.join(process.cwd(), "partners.json");

// Função auxiliar para ler arquivo
function readFile() {
    if (!fs.existsSync(filePath)) {
        fs.writeFileSync(filePath, JSON.stringify([]));
    }
    return JSON.parse(fs.readFileSync(filePath, "utf-8"));
}

// Função auxiliar para salvar arquivo
function writeFile(data: any) {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
}

// DELETE /api/partners/:id
export async function DELETE(
    req: Request,
    { params }: { params: { id: string } }
) {
    const { id } = params;

    let partners = readFile();
    partners = partners.filter((p: any) => p.id !== id);


    writeFile(partners);

    return NextResponse.json({ success: true });
}
