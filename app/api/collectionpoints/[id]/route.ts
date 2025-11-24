import { NextRequest, NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

const filePath = path.join(process.cwd(), "data", "collectionpoints.json");


// DELETE /api/partners/:id
export async function DELETE(
    request: NextRequest,
    context: { params: Promise<{ id: string }> }
) {
    const { id } = await context.params;

    try {
        const jsonData = await fs.readFile(filePath, "utf8");
        const collectionpoints = JSON.parse(jsonData);

        const filtered = collectionpoints.filter((p: any) => p.id !== id);

        await fs.writeFile(filePath, JSON.stringify(filtered, null, 2));

        return NextResponse.json({ success: true });
    } catch (error) {
        return NextResponse.json({ error: "Erro ao deletar" }, { status: 500 });
    }
}

// PUT /api/partners/:id
export async function PUT(
    request: NextRequest,
    context: { params: Promise<{ id: string }> }
) {
    const { id } = await context.params;
    const body = await request.json();

    try {
        const jsonData = await fs.readFile(filePath, "utf8");
        const collectionpoints = JSON.parse(jsonData);

        const index = collectionpoints.findIndex((p: any) => p.id === id);
        if (index === -1) {
            return NextResponse.json({ error: "Collection Point not found" }, { status: 404 });
        }

        collectionpoints[index] = { ...collectionpoints[index], ...body };

        await fs.writeFile(filePath, JSON.stringify(collectionpoints, null, 2));

        return NextResponse.json({ success: true, collectionpoints: collectionpoints[index] });
    } catch (error) {
        return NextResponse.json({ error: "Erro ao atualizar" }, { status: 500 });
    }
}