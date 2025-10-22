import CardDesenhado from "@/Components/CardDesenhado";

export default function GaleriaFotos() {
    return (
      <section>
        <h1 style={{ textAlign: "center", marginBottom: "20px", marginTop: "20px" }}>Galeria TamPets 📸</h1>

        <div style={{ display: "flex", gap: "20px", flexWrap: "wrap", justifyContent: "center" }}>
          <CardDesenhado
            imagem={"/coleta.PNG"}
            titulo="Pontos de Coleta"
            descricao="Pontos de Coleta do Projeto!"
          />
          <CardDesenhado
            imagem={"/tampetszf.jpg"}
            titulo="Empresas"
            descricao="TamPets nas Empresas!"
          /> 

          <CardDesenhado
            imagem={"/evento.PNG"}
            titulo="Eventos"
            descricao="Eventos do Projeto!"
          />

          <CardDesenhado
            imagem={"/tampets112023.webp"}
            titulo="Escolas"
            descricao="Escolas que Participam!"
          />
        </div>
      </section>
    )
}