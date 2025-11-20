// app/api/galeria/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { albuns } from './data';
import fs from 'fs';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';

// GET → retorna todos os álbuns
export async function GET() {
  return NextResponse.json(albuns);
}

// POST → recebe upload de imagem
export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const albumId = formData.get('albumId');
    const file = formData.get('file') as File;

    if (!albumId || !file) {
      return NextResponse.json({ error: 'albumId e file são obrigatórios' }, { status: 400 });
    }

    const album = albuns.find(a => a.id === Number(albumId));
    if (!album) {
      return NextResponse.json({ error: 'Álbum não encontrado' }, { status: 404 });
    }

    // gerar nome único para a imagem
    const fileName = `${uuidv4()}-${file.name}`;
    const uploadDir = path.join(process.cwd(), 'public', 'uploads');

    // cria a pasta uploads se não existir
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }

    const uploadPath = path.join(uploadDir, fileName);

    // salvar arquivo
    const buffer = Buffer.from(await file.arrayBuffer());
    fs.writeFileSync(uploadPath, buffer);

    // adicionar imagem ao álbum
    album.imagens.push(`/uploads/${fileName}`);

    return NextResponse.json({ message: 'Imagem enviada com sucesso', album });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: 'Erro ao processar upload' }, { status: 500 });
  }
}
