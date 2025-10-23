'use client';

import Card from "@/Components/Card";


export default function galeriaEscolas() {
    return (
        <section>
            <div style={{ textAlign: "center", marginBottom: "20px", 
                marginTop: "20px", padding: "2px" }}>
                <h1>TamPets nas escolas</h1>
                <h2 style={{ fontSize: "24px" }}>
                    Registros dos melhores momentos do projeto TamPets dentro das escolas!</h2>
            </div>
            <div style={{marginBottom:"10px", marginTop:"10px",
                 display: "flex", gap: "20px", flexWrap: "wrap", justifyContent: "center"    }}>
                <Card
                            imagem={"/tampets112023.webp"}
                            titulo="Escola de Tal"
                            descricao="Visita a Escola de Tal para palestra de conscientização!"
                            className="Card"
                />
                <Card
                            imagem={"/tampets112023.webp"}
                            titulo="Escola de Tal"
                            descricao="Visita a Escola de Tal para palestra de conscientização!"
                            className="Card"
                />
                <Card
                            imagem={"/tampets112023.webp"}
                            titulo="Escola de Tal"
                            descricao="Visita a Escola de Tal para palestra de conscientização!"
                            className="Card"
                />
                <Card
                            imagem={"/tampets112023.webp"}
                            titulo="Escola de Tal"
                            descricao="Visita a Escola de Tal para palestra de conscientização!"
                            className="Card"
                />
                <Card
                            imagem={"/tampets112023.webp"}
                            titulo="Escola de Tal"
                            descricao="Visita a Escola de Tal para palestra de conscientização!"
                            className="Card"
                />
                <Card
                            imagem={"/tampets112023.webp"}
                            titulo="Escola de Tal"
                            descricao="Visita a Escola de Tal para palestra de conscientização!"
                            className="Card"
                />
                <Card
                            imagem={"/tampets112023.webp"}
                            titulo="Escola de Tal"
                            descricao="Visita a Escola de Tal para palestra de conscientização!"
                            className="Card"
                />
                <Card
                            imagem={"/tampets112023.webp"}
                            titulo="Escola de Tal"
                            descricao="Visita a Escola de Tal para palestra de conscientização!"
                            className="Card.css"
                />
            </div>
        </section>
    );
}