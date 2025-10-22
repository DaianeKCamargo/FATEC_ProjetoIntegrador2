import Card from "@/Components/Card";


export default function GaleriaFotos() {
    return (
      <section>
        <h1 style={{ textAlign: "center", marginBottom: "20px", marginTop: "20px" }}>Galeria TamPets 📸</h1>

        <div style={{ display: "flex", gap: "20px", flexWrap: "wrap", justifyContent: "center" }}>
          <Card
            imagem={"/coleta.PNG"}
            titulo="Pontos de Coleta"
            descricao="Pontos de Coleta do Projeto!"
          />
          <Card
            imagem={"/tampetszf.jpg"}
            titulo="Empresas"
            descricao="TamPets nas Empresas!"
          /> 

          <Card
            imagem={"/evento.PNG"}
            titulo="Eventos"
            descricao="Eventos do Projeto!"
          />

          <Card
            imagem={"/tampets112023.webp"}
            titulo="Escolas"
            descricao="Escolas que Participam!"
          />
        </div>
      </section>
    )
}