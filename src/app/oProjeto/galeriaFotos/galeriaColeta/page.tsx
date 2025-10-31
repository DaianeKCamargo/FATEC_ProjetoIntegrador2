'use client';
import Card from "@/components/Card";



export default function galeriaColetas() {
    return (
        <section>
            <div style={{
                textAlign: "center", marginBottom: "20px",
                marginTop: "20px", padding: "2px"
            }}>
                <h1>Coletas TamPets</h1>
                <h2 style={{ fontSize: "24px" }}>
                    A coleta é um dos momentos mais importantes do projeto TamPets,
                    e aqui estão alguns registros desses momentos especiais!
                </h2>
            </div>
            <div style={{
                marginBottom: "10px", marginTop: "10px",
                display: "flex", gap: "20px", flexWrap: "wrap", justifyContent: "center"
            }}>

                <Card
                    imagem={"/coleta.PNG"}
                    titulo="Coleta TamPets"
                    descricao="Coleta das tampinhas no centro tal"
                    className="card"
                />

                <Card
                    imagem={"/coleta.PNG"}
                    titulo="Coleta TamPets"
                    descricao="Coleta das tampinhas no centro tal"
                    className="card"
                />
                <Card
                    imagem={"/coleta.PNG"}
                    titulo="Coleta TamPets"
                    descricao="Coleta das tampinhas no centro tal"
                    className="card"
                />
                <Card
                    imagem={"/coleta.PNG"}
                    titulo="Coleta TamPets"
                    descricao="Coleta das tampinhas no centro tal"
                    className="card"
                />
                <Card
                    imagem={"/coleta.PNG"}
                    titulo="Coleta TamPets"
                    descricao="Coleta das tampinhas no centro tal"
                    className="card"
                />
                <Card
                    imagem={"/coleta.PNG"}
                    titulo="Coleta TamPets"
                    descricao="Coleta das tampinhas no centro tal"
                    className="card"
                />
                <Card
                    imagem={"/coleta.PNG"}
                    titulo="Coleta TamPets"
                    descricao="Coleta das tampinhas no centro tal"
                    className="card"
                />
                <Card
                    imagem={"/coleta.PNG"}
                    titulo="Coleta TamPets"
                    descricao="Coleta das tampinhas no centro tal"
                    className="card"
                />
                <Card
                    imagem={"/coleta.PNG"}
                    titulo="Coleta TamPets"
                    descricao="Coleta das tampinhas no centro tal"
                    className="card"
                />
                <Card
                    imagem={"/coleta.PNG"}
                    titulo="Coleta TamPets"
                    descricao="Coleta das tampinhas no centro tal"
                    className="card"
                />
                <Card
                    imagem={"/coleta.PNG"}
                    titulo="Coleta TamPets"
                    descricao="Coleta das tampinhas no centro tal"
                    className="card"
                />
                <Card
                    imagem={"/coleta.PNG"}
                    titulo="Coleta TamPets"
                    descricao="Coleta das tampinhas no centro tal"
                    className="card"
                />

            </div>
        </section>
    );
}
