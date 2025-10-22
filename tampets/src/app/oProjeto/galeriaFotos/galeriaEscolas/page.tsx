'use client';

import Card from "@/Components/Card";


export default function galeriaEscolas() {
    return (
        <section>
            <div style={{ textAlign: "center", marginBottom: "20px", marginTop: "20px" }}>
                <h1>TamPets nas escolas</h1>
                <h2>Registros dos melhores momentos do projeto TamPets dentro das escolas!</h2>
            </div>
            <div>
                <Card
                            imagem={"/tampets112023.webp"}
                            titulo="Escola de Tal"
                            descricao="Visita a Escola de Tal para palestra de conscientização!"
                          />
            </div>
        </section>
    );
}