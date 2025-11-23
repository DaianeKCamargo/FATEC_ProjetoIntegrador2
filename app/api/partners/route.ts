import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const filePath = path.join(process.cwd(), "partners.json");

function readFile() {
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, JSON.stringify([]));
  }
  return JSON.parse(fs.readFileSync(filePath, "utf-8"));
}

function writeFile(data: any) {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
}

// GET – lista tudo
export async function GET() {
  const partners = readFile();
  return NextResponse.json(partners);
}

// POST – adiciona novo
export async function POST(req: Request) {
  const body = await req.json();
  const partners = readFile();

  partners.push(body);

  writeFile(partners);

  return NextResponse.json({ success: true });
}
