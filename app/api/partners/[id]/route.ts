import { NextRequest, NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

const filePath = path.join(process.cwd(), "partners.json");

// DELETE /api/partners/:id
export async function DELETE(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;

  try {
    const jsonData = await fs.readFile(filePath, "utf8");
    const partners = JSON.parse(jsonData);

    const filtered = partners.filter((p: any) => p.id !== id);

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
    const partners = JSON.parse(jsonData);

    const index = partners.findIndex((p: any) => p.id === id);
    if (index === -1) {
      return NextResponse.json({ error: "Partner not found" }, { status: 404 });
    }

    partners[index] = { ...partners[index], ...body };

    await fs.writeFile(filePath, JSON.stringify(partners, null, 2));

    return NextResponse.json({ success: true, partner: partners[index] });
  } catch (error) {
    return NextResponse.json({ error: "Erro ao atualizar" }, { status: 500 });
  }
}
