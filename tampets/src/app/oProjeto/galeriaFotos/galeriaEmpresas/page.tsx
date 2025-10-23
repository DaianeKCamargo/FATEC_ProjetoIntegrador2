import Card from "@/Components/Card";


export default function GaleriaEmpresas()

{
    return (
      <section>
        <h1 style={{ textAlign: "center", marginBottom: "20px", marginTop: "20px" }}>
            TamPets nas Empresas 📸</h1>

        <div style={{ display: "flex", gap: "20px", flexWrap: "wrap", justifyContent: "center" }}>
          <Card
            imagem={"/coleta.PNG"}
            titulo="Pontos de Coleta"
            descricao="Pontos de Coleta do Projeto!"
            className="card"
          />
          <Card
            imagem={"/tampetszf.jpg"}
            titulo="Empresas"
            descricao="TamPets nas Empresas!"
            className="card"
          /> 

          <Card
            imagem={"/evento.PNG"}
            titulo="Eventos"
            descricao="Eventos do Projeto!"
            className="card"
          />

          <Card
            imagem={"/tampets112023.webp"}
            titulo="Escolas"
            descricao="Escolas que Participam!"
            className="card"
          />
        </div>
      </section>
    )
}