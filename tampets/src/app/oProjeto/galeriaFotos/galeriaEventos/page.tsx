import Card from "@/Components/Card";

;

export default function GaleriaEventos() {
    return (
        <section>
            <div style={{ textAlign: "center", marginBottom: "20px", 
                marginTop: "20px", padding: "2px" }}>
                <h1 style={{ textAlign: "center", marginBottom: "20px", marginTop: "20px" }}>
                TamPets nos Eventos 📸
                </h1>
                <h2 style={{ fontSize: "24px" }}>
                    Registros dos melhores momentos dos eventos que a TamPets participou!
                </h2>
            </div>

            <div style={{ display: "flex", gap: "20px", flexWrap: "wrap", justifyContent: "center" }}>
                <Card
                    imagem={"/evento.PNG"}
                    titulo="Eventos"
                    descricao="TamPets nos Eventos!"
                    className="card"
                />
                <Card
                    imagem={"/evento.PNG"}
                    titulo="Eventos"
                    descricao="TamPets nos Eventos!"
                    className="card"
                />
                <Card
                    imagem={"/evento.PNG"}
                    titulo="Eventos"
                    descricao="TamPets nos Eventos!"
                    className="card"
                />
                <Card
                    imagem={"/evento.PNG"}
                    titulo="Eventos"
                    descricao="TamPets nos Eventos!"
                    className="card"
                />
                <Card
                    imagem={"/evento.PNG"}
                    titulo="Eventos"
                    descricao="TamPets nos Eventos!"
                    className="card"
                />
                <Card
                    imagem={"/evento.PNG"}
                    titulo="Eventos"
                    descricao="TamPets nos Eventos!"
                    className="card"
                />
                <Card
                    imagem={"/evento.PNG"}
                    titulo="Eventos"
                    descricao="TamPets nos Eventos!"
                    className="card"
                />
                <Card
                    imagem={"/evento.PNG"}
                    titulo="Eventos"
                    descricao="TamPets nos Eventos!"
                    className="card"
                />
            </div>
        </section>
    );
}
