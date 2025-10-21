import CardDesenhado from "@/Components/CardDesenhado";

export default function GaleriaFotos() {
    return (
        <section>
        <h1>Página: Galeria de Fotos</h1>

         <div style={{ display: "flex", gap: "20px", flexWrap: "wrap", justifyContent: "center" }}>
      <CardDesenhado
        imagem={"/public/coleta.PNG"}
        titulo="Pontos de Coleta"
        descricao="Pontos de Coleta do Projeto!"
      />
      <CardDesenhado
        imagem={"/public/tampetszf.jpg"}
        titulo="Empresas"
        descricao="TamPets nas Empresas!"
      />
    </div>
    </section>
    )
}